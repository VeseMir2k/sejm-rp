import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clubsGroups, setClubsGroups] = useState([]);
  const [clubGroup, setClubGroup] = useState(false);
  const [membersOfParliament, setMembersOfParliament] = useState(false);

  const fetchClubsGroups = async () => {
    const response = await fetch("https://api.sejm.gov.pl/sejm/term10/clubs");
    const data = await response.json();
    setClubsGroups(data);
  };

  const fetchMembersOfParliament = async () => {
    const response = await fetch("https://api.sejm.gov.pl/sejm/term10/MP");
    const data = await response.json();
    setMembersOfParliament(data);
  };

  useEffect(() => {
    fetchClubsGroups();
    fetchMembersOfParliament();
  }, []);

  return (
    <AppContext.Provider
      value={{ clubsGroups, clubGroup, setClubGroup, membersOfParliament }}
    >
      {children}
    </AppContext.Provider>
  );
};
