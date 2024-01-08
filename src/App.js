import { NavLink, Outlet } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="nav-brand__nav-link">
              SejmRP
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Strona główna
              </NavLink>
              <NavLink to="/kluby-i-kola" className="nav-link">
                Kluby i koła
              </NavLink>
              <NavLink to="/poslowie" className="nav-link">
                Posłowie
              </NavLink>
              <NavLink to="/komisje-sejmowe" className="nav-link">
                Komisje sejmowe
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
