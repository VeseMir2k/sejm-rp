import Modal from "react-bootstrap/Modal";

/**
 * Komponent ClubsAndGroupsModal reprezentujący modal z dodatkowymi informacjami
 * na temat klubu lub grupy.
 */
const ClubsAndGroupsModal = ({ handleClose, show, data }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      {/* Nagłówek modalu z przyciskiem zamykającym */}
      <Modal.Header closeButton>
        <Modal.Title>{data.id}</Modal.Title>
      </Modal.Header>
      {/* Zawartość modalu z danymi klubu lub grupy */}
      <Modal.Body>
        <p>Nazwa: {data.name}</p>
        <p>Fax: {data.fax}</p>
        {/* Warunkowe wyświetlanie pola email, jeśli jest dostępne */}
        {data.email ? <p>Email: {data.email}</p> : null}
        <p>Liczba członków: {data.membersCount}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ClubsAndGroupsModal;
