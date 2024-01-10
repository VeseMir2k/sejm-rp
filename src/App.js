import { Outlet } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Navigation from "./Components/Navigation";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Navigation />
        <Container className="mt-3">
          <Outlet />
        </Container>
      </div>
    </AppProvider>
  );
};

export default App;
