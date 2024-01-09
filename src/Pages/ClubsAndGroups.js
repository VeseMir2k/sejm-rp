import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { Button, Stack } from "react-bootstrap";
import ClubsAndGroupsModal from "../Components/ClubsAndGroupsModal";

const ClubsAndGroups = () => {
  const { clubsGroups, setClubGroup } = useContext(AppContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Stack className="d-flex align-items-center">
        {clubsGroups
          ? clubsGroups.map((item, index) => (
              <Button
                onClick={() => {
                  handleShow();
                  setClubGroup(item);
                }}
                className="mb-2 w-50"
                size="lg"
                variant="outline-dark"
                key={index}
              >
                {item.id}
              </Button>
            ))
          : null}
      </Stack>
      <ClubsAndGroupsModal handleClose={handleClose} show={show} />
    </>
  );
};

export default ClubsAndGroups;
