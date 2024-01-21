import { useState } from "react";
import ClubsAndGroupsModal from "./ClubsAndGroupsModal";
import { Button } from "react-bootstrap";

/**
 * Komponent ButtonModal reprezentujący przycisk, który po kliknięciu otwiera modal
 * z dodatkowymi informacjami na temat danego klubu lub grupy.
 */
const ButtonModal = ({ data, variant, className, size }) => {
  // Stan do kontrolowania widoczności modala
  const [show, setShow] = useState(false);

  // Funkcja zamykająca modal
  const handleClose = () => setShow(false);

  // Funkcja otwierająca modal
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Przycisk otwierający modal */}
      <Button
        onClick={handleShow}
        className={className}
        size={size}
        variant={variant}
      >
        {data.id}
      </Button>

      {/* Modal z dodatkowymi informacjami na temat klubu lub grupy */}
      <ClubsAndGroupsModal handleClose={handleClose} show={show} data={data} />
    </>
  );
};

export default ButtonModal;
