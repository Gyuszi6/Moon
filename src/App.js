import MainPage from "./components/mainPage/MainPage";
import Regi from "./components/registration/Regi";
import { AppContainer } from "./styles";
import { useSelector } from "react-redux";

function App() {
  const { modalIsOpen } = useSelector((state) => state.data);
  return (
    <AppContainer>
      {!modalIsOpen && <MainPage />}
      <Regi open={modalIsOpen} />
    </AppContainer>
  );
}

export default App;
