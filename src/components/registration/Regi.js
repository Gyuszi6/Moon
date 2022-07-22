import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import TextInput from "../inputs/TextInput";
import { Button, Container, Head } from "../styles";
import { RegistrationPageContainer, CheckBoxContainer } from "./styles";
import { useSelector } from "react-redux";
import useRegister from "../hooks/useRegister";
import { ErrorMessage } from "./styles";
import { useState } from "react";

const registrationFormSchema = yup.object().shape({
  email: yup.string().required("email"),
  name: yup
    .string()
    .required("név megadása kötelező")
    .min(2, "Legalább 2 karakter hosszúságú név szükséges"),
});

const Regi = ({ open }) => {
  const [valid, setValid] = useState(false);
  const { register } = useRegister();
  const { email } = useSelector((state) => state.data);
  return (
    <>
      {open && (
        <RegistrationPageContainer>
          <Container>
            <Head>Regisztráció</Head>
            <Formik
              initialValues={{
                email: email,
                name: "",
              }}
              validationSchema={registrationFormSchema}
              onSubmit={async (values) => {
                await register(values);
              }}
            >
              {({ setFieldValue, errors, touched }) => (
                <Form>
                  <Field
                    as={TextInput}
                    name="email"
                    label="E-MAIL CÍM:"
                    setFieldValue={setFieldValue}
                    disabled
                  />
                  <Field
                    as={TextInput}
                    name="name"
                    label="NÉV:"
                    setFieldValue={setFieldValue}
                  />
                  <CheckBoxContainer>
                    <input
                      type="checkbox"
                      onClick={(event) => setValid(!valid)}
                    />
                    <p>Elolvastam és elfogadom a játékszabályzatot</p>
                  </CheckBoxContainer>
                  {Object.entries(errors).map(
                    ([name, errorKey]) =>
                      touched[name] && (
                        <ErrorMessage key={name}>{errorKey}</ErrorMessage>
                      )
                  )}
                  <Button disabled={valid === false} type="submit">
                    Regiszrálok
                  </Button>
                </Form>
              )}
            </Formik>
          </Container>
        </RegistrationPageContainer>
      )}
    </>
  );
};

export default Regi;
