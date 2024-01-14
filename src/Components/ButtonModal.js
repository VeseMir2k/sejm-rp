import { useState } from "react";
import ClubsAndGroupsModal from "./ClubsAndGroupsModal";
import MemberOfParliamentModal from "./MemberOfParliamentModal";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ButtonModal = ({ data, variant, className, size, path }) => {
  const [show, setShow] = useState(false);
  const params = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showClubsAndGroupsModal =
    path === "/kluby-i-kola" ? (
      <ClubsAndGroupsModal handleClose={handleClose} show={show} data={data} />
    ) : null;

  const showMemberOfParliamentModal =
    path === `/poslowie/${params.address}` ? (
      <MemberOfParliamentModal
        handleClose={handleClose}
        show={show}
        data={data}
      />
    ) : null;

  return (
    <>
      <Button
        onClick={handleShow}
        className={className}
        size={size}
        variant={variant}
      >
        {path === "/kluby-i-kola" ? data.id : "Więcej informacji"}
      </Button>

      {showClubsAndGroupsModal}
      {showMemberOfParliamentModal}
    </>
  );
};

export default ButtonModal;
