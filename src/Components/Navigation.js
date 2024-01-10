import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const list = [
    { name: "Strona główna", path: "/" },
    { name: "Kluby i koła", path: "/kluby-i-kola" },
    { name: "Posłowie", path: "/poslowie" },
    { name: "Komisje sejmowe", path: "/komisje-sejmowe" },
  ];

  const menu = list.map((item, index) => (
    <NavLink key={index} to={item.path} className="nav-link">
      {item.name}
    </NavLink>
  ));

  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="nav-brand__nav-link">
            SejmRP
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{menu}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
