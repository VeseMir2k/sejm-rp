import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useSearchParams } from "react-router-dom";
import { Form } from "react-bootstrap";

const InputSearchMembers = () => {
  const { setMemberInputValue } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get("filter") || "";
  const handleInputChange = (event) => {
    const filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
      setMemberInputValue(filter);
    } else {
      setSearchParams({});
      setMemberInputValue("");
    }
  };

  return (
    <Form>
      <Form.Control
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={value}
        onChange={handleInputChange}
      />
    </Form>
  );
};

export default InputSearchMembers;
