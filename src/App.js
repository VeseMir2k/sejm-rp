import { AppProvider } from "./AppContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </AppProvider>
  );
};

export default App;
