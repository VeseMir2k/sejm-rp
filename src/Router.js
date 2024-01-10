import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import ClubsAndGroups from "./Pages/ClubsAndGroups";
import MembersOfParliament from "./Pages/MembersOfParliament";
import ParliamentaryCommittees from "./Pages/ParliamentaryCommittees";

const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Router;
