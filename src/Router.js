import { useRoutes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import ClubsAndGroups from "./Pages/ClubsAndGroups";
import MembersOfParliamentLayout from "./Layouts/MembersOfParliamentLayout";
import MembersOfParliament from "./Pages/MembersOfParliament";
import MembersClubGroup from "./Components/MembersClubGroup";
import MemberInformation from "./Pages/MemberInformation";
import ParliamentaryCommitteesLayout from "./Layouts/ParliamentaryCommitteesLayout";
import ParliamentaryCommittees from "./Pages/ParliamentaryCommittees";
import ParliamentaryCommittee from "./Components/ParliamentaryCommittee";

const Router = () => {
  // Definicja tras za pomocą useRoutes
  const router = useRoutes([
    {
      path: "/", // Główna ścieżka
      element: <Layout />, // Komponent Layout dla tej ścieżki
      children: [
        {
          index: "true",
          element: <Home />, // Komponent Home dla ścieżki bazowej
        },
        {
          path: "/kluby-i-kola",
          element: <ClubsAndGroups />, // Komponent ClubsAndGroups dla ścieżki /kluby-i-kola
        },
        {
          path: "/poslowie",
          element: <MembersOfParliamentLayout />, // Layout dla stron dotyczących posłów
          children: [
            {
              index: "true",
              element: <MembersOfParliament />, // Komponent MembersOfParliament dla ścieżki /poslowie
            },
            {
              path: ":url", // Parametr dynamiczny w ścieżce dla klubu/grupy
              children: [
                {
                  index: "true",
                  element: <MembersClubGroup />, // Komponent MembersClubGroup dla konkretnego klubu/grupy
                },
                {
                  path: ":memberUrl",
                  element: <MemberInformation />, // Komponent MemberInformation dla konkretnego członka
                },
              ],
            },
          ],
        },
        {
          path: "/komisje-sejmowe",
          element: <ParliamentaryCommitteesLayout />, // Layout dla stron dotyczących komisji sejmowych
          children: [
            {
              index: "true",
              element: <ParliamentaryCommittees />, // Komponent ParliamentaryCommittees dla ścieżki /komisje-sejmowe
            },
            {
              path: ":url",
              children: [
                {
                  index: "true",
                  element: <ParliamentaryCommittee />, // Komponent ParliamentaryCommittee dla konkretnej komisji
                },
                {
                  path: ":memberUrl",
                  element: <MemberInformation />, // Komponent MemberInformation dla konkretnego członka
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return router;
};

export default Router;
