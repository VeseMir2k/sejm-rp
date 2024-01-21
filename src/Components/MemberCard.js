import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";

/**
 * Komponent ParliamentaryCommitteeMemberCard reprezentuje kartę członka komitetu parlamentarnego.
 * Wyświetla zdjęcie, imię i nazwisko, klub oraz przycisk do przejścia do szczegółowych informacji.
 * Zdjęcie jest ładowane asynchronicznie, a podczas ładowania wyświetlany jest Spinner.
 */
const ParliamentaryCommitteeMemberCard = ({ data }) => {
  // Pobranie aktualnej lokalizacji za pomocą hooka useLocation
  const location = useLocation();
  // Pobranie danych członka komitetu
  const { firstLastName, club, id } = data;
  // Stan do śledzenia ładowania zdjęcia
  const [imageLoading, setImageLoading] = useState(true);

  // Style dla elementów karty
  const styles = {
    card: { width: "140px" },
    cardHeader: {
      padding: "0px",
      width: "138px",
      height: "172px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    spinner: {
      display: imageLoading ? "block" : "none",
    },
    cardImage: {
      display: imageLoading ? "none" : "block",
      width: "138px",
      height: "172px",
    },
    cardBody: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    cardTitle: { fontSize: "12px", textAlign: "center" },
  };

  // Obsługa zdarzenia ładowania zdjęcia
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Renderowanie karty członka komitetu
  return (
    <Card style={styles.card} bg="dark" text="light">
      <Card.Header style={styles.cardHeader}>
        <Spinner animation="border" variant="light" style={styles.spinner} />
        <Card.Img
          style={styles.cardImage}
          variant="top"
          src={`https://api.sejm.gov.pl/sejm/term10/MP/${id}/photo`}
          onLoad={handleImageLoad}
        />
      </Card.Header>
      <Card.Body style={styles.cardBody}>
        <Card.Title style={styles.cardTitle}>
          <div>{firstLastName}</div> <p>({club})</p>
        </Card.Title>
        {/* Przejście do szczegółowych informacji za pomocą NavLink */}
        <NavLink
          to={`${location.pathname}/${firstLastName
            .split(" ")
            .join("-")
            .toLowerCase()}`}
          className="btn btn-outline-light btn-sm"
        >
          Więcej...
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default ParliamentaryCommitteeMemberCard;
