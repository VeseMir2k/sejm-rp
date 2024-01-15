import { createContext, useState, useEffect } from "react";

// Utworzenie kontekstu
export const AppContext = createContext();

// Komponent dostawcy (provider) dla kontekstu
export const AppProvider = ({ children }) => {
  // Stan dla klubów/grup
  const [clubsGroups, setClubsGroups] = useState([]);
  // Stan dla członków parlamentu
  const [membersOfParliament, setMembersOfParliament] = useState([]);
  // Stan dla wartości wprowadzonej przez użytkownika w wyszukiwarce
  const [memberInputValue, setMemberInputValue] = useState("");

  // Funkcja do pobierania danych klubów/grup
  const fetchClubsGroups = async () => {
    const response = await fetch("https://api.sejm.gov.pl/sejm/term10/clubs");
    const data = await response.json();
    setClubsGroups(data);
  };

  // Funkcja do pobierania danych członków parlamentu
  const fetchMembersOfParliament = async () => {
    const response = await fetch("https://api.sejm.gov.pl/sejm/term10/MP");
    const data = await response.json();
    setMembersOfParliament(data);
  };

  // Efekt pobierający dane klubów/grup i członków parlamentu przy pierwszym renderowaniu
  useEffect(() => {
    fetchClubsGroups();
    fetchMembersOfParliament();
  }, []);

  // Udostępnienie danych za pomocą kontekstu
  return (
    <AppContext.Provider
      value={{
        clubsGroups,
        membersOfParliament,
        memberInputValue,
        setMemberInputValue,
      }}
    >
      {/* Renderowanie komponentów potomnych (children) */}
      {children}
    </AppContext.Provider>
  );
};
