import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Row, Col, Card, Button } from "react-bootstrap";

const MembersOfParliament = () => {
  const { membersOfParliament, setMemberOfParliament } = useContext(AppContext);

  const cards = membersOfParliament.map((item, index) => (
    <Col className="col-1">
      <Card className="mb-4" key={index}>
        <Card.Img
          variant="top"
          src={`https://api.sejm.gov.pl/sejm/term10/MP/${item.id}/photo`}
        />
        <Card.Body>
          <Card.Title>{item.firstLastName}</Card.Title>
          <Button
            size="sm"
            onClick={() => setMemberOfParliament(item)}
            variant="primary"
          >
            Wyświetl dane
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return <Row>{cards}</Row>;
};

export default MembersOfParliament;
