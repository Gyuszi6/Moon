import { useState } from "react";
import {
  Container,
  Head,
  Input,
  Label,
  Button,
  CheckBox,
  TermsLabel,
  CheckBoxContainer,
  RegistrationPageContainer,
} from "./styles";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  let nameForApi = name.replaceAll(" ", "_");

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <RegistrationPageContainer>
      <Head>Regisztráció</Head>
      <Container>
        <Label>E-MAIL CÍM:</Label>
        <Input type="email" readOnly="readonly" />
        <Label>NÉV:</Label>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <CheckBoxContainer>
          <CheckBox checked={checked} onChange={handleChange} type="checkbox" />
          <TermsLabel htmlFor="conditions">
            Elolvastam és elfogadom a játékszabályzatot.
          </TermsLabel>
        </CheckBoxContainer>
        <Button disabled={name === "" || !checked}>Regisztrálok</Button>
      </Container>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
