import { useState } from "react";
import ClubsAndGroupsModal from "./ClubsAndGroupsModal";
import MemberOfParliamentModal from "./MemberOfParliamentModal";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

// Komponent ButtonModal przyjmujący dane (data), wariant przycisku (variant), klasę (className),
// rozmiar (size) i ścieżkę (path).
const ButtonModal = ({ data, variant, className, size, path }) => {
  // Lokalny stan do zarządzania widocznością modala
  const [show, setShow] = useState(false);

  // Hook React Router do pobierania parametrów z adresu URL
  const params = useParams();

  // Funkcje do obsługi otwierania i zamykania modala
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Sprawdzanie czy ścieżka odpowiada modalowi Klubów i Kół
  const isClubsAndGroupsPath = path === "/kluby-i-kola";
  // Sprawdzanie czy ścieżka odpowiada modalowi Posła/Posłanki
  const isMemberOfParliamentPath = path === `/poslowie/${params.address}`;

  // Warunkowe renderowanie komponentu modalnego w zależności od ścieżki
  const modalComponent = isClubsAndGroupsPath ? (
    <ClubsAndGroupsModal handleClose={handleClose} show={show} data={data} />
  ) : isMemberOfParliamentPath ? (
    <MemberOfParliamentModal
      handleClose={handleClose}
      show={show}
      data={data}
    />
  ) : null;

  // Renderowanie komponentu Button z obsługą modala
  return (
    <>
      <Button
        onClick={handleShow}
        className={className}
        size={size}
        variant={variant}
      >
        {/* Tekst przycisku zależny od ścieżki */}
        {isClubsAndGroupsPath ? data.id : "Więcej informacji"}
      </Button>

      {/* Renderowanie komponentu modalnego */}
      {modalComponent}
    </>
  );
};

export default ButtonModal;
