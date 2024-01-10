import { useContext } from "react";
import { AppContext } from "../AppContext";

const MembersOfParliament = () => {
  const { membersOfParliament } = useContext(AppContext);

  return (
    <ul>
      {membersOfParliament
        ? membersOfParliament.map((item) => <li>{item.birthLocation}</li>)
        : null}
    </ul>
  );
};

export default MembersOfParliament;
