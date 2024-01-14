import { Stack, Image, CloseButton } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ClubsAndGroupsModal = ({ handleClose, show, data }) => {
  const firstSecondLastName = `${data.firstName} ${
    data.secondName ? data.secondName : ""
  } ${data.lastName}`;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{firstSecondLastName}</Modal.Title>
        <CloseButton onClick={handleClose} />
      </Modal.Header>
      <Modal.Body className="d-flex">
        <Image
          className="w-40"
          src={`https://api.sejm.gov.pl/sejm/term10/MP/${data.id}/photo`}
          rounded
        />
        <Stack className="ms-4">
          <p>Klub: {data.club}</p>
          <p>Miejsce urodzenia: {data.birthLocation}</p>
          <p>Data urodzenia: {data.birthDate}</p>
          <p>
            Wykształcenie:{" "}
            {data.educationLevel.charAt(0).toUpperCase() +
              data.educationLevel.slice(1)}
          </p>
          <p>E-mail: {data.email}</p>
        </Stack>
      </Modal.Body>
    </Modal>
  );
};

export default ClubsAndGroupsModal;
