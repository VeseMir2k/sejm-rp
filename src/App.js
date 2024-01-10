import { AppProvider } from "./AppContext";
import Router from "./Router";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Router />
      </div>
    </AppProvider>
  );
};

export default App;
