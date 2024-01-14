import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import MemberOfParliamentCard from "./MemberOfParliamentCard";

const MembersClubGroup = () => {
  const { membersOfParliament, memberInputValue } = useContext(AppContext);
  const { address } = useParams();

  const list = membersOfParliament
    .filter((item) => {
      if (memberInputValue) {
        let name = item.firstLastName.toLowerCase();
        let value = memberInputValue.toLowerCase();
        return name.includes(value);
      } else {
        return item;
      }
    })
    .map((item, index) =>
      item.club.toLowerCase() === address ? (
        <MemberOfParliamentCard key={index} data={item} />
      ) : null
    );

  return <Row>{list}</Row>;
};

export default MembersClubGroup;
