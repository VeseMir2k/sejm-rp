import { NavLink, useParams } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import InputSearchMembers from "./InputSearchMembers";

// Komponent Navigation
const Navigation = () => {
  // Pobieranie parametru z adresu URL za pomocą hooka useParams
  const { address } = useParams();

  // Lista elementów nawigacyjnych
  const list = [
    { name: "Strona główna", path: "/" },
    { name: "Kluby i koła", path: "/kluby-i-kola" },
    { name: "Posłowie", path: "/poslowie" },
    { name: "Komisje sejmowe", path: "/komisje-sejmowe" },
  ];

  // Mapowanie listy na elementy NavLink
  const menu = list.map((item, index) => (
    <NavLink key={index} to={item.path} className="nav-link">
      {item.name}
    </NavLink>
  ));

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        {/* Nawigacja do strony głównej */}
        <Navbar.Brand>
          <NavLink to="/" className="nav-brand__nav-link">
            SejmRP
          </NavLink>
        </Navbar.Brand>
        {/* Przycisk rozwijania menu na małych ekranach */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Elementy nawigacyjne */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {menu}
          </Nav>
          {/* Wyświetlanie komponentu InputSearchMembers tylko na stronie Posłowie */}
          {address === "/poslowie" ? <InputSearchMembers /> : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
