import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "../Components/Navigation";

/**
 * Komponent Layout, który definiuje ogólną strukturę strony.
 * Zawiera pasek nawigacyjny (Navigation) i miejsce na zawartość strony (Outlet).
 */
const Layout = () => {
  return (
    <>
      {/* Komponent nawigacyjny wyświetlający menu nawigacyjne strony */}
      <Navigation />
      {/* Kontener Bootstrapa, zawierający zawartość strony z react-router-dom */}
      <Container className="mt-3">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
