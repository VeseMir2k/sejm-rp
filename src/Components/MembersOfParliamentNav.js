import { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

/**
 * Komponent MembersOfParliamentNav odpowiedzialny za renderowanie nawigacji
 * zawierającej linki do poszczególnych klubów lub grup parlamentarnych.
 * Przy kliknięciu na link, wartość wprowadzona w wyszukiwarce (`setMemberInputValue("")`)
 * zostaje wyczyszczona.
 */
const MembersOfParliamentNav = () => {
  // Pobranie danych z kontekstu aplikacji za pomocą useContext
  const { clubsGroups, setMemberInputValue } = useContext(AppContext);

  // Mapowanie danych klubów/grup na elementy nawigacji
  const menu = clubsGroups.map((item, index) => (
    <Nav.Item key={index}>
      {/* Utworzenie nawigacyjnego linku do podstrony danego klubu lub grupy */}
      <NavLink
        to={`/poslowie/${item.id.toLowerCase()}`}
        // Przy kliknięciu na link, wartość wprowadzona w wyszukiwarce zostaje wyczyszczona
        onClick={() => setMemberInputValue("")}
        className="nav-link members-list"
      >
        {item.id}
      </NavLink>
    </Nav.Item>
  ));

  // Renderowanie nawigacji
  return (
    <Nav variant="tabs" className="mb-4">
      {menu}
    </Nav>
  );
};

export default MembersOfParliamentNav;
