import { useContext } from "react";
import { AppContext } from "../AppContext";
import ButtonModal from "../Components/ButtonModal";
import { Stack } from "react-bootstrap";

const ClubsAndGroups = () => {
  const { clubsGroups } = useContext(AppContext);

  const result = clubsGroups.map((item, index) => (
    <ButtonModal key={index} data={item} />
  ));

  return (
    <>
      <Stack className="d-flex align-items-center">{result}</Stack>
    </>
  );
};

export default ClubsAndGroups;
