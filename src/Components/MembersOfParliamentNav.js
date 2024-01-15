import { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

// Komponent MembersOfParliamentNav
const MembersOfParliamentNav = () => {
  // Pobieranie danych z kontekstu aplikacji za pomocą useContext
  const { clubsGroups, setMemberInputValue } = useContext(AppContext);

  // Tworzenie menu nawigacyjnego na podstawie danych klubów/grup
  const menu = clubsGroups.map((item, index) => (
    <Nav.Item key={index}>
      {/* NavLink do nawigacji między klubami/grupami */}
      <NavLink
        to={`/poslowie/${item.id.toLowerCase()}`}
        onClick={() => setMemberInputValue("")} // Resetowanie wartości wyszukiwania po kliknięciu w nawigację
        className="nav-link members-list"
      >
        {item.id}
      </NavLink>
    </Nav.Item>
  ));

  // Renderowanie menu nawigacyjnego
  return <Nav variant="tabs">{menu}</Nav>;
};

export default MembersOfParliamentNav;
