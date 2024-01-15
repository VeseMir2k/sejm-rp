import { Container } from "react-bootstrap";
import sejmRpLogo from "../sejmrp-logo.png";

// Komponent MembersOfParliament
const MembersOfParliament = () => {
  // Renderowanie zawartości strony członków parlamentu
  return (
    <Container className="d-flex justify-content-center align-items-center opacity-25">
      {/* Wyświetlanie logo SejmRP */}
      <img className="mt-5" src={sejmRpLogo} alt="sejm rp logo" />
    </Container>
  );
};

export default MembersOfParliament;
