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
    try {
      const response = await fetch("https://api.sejm.gov.pl/sejm/term10/clubs");

      if (!response.ok) {
        throw new Error(`Błąd pobierania danych: ${response.statusText}`);
      }

      const data = await response.json();

      // Dodatkowe sprawdzenie, czy dane są poprawne (możesz dostosować w zależności od struktury API).
      if (!data || !Array.isArray(data)) {
        throw new Error("Błędny format danych o klubach.");
      }

      setClubsGroups(data);
    } catch (error) {
      console.error("Wystąpił błąd:", error.message);
      // Dodaj odpowiednie działania w przypadku błędu, na przykład wyświetlenie komunikatu użytkownikowi.
    }
  };

  // Funkcja do pobierania danych członków parlamentu
  const fetchMembersOfParliament = async () => {
    try {
      const response = await fetch("https://api.sejm.gov.pl/sejm/term10/MP");

      if (!response.ok) {
        throw new Error(`Błąd pobierania danych: ${response.statusText}`);
      }

      const data = await response.json();

      // Dodatkowe sprawdzenie, czy dane są poprawne (możesz dostosować w zależności od struktury API).
      if (!data || !Array.isArray(data)) {
        throw new Error("Błędny format danych posłów.");
      }

      setMembersOfParliament(data);
    } catch (error) {
      console.error("Wystąpił błąd:", error.message);
      // Dodaj odpowiednie działania w przypadku błędu, na przykład wyświetlenie komunikatu użytkownikowi.
    }
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
