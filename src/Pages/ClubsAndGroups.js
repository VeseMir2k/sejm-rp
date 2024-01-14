import { useContext } from "react";
import { AppContext } from "../AppContext";
import ButtonModal from "../Components/ButtonModal";
import { Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ClubsAndGroups = () => {
  const { clubsGroups } = useContext(AppContext);
  const location = useLocation();

  const result = clubsGroups.map((item, index) => (
    <ButtonModal
      key={index}
      data={item}
      variant="dark"
      className="mb-2 w-50"
      size="lg"
      path={location.pathname}
    />
  ));

  return (
    <>
      <Stack className="d-flex align-items-center">{result}</Stack>
    </>
  );
};

export default ClubsAndGroups;
