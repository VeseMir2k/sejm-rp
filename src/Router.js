// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import ClubsAndGroups from "./Pages/ClubsAndGroups";
import MembersOfParliament from "./Pages/MembersOfParliament";
import ParliamentaryCommittees from "./Pages/ParliamentaryCommittees";

const Router = () => {
  const router = createBrowserRouter([
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
        },
        {
          path: "/komisje-sejmowe",
          element: <ParliamentaryCommittees />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
