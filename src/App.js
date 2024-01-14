import { AppProvider } from "./AppContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Router />
        </BrowserRouter>
      </div>
    </AppProvider>
  );
};

export default App;
