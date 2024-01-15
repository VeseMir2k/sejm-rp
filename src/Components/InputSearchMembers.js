import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useSearchParams } from "react-router-dom";
import { Form } from "react-bootstrap";

// Komponent InputSearchMembers
const InputSearchMembers = () => {
  // Wykorzystanie useContext do pobrania setMemberInputValue z AppContext
  const { setMemberInputValue } = useContext(AppContext);
  // Wykorzystanie useSearchParams do zarządzania parametrami URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Pobranie wartości filtra z parametrów URL lub ustawienie domyślnej pustej wartości
  const value = searchParams.get("filter") || "";

  // Funkcja obsługująca zmiany w inpucie
  const handleInputChange = (event) => {
    // Pobranie wartości z inputa
    const filter = event.target.value;
    // Aktualizacja parametrów URL i stanu aplikacji na podstawie wartości filtra
    if (filter) {
      setSearchParams({ filter });
      setMemberInputValue(filter);
    } else {
      setSearchParams({});
      setMemberInputValue("");
    }
  };

  // Renderowanie formularza z inputem do wyszukiwania
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

// Eksportowanie komponentu InputSearchMembers
export default InputSearchMembers;
