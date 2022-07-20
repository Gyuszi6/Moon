import {
  Head,
  Container,
  InputBox,
  Input,
  SelectContainer,
  Select,
  SelectBox,
  DaySelect,
  SelectLabel,
  DateText,
  Button,
  Label,
  CodePageContainer,
} from "./styles";
import { useState } from "react";
import axios from "axios";
import useDate from "./useDate";
import RegistrationPage from "./RegistrationPage";

const CodePage = () => {
  const { mins, hours, days, actualDay, year } = useDate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [actualHour, setActualHour] = useState("");
  const [actualMin, setActualMin] = useState("");
  let numberOfMonths = 0;
  if (actualDay.split(" ")[0] === "Július") {
    numberOfMonths = "07";
  }
  if (actualDay.split(" ")[0] === "Augusztus") {
    numberOfMonths = "08";
  }
  const dateForApi =
    year +
    "-" +
    numberOfMonths +
    "-" +
    actualDay.split(" ")[1].slice(0, 2) +
    " " +
    actualHour +
    ":" +
    actualMin;

  return (
    <CodePageContainer>
      <Head>Kódfeltöltés</Head>
      <Container>
        <InputBox>
          <Label>E-MAIL CÍM:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputBox>
        <InputBox>
          <Label>KÓD:</Label>
          <Input
            type="text"
            id="code"
            value={code}
            onChange={(e) => {
              if (code.length < 8) {
                setCode(e.target.value.toUpperCase());
              }
            }}
          />
        </InputBox>
        <DateText>VÁSÁRLÁS DÁTUMA:</DateText>
        <SelectContainer>
          <SelectBox>
            <SelectLabel htmlFor="day">Nap</SelectLabel>
            <DaySelect defaultValue={actualDay} name="day" id="day">
              {days.map((day) => (
                <option key={day}>{day}</option>
              ))}
            </DaySelect>
          </SelectBox>
          <SelectBox>
            <SelectLabel htmlFor="hour">ÓRA:</SelectLabel>
            <Select
              onChange={(e) => {
                setActualHour(e.target.value);
              }}
              defaultValue=" "
              name="hour"
              id="hour"
            >
              <option hidden></option>
              {hours.map((hour) => (
                <option key={hour}>{hour}</option>
              ))}
            </Select>
          </SelectBox>
          <SelectBox>
            <SelectLabel htmlFor="min">PERC:</SelectLabel>
            <Select
              onChange={(e) => {
                setActualMin(e.target.value);
              }}
              defaultValue=" "
              name="min"
              id="min"
            >
              <option hidden></option>
              {mins.map((min) => (
                <option key={min}>{min}</option>
              ))}
            </Select>
          </SelectBox>
        </SelectContainer>
        <Button
          disabled={
            actualMin === "" ||
            actualHour === "" ||
            code.length < 8 ||
            email === ""
          }
        >
          Kódfeltöltés
        </Button>
      </Container>
    </CodePageContainer>
  );
};

export default CodePage;
