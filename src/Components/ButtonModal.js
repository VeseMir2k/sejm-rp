import { useState } from "react";
import ClubsAndGroupsModal from "./ClubsAndGroupsModal";
import { Button } from "react-bootstrap";

const ButtonModal = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        onClick={handleShow}
        className="mb-2 w-50"
        size="lg"
        variant="outline-light"
      >
        {data.id}
      </Button>
      <ClubsAndGroupsModal handleClose={handleClose} show={show} data={data} />
    </>
  );
};

export default ButtonModal;
