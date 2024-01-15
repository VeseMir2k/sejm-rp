import { Stack, Image, CloseButton } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

// Komponent ClubsAndGroupsModal
const ClubsAndGroupsModal = ({ handleClose, show, data }) => {
  // Tworzenie pełnego imienia i nazwiska posła
  const firstSecondLastName = `${data.firstName} ${
    data.secondName ? data.secondName : ""
  } ${data.lastName}`;

  // Renderowanie modala z informacjami o klubie lub grupie
  return (
    <Modal show={show} onHide={handleClose}>
      {/* Nagłówek modala z tytułem i przyciskiem zamykania */}
      <Modal.Header>
        <Modal.Title>{firstSecondLastName}</Modal.Title>
        <CloseButton onClick={handleClose} />
      </Modal.Header>
      {/* Ciało modala z obrazem i informacjami */}
      <Modal.Body className="d-flex">
        {/* Obraz przedstawiający posła */}
        <Image
          className="w-40"
          src={`https://api.sejm.gov.pl/sejm/term10/MP/${data.id}/photo`}
          rounded
        />
        {/* Stos informacji o posle */}
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
