import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Table } from "react-bootstrap";

/**
 * Komponent MemberInformation renderujący informacje o wybranym członku parlamentu.
 */
const MemberInformation = () => {
  const { membersOfParliament } = useContext(AppContext);

  const { memberUrl } = useParams();
  const [member, setMember] = useState([]);

  const style = {
    cardTitle: { textAlign: "center" },
    cardBody: { display: "flex" },
    cardImage: { width: "150px", height: "194px", borderRadius: "0" },
  };

  useEffect(() => {
    // Wyszukaj członka parlamentu na podstawie parametru w URL
    const selectedMember = membersOfParliament.find(
      (item) =>
        item.firstLastName.split(" ").join("-").toLowerCase() === memberUrl
    );

    if (selectedMember) {
      setMember(selectedMember);
    }
  }, [membersOfParliament, memberUrl]);

  const {
    firstLastName,
    firstName,
    secondName,
    lastName,
    id,
    birthDate,
    birthLocation,
    educationLevel,
    club,
    districtNum,
    districtName,
    numberOfVotes,
  } = member;
  const { cardBody, cardImage, cardTitle } = style;

  return (
    <Row className="d-flex justify-content-center">
      <Col className="col-6">
        <Card data-bs-theme="dark">
          <Card.Header>
            <Card.Title style={cardTitle}>
              {firstName} {secondName} {lastName}
            </Card.Title>
          </Card.Header>
          <Card.Body style={cardBody}>
            <Card.Img
              style={cardImage}
              src={`https://api.sejm.gov.pl/sejm/term10/MP/${id}/photo`}
              alt={`${firstLastName} - zdjecie posła`}
            />
            <Card.Text>
              <Table>
                <tbody>
                  <tr>
                    <td>Data i miejsce urodzenia:</td>
                    <td>
                      {birthDate} {birthLocation}
                    </td>
                  </tr>
                  <tr>
                    <td>Wykształcenie:</td>
                    <td>{educationLevel}</td>
                  </tr>
                  <tr>
                    <td>Klub/koło:</td>
                    <td>{club}</td>
                  </tr>
                  <tr>
                    <td>Okręg wyborczy:</td>
                    <td>
                      {districtNum} {districtName}
                    </td>
                  </tr>
                  <tr>
                    <td>Liczba głosów:</td>
                    <td>{numberOfVotes}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p>{/* Dodaj ewentualne informacje w stopce karty */}</p>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default MemberInformation;
