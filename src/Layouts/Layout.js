import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import { Container } from "react-bootstrap";

// Komponent Layout
const Layout = () => {
  // Renderowanie struktury strony
  return (
    <>
      {/* Wywołanie komponentu nawigacji */}
      <Navigation />
      {/* Kontener dla treści strony z dodatkowym marginesem na górze */}
      <Container className="mt-3">
        {/* Outlet służący do renderowania zagnieżdżonych stron zdefiniowanych w rodzicu */}
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
