import { useRoutes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import ClubsAndGroups from "./Pages/ClubsAndGroups";
import MembersOfParliamentLayout from "./Layouts/MembersOfParliamentLayout";
import MembersOfParliament from "./Pages/MembersOfParliament";
import MembersClubGroup from "./Components/MembersClubGroup";
import ParliamentaryCommittees from "./Pages/ParliamentaryCommittees";

const Router = () => {
  const router = useRoutes([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          index: "true",
          element: <Home />,
        },
        {
          path: "/kluby-i-kola",
          element: <ClubsAndGroups />,
        },
        {
          path: "/poslowie",
          element: <MembersOfParliamentLayout />,
          children: [
            {
              index: "true",
              element: <MembersOfParliament />,
            },
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
