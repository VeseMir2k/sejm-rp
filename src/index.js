import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppContext";
import App from "./App";
import Home from "./Pages/Home";
import ClubsAndGroups from "./Pages/ClubsAndGroups";
import ParliamentaryCommittees from "./Pages/ParliamentaryCommittees";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MembersOfParliament from "./Pages/MembersOfParliament";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/kluby-i-kola" element={<ClubsAndGroups />} />
            <Route path="/poslowie" element={<MembersOfParliament />} />
            <Route
              path="/komisje-sejmowe"
              element={<ParliamentaryCommittees />}
            />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);

reportWebVitals();
