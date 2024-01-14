import { NavLink, useParams } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import InputSearchMembers from "./InputSearchMembers";

const Navigation = () => {
  const { address } = useParams();

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
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
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
          {address === list.name ? null : <InputSearchMembers />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
