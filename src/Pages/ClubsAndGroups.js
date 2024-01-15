import { useContext } from "react";
import { AppContext } from "../AppContext";
import ButtonModal from "../Components/ButtonModal";
import { Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// Komponent ClubsAndGroups
const ClubsAndGroups = () => {
  // Pobieranie danych z kontekstu aplikacji za pomocą useContext
  const { clubsGroups } = useContext(AppContext);
  // Pobieranie informacji o bieżącej lokalizacji za pomocą useLocation
  const location = useLocation();

  // Mapowanie danych klubów/grup na komponenty ButtonModal
  const result = clubsGroups.map((item, index) => (
    <ButtonModal
      key={index}
      data={item} // Przekazywanie danych klubu/grupy do ButtonModal
      variant="dark" // Wariant przycisku (dark)
      className="mb-2 w-50" // Klasa stylu (margin-bottom: 2, width: 50%)
      size="lg" // Rozmiar przycisku (large)
      path={location.pathname} // Ścieżka aktualnej lokalizacji z react-router-dom
    />
  ));

  // Renderowanie stosu komponentów ButtonModal
  return (
    <>
      <Stack className="d-flex align-items-center">{result}</Stack>
    </>
  );
};

export default ClubsAndGroups;
