import { useRoutes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import ClubsAndGroups from "./Pages/ClubsAndGroups";
import MembersOfParliament from "./Pages/MembersOfParliament";
import MembersClubGroup from "./Components/MembersClubGroup";
import ParliamentaryCommittees from "./Pages/ParliamentaryCommittees";

const Router = () => {
  const router = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/kluby-i-kola",
          element: <ClubsAndGroups />,
        },
        {
          path: "/poslowie",
          element: <MembersOfParliament />,
          children: [
            {
              path: ":address",
              element: <MembersClubGroup />,
            },
          ],
        },

        {
          path: "/komisje-sejmowe",
          element: <ParliamentaryCommittees />,
        },
      ],
    },
  ]);

  return router;
};

export default Router;
