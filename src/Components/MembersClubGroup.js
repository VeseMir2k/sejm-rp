import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import MemberOfParliamentCard from "./MemberOfParliamentCard";

// Komponent MembersClubGroup
const MembersClubGroup = () => {
  // Pobieranie danych z kontekstu aplikacji za pomocą useContext
  const { membersOfParliament, memberInputValue } = useContext(AppContext);
  // Pobieranie adresu z parametrów URL za pomocą hooka useParams
  const { address } = useParams();

  // Filtracja i mapowanie danych członków parlamentu
  const list = membersOfParliament
    .filter((item) => {
      if (memberInputValue) {
        // Filtracja po imieniu i nazwisku, jeśli jest wprowadzone wyszukiwanie
        let name = item.firstLastName.toLowerCase();
        let value = memberInputValue.toLowerCase();
        return name.includes(value);
      } else {
        // Jeśli nie ma wprowadzonego wyszukiwania, zwróć wszystkich członków
        return item;
      }
    })
    .map((item, index) =>
      // Mapowanie i renderowanie karty dla członków przypisanych do danego klubu/grupy
      item.club.toLowerCase() === address ? (
        <MemberOfParliamentCard key={index} data={item} />
      ) : null
    );

  // Renderowanie listy kart członków parlamentu
  return <Row>{list}</Row>;
};

export default MembersClubGroup;
