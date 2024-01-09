import { useContext } from "react";
import { AppContext } from "../AppContext";
import Modal from "react-bootstrap/Modal";

const ClubsAndGroupsModal = ({ handleClose, show }) => {
  const { clubGroup } = useContext(AppContext);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{clubGroup.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Nazwa: {clubGroup.name}</p>
        <p>Fax: {clubGroup.fax}</p>
        {clubGroup.email ? <p>Email: {clubGroup.email}</p> : null}
        <p>Liczba członków: {clubGroup.membersCount}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ClubsAndGroupsModal;
