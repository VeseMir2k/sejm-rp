import { NavLink, useLocation, useParams } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import InputSearchMembers from "./InputSearchMembers";

/**
 * Komponent Navigation odpowiedzialny za renderowanie górnego paska nawigacyjnego.
 * Zawiera linki do różnych sekcji aplikacji oraz opcję wyszukiwania członków parlamentu
 * (tylko gdy użytkownik znajduje się na stronie dotyczącej posłów).
 */
const Navigation = () => {
  // Pobranie informacji o bieżącej lokalizacji za pomocą useLocation
  const location = useLocation();
  // Pobranie parametrów ścieżki za pomocą useParams
  const { url } = useParams();

  // Lista linków wraz z ich nazwami i ścieżkami
  const list = [
    { name: "Strona główna", path: "/" },
    { name: "Kluby i koła", path: "/kluby-i-kola" },
    { name: "Posłowie", path: "/poslowie" },
    { name: "Komisje sejmowe", path: "/komisje-sejmowe" },
  ];

  // Mapowanie elementów listy na nawigacyjne linki
  const menu = list.map((item, index) => (
    <NavLink key={index} to={item.path} className="nav-link">
      {item.name}
    </NavLink>
  ));

  // Warunek dla wyświetlenia wyszukiwarki tylko na stronie dotyczącej posłów
  const searchInput = (location.pathname === `/poslowie/${url}` ||
    "/poslowie" === location.pathname) && <InputSearchMembers />;

  // Renderowanie górnego paska nawigacyjnego
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          {/* Link do strony głównej */}
          <NavLink to="/" className="nav-brand__nav-link">
            SejmRP
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {menu}
          </Nav>
          {/* Wyszukiwarka członków parlamentu (jeśli warunek spełniony) */}
          {searchInput}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
