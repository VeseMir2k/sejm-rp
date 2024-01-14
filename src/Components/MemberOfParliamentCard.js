import ButtonModal from "./ButtonModal";
import { Col, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const MemberOfParliamentCard = ({ data }) => {
  const location = useLocation();
  return (
    <Col className="col-3 mt-4">
      <Card bg="dark" text="light" className="d-flex flex-row">
        <Card.Img
          style={{
            width: "100px",
            height: "128px",
            borderRadius: "5px 0 0 5px",
          }}
          src={`https://api.sejm.gov.pl/sejm/term10/MP/${data.id}/photo`}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <p>{data.firstLastName}</p>
          <ButtonModal
            data={data}
            variant="light"
            size="sm"
            path={location.pathname}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MemberOfParliamentCard;
