import { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const MembersOfParliamentNav = () => {
  const { clubsGroups, setMemberInputValue } = useContext(AppContext);

  const menu = clubsGroups.map((item, index) => (
    <Nav.Item key={index}>
      <NavLink
        to={`/poslowie/${item.id.toLowerCase()}`}
        onClick={() => setMemberInputValue("")}
        className="nav-link members-list"
      >
        {item.id}
      </NavLink>
    </Nav.Item>
  ));

  return <Nav variant="tabs">{menu}</Nav>;
};

export default MembersOfParliamentNav;
