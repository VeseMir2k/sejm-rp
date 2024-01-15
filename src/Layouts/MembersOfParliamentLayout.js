import { Outlet } from "react-router-dom";
import MembersOfParliamentNav from "../Components/MembersOfParliamentNav";

// Komponent MembersOfParliament
const MembersOfParliament = () => {
  // Renderowanie strony dotyczącej członków parlamentu
  return (
    <>
      {/* Wyświetlanie nawigacji dotyczącej członków parlamentu */}
      <MembersOfParliamentNav />
      {/* Outlet służący do renderowania zagnieżdżonych stron zdefiniowanych w rodzicu */}
      <Outlet />
    </>
  );
};

export default MembersOfParliament;
