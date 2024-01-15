import { useState } from "react";
import { Col, Card, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ButtonModal from "./ButtonModal";

// Komponent MemberOfParliamentCard
const MemberOfParliamentCard = ({ data }) => {
  // Hook useLocation z react-router-dom do pobierania informacji o aktualnej lokalizacji
  const location = useLocation();
  const [imageLoading, setImageLoading] = useState(true);

  // Obsługa zdarzenia ładowania obrazu
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Renderowanie karty przedstawiającej posła
  return (
    <Col className="col-3 mt-4">
      <Card bg="dark" text="light" className="d-flex flex-row">
        {/* Spinner wyświetlany podczas ładowania obrazu */}
        {imageLoading && (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100px", height: "128px" }}
          >
            <Spinner animation="border" role="status" />
          </div>
        )}
        {/* Obraz przedstawiający posła */}
        <Card.Img
          style={{
            width: "100px",
            height: "128px",
            borderRadius: "5px 0 0 5px",
            display: imageLoading ? "none" : "block",
          }}
          src={`https://api.sejm.gov.pl/sejm/term10/MP/${data.id}/photo`}
          onLoad={handleImageLoad}
        />
        {/* Ciało karty zawierające imię i nazwisko posła oraz przycisk otwierający modal */}
        <Card.Body className="d-flex flex-column justify-content-between">
          <p>{data.firstLastName}</p>
          {/* Przycisk otwierający modal z dodatkowymi informacjami */}
          <ButtonModal
            data={data} // Przekazywanie danych posła do ButtonModal
            variant="light" // Wariant przycisku (light)
            size="sm" // Rozmiar przycisku (small)
            path={location.pathname} // Ścieżka aktualnej lokalizacji z react-router-dom
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MemberOfParliamentCard;
