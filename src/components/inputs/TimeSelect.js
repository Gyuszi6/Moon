import { SelectBox, SelectLabel, Select } from "./styles";

const TimeSelect = ({ data, name, setFieldValue, value, label }) => {
  return (
    <SelectBox>
      <SelectLabel htmlFor={name}>{label}</SelectLabel>
      <Select
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
        name={name}
      >
        <option hidden></option>
        {data.map((dataItem) => (
          <option key={dataItem}>{dataItem}</option>
        ))}
      </Select>
    </SelectBox>
  );
};

export default TimeSelect;
