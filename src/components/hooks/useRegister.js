import { ApiInstance } from "../../api/api";
import useMainPage from "./useMainPage";
import { useSelector, useDispatch } from "react-redux";
import { SET_MODAL_IS_OPEN } from "../store/state/dataSlice";

const useRegister = () => {
  const dispatch = useDispatch();
  const { sendCodeAfterRegistration } = useMainPage();
  const { email, code, formattedDate } = useSelector((state) => state.data);
  const register = async ({ email, name }) => {
    try {
      await ApiInstance.post("/user/register", {
        email: email,
        name: name,
      });
      await sendCodeAfterRegistration({ email, code, formattedDate });
      dispatch(SET_MODAL_IS_OPEN(false));
    } catch (error) {
      console.log(error);
    }
  };
  return { register };
};

export default useRegister;
