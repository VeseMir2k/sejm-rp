import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import MemberCard from "./MemberCard";

/**
 * Komponent MembersClubGroup odpowiedzialny za wyświetlanie kart członków parlamentu
 * należących do określonego klubu lub grupy. Członkowie są filtrowani na podstawie adresu
 * z parametrów ścieżki (`url`) i opcjonalnie wprowadzonej wartości do wyszukiwania
 * (`memberInputValue`).
 */
const MembersClubGroup = () => {
  // Pobranie danych z kontekstu aplikacji za pomocą useContext
  const { membersOfParliament, memberInputValue } = useContext(AppContext);
  // Pobranie adresu z parametrów ścieżki
  const { url } = useParams();

  // Filtrowanie członków parlamentu na podstawie wprowadzonej wartości do wyszukiwania
  const filteredMembers = membersOfParliament.filter(
    (item) =>
      !memberInputValue ||
      item.firstLastName.toLowerCase().includes(memberInputValue.toLowerCase())
  );

  // Filtrowanie członków klubu lub grupy na podstawie adresu
  const memberCards = filteredMembers
    .filter((item) => item.club.toLowerCase() === url)
    .map((item, index) => (
      <Col className="d-flex justify-content-center mb-4" key={item.id}>
        {/* Wywołanie komponentu MemberCard z przekazanymi danymi */}
        <MemberCard data={item} />
      </Col>
    ));

  // Renderowanie wiersza z kartami członków klubu lub grupy
  return <Row>{memberCards}</Row>;
};

export default MembersClubGroup;
