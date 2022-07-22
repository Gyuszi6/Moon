import { Container, Head } from "../styles";
import { CodePageContainer } from "./styles";
import CodeUploadForm from "../form/CodeUploadForm";

const MainPage = () => {
  return (
    <CodePageContainer>
      <Head>Kódfeltöltés</Head>
      <Container>
        <CodeUploadForm />
      </Container>
    </CodePageContainer>
  );
};

export default MainPage;
