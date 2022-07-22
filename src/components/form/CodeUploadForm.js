import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Button } from "../styles";
import { DateText, SelectContainer, ErrorMessage } from "./styles";
import useMainPage from "../hooks/useMainPage";
import DateSelect from "../inputs/DateSelect";
import TimeSelect from "../inputs/TimeSelect";
import TextInput from "../inputs/TextInput";
import { Lose, Win } from "../mainPage/ResultMessage";
import { useSelector } from "react-redux";
import useDate from "../hooks/useDate";

const codeFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("email cím megadása kötelező!")
    .trim()
    .email("Nem megfelelő email formátum!"),
  code: yup
    .string()
    .required("code megadása kötelező!")
    .trim()
    .matches(/^[A-Za-z0-9]{8}$/i, "A kód pontosan 8 karaktert tartalmazzon!"),
  day: yup.string().required(""),
  hour: yup.string().required("hour megadása kötelező!"),
  min: yup.string().required("min megadása kötelező!"),
});

const CodeUploadForm = () => {
  const { resultMessage } = useSelector((state) => state.data);
  const { actualDay, mins, hours } = useDate();
  const { sendCodeOnClick } = useMainPage();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          code: "",
          day: actualDay,
          hour: "",
          min: "",
        }}
        validateOnMount={true}
        enableReinitialize={true}
        validationSchema={codeFormSchema}
        onSubmit={async (values) => {
          await sendCodeOnClick(values);
        }}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form>
            <Field
              as={TextInput}
              touched={touched["email"]}
              errors={errors["email"]}
              name="email"
              setFieldValue={setFieldValue}
              label="E-MAIL CÍM:"
            />
            <Field
              as={TextInput}
              name="code"
              setFieldValue={setFieldValue}
              label="KÓD:"
            />
            <DateText>VÁSÁRLÁS DÁTUMA:</DateText>
            <SelectContainer>
              <Field as={DateSelect} setFieldValue={setFieldValue} name="day" />
              <Field
                as={TimeSelect}
                setFieldValue={setFieldValue}
                name="hour"
                data={hours}
                label="ÓRA:"
              />
              <Field
                as={TimeSelect}
                setFieldValue={setFieldValue}
                name="min"
                data={mins}
                label="PERC:"
              />
            </SelectContainer>

            {Object.entries(errors).map(
              ([name, errorKey]) =>
                touched[name] && (
                  <ErrorMessage key={name}>{errorKey}</ErrorMessage>
                )
            )}

            <Button type="submit">Kódfeltöltés</Button>
          </Form>
        )}
      </Formik>
      {resultMessage === true && <Win />}
      {resultMessage === false && <Lose />}
    </>
  );
};

export default CodeUploadForm;
