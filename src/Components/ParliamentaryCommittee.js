import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import { Row, Col } from "react-bootstrap";
import ParliamentaryCommitteeMemberCard from "./MemberCard";

/**
 * Komponent ParliamentaryCommittee odpowiedzialny za wyświetlanie informacji
 * o danej komisji sejmowej oraz jej przewodniczących, zastępcach i członkach.
 */
const ParliamentaryCommittee = () => {
  // Pobranie danych z kontekstu aplikacji za pomocą useContext
  const { parliamentaryCommittees, membersOfParliament } =
    useContext(AppContext);

  // Stany przechowujące informacje o aktualnej komisji oraz jej członkach
  const [parliamentaryCommittee, setParliamentaryCommittee] = useState([]);
  const [membersCommittee, setMembersCommittee] = useState([]);

  // Pobranie parametrów ścieżki za pomocą useParams
  const { url } = useParams();

  // Efekt pobierający informacje o komisji sejmowej i jej członkach
  useEffect(() => {
    // Znalezienie komisji o kodzie odpowiadającym wartości z parametru ścieżki
    const committee = parliamentaryCommittees.find(
      (item) => item.code.toLowerCase() === url
    );

    // Aktualizacja stanów z informacjami o komisji i jej członkach
    if (committee) {
      setParliamentaryCommittee(committee);
      setMembersCommittee(committee.members || []);
    }
  }, [parliamentaryCommittees, url]);

  // Funkcja do filtrowania członków komisji ze względu na funkcję (przewodniczący, zastępca itp.)
  const filterMembersByFunction = (members, func) =>
    members
      .filter((item) => item.function === func)
      .map((item, index) => (
        <Col className="d-flex justify-content-center mb-4" key={index}>
          <ParliamentaryCommitteeMemberCard
            data={membersOfParliament[item.id - 1]}
          />
        </Col>
      ));

  // Pogrupowanie członków według funkcji
  const chairman =
    membersOfParliament.length &&
    filterMembersByFunction(membersCommittee, "przewodniczący");

  const deputyChairman =
    membersOfParliament.length &&
    filterMembersByFunction(membersCommittee, "zastępca przewodniczącego");

  const membersList =
    membersOfParliament.length &&
    filterMembersByFunction(membersCommittee, undefined);

  // Destructuring informacji o komisji
  const { name, scope, phone } = parliamentaryCommittee;

  // Renderowanie komponentu z informacjami o komisji i jej członkach
  return (
    parliamentaryCommittee && (
      <>
        <Row className="justify-content-center text-center">
          <Col className="col-12">
            <h2>{name}</h2>
          </Col>
          <Col className="col-8">
            <p>{scope}</p>
            <p>{phone}</p>
          </Col>
        </Row>
        <Row className="justify-content-evenly text-center">
          <h5>Przewodniczący</h5>
          {chairman}
        </Row>
        <Row className="justify-content-evenly text-center">
          <h5>Zastępcy przewodniczącego</h5>
          {deputyChairman}
        </Row>
        <Row className="justify-content-evenly text-center">
          <h5>Członkowie</h5>
          {membersList}
        </Row>
      </>
    )
  );
};

export default ParliamentaryCommittee;
