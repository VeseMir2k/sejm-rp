import { Col, Card, Button } from "react-bootstrap";

const MemberOfParliamentCard = ({ data }) => {
  return (
    <Col className="col-2">
      <Card>
        <Card.Img
          variant="top"
          src={`https://api.sejm.gov.pl/sejm/term10/MP/${data.id}/photo-mini`}
        />
        <Card.Body>
          <Card.Text>{data.firstLastName}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MemberOfParliamentCard;
