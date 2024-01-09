import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [clubsGroups, setClubsGroups] = useState(false);
  const [clubGroup, setClubGroup] = useState(false);

  const fetchClubsGroups = async () => {
    const response = await fetch("https://api.sejm.gov.pl/sejm/term10/clubs");
    const data = await response.json();
    setClubsGroups(data);
  };

  useEffect(() => {
    fetchClubsGroups();
  }, []);

  return (
    <AppContext.Provider value={{ clubsGroups, clubGroup, setClubGroup }}>
      {children}
    </AppContext.Provider>
  );
};
