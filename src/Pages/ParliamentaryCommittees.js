import { useContext } from "react";
import { AppContext } from "../AppContext";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

/**
 * Komponent ParliamentaryCommittees reprezentujący widok komisji sejmowych.
 */
const ParliamentaryCommittees = () => {
  const { parliamentaryCommittees } = useContext(AppContext);

  const menu = parliamentaryCommittees.map((item, index) => (
    <Col className="mb-4 col-4" key={index}>
      {/* Nawigacja do strony konkretnej komisji sejmowej */}
      <NavLink
        to={`/komisje-sejmowe/${item.code.toLowerCase()}`}
        className="btn btn-dark w-100 h-100 p-4"
      >
        {item.name}
      </NavLink>
    </Col>
  ));

  return (
    <Container>
      {/* Wyświetlanie listy komisji sejmowych */}
      <Row>{menu}</Row>
    </Container>
  );
};

export default ParliamentaryCommittees;
