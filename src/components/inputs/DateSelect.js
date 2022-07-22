import { DaySelectInput, SelectBox, SelectLabel } from "./styles";
import useDate from "../hooks/useDate";

const DateSelect = ({ name, setFieldValue, value }) => {
  const date = new Date();
  const { days } = useDate();
  let month = "Július";
  if (date.getMonth === 8) {
    month = "Augusztus";
  }
  let validDay = date.getDate();

  return (
    <SelectBox>
      <SelectLabel htmlFor="day">Nap</SelectLabel>
      <DaySelectInput
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
        name="day"
      >
        {days.map((day) => (
          <option
            disabled={
              day.split(" ")[0] !== month ||
              day.replace(".", "").split(" ")[1] > validDay
            }
            key={day}
          >
            {day}
          </option>
        ))}
      </DaySelectInput>
    </SelectBox>
  );
};

export default DateSelect;
