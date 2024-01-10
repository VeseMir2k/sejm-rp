import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { Button, Stack } from "react-bootstrap";
import ClubsAndGroupsModal from "../Components/ClubsAndGroupsModal";

const ClubsAndGroups = () => {
  const { clubsGroups, setClubGroup } = useContext(AppContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const result = clubsGroups.map((item, index) => (
    <Button
      onClick={() => {
        handleShow();
        setClubGroup(item);
      }}
      className="mb-2 w-50"
      size="lg"
      variant="outline-light"
      key={index}
    >
      {item.id}
    </Button>
  ));

  return (
    <>
      <Stack className="d-flex align-items-center">{result}</Stack>
      <ClubsAndGroupsModal handleClose={handleClose} show={show} />
    </>
  );
};

export default ClubsAndGroups;
