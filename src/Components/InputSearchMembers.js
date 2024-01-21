import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useSearchParams } from "react-router-dom";
import { Form } from "react-bootstrap";

/**
 * Komponent InputSearchMembers reprezentuje pole wyszukiwania członków parlamentu.
 * Pozwala użytkownikowi wprowadzić imię i nazwisko w celu filtrowania listy posłów.
 */
const InputSearchMembers = () => {
  // Pobranie funkcji setMemberInputValue z kontekstu aplikacji
  const { setMemberInputValue } = useContext(AppContext);
  // Hook useSearchParams do obsługi parametrów z adresu URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Pobranie wartości filtra z parametrów adresu URL lub ustawienie domyślnej wartości pustej
  const value = searchParams.get("filter") || "";

  // Obsługa zmiany wartości w polu wyszukiwania
  const handleInputChange = (event) => {
    // Pobranie wprowadzonego filtra
    const filter = event.target.value;

    // Aktualizacja parametrów adresu URL i stanu aplikacji na podstawie wprowadzonego filtra
    if (filter) {
      setSearchParams({ filter });
      setMemberInputValue(filter);
    } else {
      setSearchParams({});
      setMemberInputValue("");
    }
  };

  // Renderowanie formularza z polem wyszukiwania
  return (
    <Form>
      <Form.Control
        placeholder="Imię i Nazwisko"
        value={value}
        onChange={handleInputChange}
      />
    </Form>
  );
};

export default InputSearchMembers;
