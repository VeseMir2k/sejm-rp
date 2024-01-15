import Modal from "react-bootstrap/Modal";

// Komponent ClubsAndGroupsModal
const ClubsAndGroupsModal = ({ handleClose, show, data }) => {
  // Renderowanie modala z danymi o klubie/grupie
  return (
    <Modal show={show} onHide={handleClose}>
      {/* Nagłówek modala z przyciskiem zamykania */}
      <Modal.Header closeButton>
        {/* Tytuł modala zawierający identyfikator klubu/grupy */}
        <Modal.Title>{data.id}</Modal.Title>
      </Modal.Header>
      {/* Ciało modala zawierające informacje o klubie/grupie */}
      <Modal.Body>
        {/* Wyświetlanie nazwy klubu/grupy */}
        <p>Nazwa: {data.name}</p>
        {/* Wyświetlanie numeru faksu klubu/grupy */}
        <p>Fax: {data.fax}</p>
        {/* Wyświetlanie adresu e-mail klubu/grupy, jeśli istnieje */}
        {data.email ? <p>Email: {data.email}</p> : null}
        {/* Wyświetlanie liczby członków klubu/grupy */}
        <p>Liczba członków: {data.membersCount}</p>
      </Modal.Body>
    </Modal>
  );
};

export default ClubsAndGroupsModal;
