import { Outlet } from "react-router-dom";
import MembersOfParliamentNav from "../Components/MembersOfParliamentNav";

const MembersOfParliament = () => {
  return (
    <>
      <MembersOfParliamentNav />
      <Outlet />
    </>
  );
};

export default MembersOfParliament;
