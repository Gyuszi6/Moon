import { Label, InputBox, Input } from "./styles";

const TextInput = ({ name, setFieldValue, value, label, ...props }) => {
  return (
    <InputBox>
      <Label>{label}</Label>
      <Input
        {...props}
        name={name}
        type="text"
        value={value}
        onChange={(event) => setFieldValue(name, event.target.value)}
      />
    </InputBox>
  );
};

export default TextInput;
