import { Outlet } from "react-router-dom";
import MembersOfParliamentNav from "../Components/MembersOfParliamentNav";

/**
 * Komponent MembersOfParliament, który zawiera nawigację dotyczącą członków parlamentu (MembersOfParliamentNav).
 * Wykorzystuje Outlet do renderowania zagnieżdżonych stron zdefiniowanych w rodzicu.
 */
const MembersOfParliament = () => {
  return (
    <>
      {/* Wyświetlenie nawigacji dotyczącej członków parlamentu */}
      <MembersOfParliamentNav />
      {/* Outlet służący do renderowania zagnieżdżonych stron zdefiniowanych w rodzicu */}
      <Outlet />
    </>
  );
};

export default MembersOfParliament;
