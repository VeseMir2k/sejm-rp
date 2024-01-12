import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container className="mt-3">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
