import Modal from "react-bootstrap/Modal";

const ClubsAndGroupsModal = ({ handleClose, show, data }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data.id}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Nazwa: {data.name}</p>
        <p>Fax: {data.fax}</p>
        {data.email ? <p>Email: {data.email}</p> : null}
        <p>Liczba członków: {data.membersCount}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ClubsAndGroupsModal;
