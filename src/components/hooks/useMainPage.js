import { ApiInstance } from "../../api/api";
import { useDispatch } from "react-redux";
import {
  SET_MODAL_IS_OPEN,
  SET_EMAIL,
  SET_CODE,
  SET_FORMATTED_DATE,
  SET_RESULT_MESSAGE,
} from "../store/state/dataSlice";

const useMainPage = () => {
  const dispatch = useDispatch();
  const sendCodeOnClick = async ({ email, code, day, hour, min }) => {
    const monthNumber = day.split(" ");
    let month = "";
    if (monthNumber[0] === "Július") {
      month = "07";
    }
    if (monthNumber[0] === "Augusztus") {
      month = "08";
    }
    const formattedDate = `2022-${month}-${monthNumber[1].replace(
      ".",
      ""
    )} ${hour}:${min}`;
    dispatch(SET_EMAIL(email));
    dispatch(SET_CODE(code));
    dispatch(SET_FORMATTED_DATE(formattedDate));

    try {
      const response = await ApiInstance.post("/code/upload", {
        email: email,
        code: code,
        purchase_time: formattedDate,
      });
      if (Object.values(response.data)[0].won === true) {
        dispatch(SET_RESULT_MESSAGE(true));
      } else {
        dispatch(SET_RESULT_MESSAGE(false));
      }
    } catch (error) {
      if (error.response.status === 422) {
        dispatch(SET_MODAL_IS_OPEN(true));
      }
    }
  };

  const sendCodeAfterRegistration = async ({ email, code, formattedDate }) => {
    try {
      const response = await ApiInstance.post("/code/upload", {
        email: email,
        code: code,
        purchase_time: formattedDate,
      });
      if (Object.values(response.data)[0].won === true) {
        dispatch(SET_RESULT_MESSAGE(true));
      } else {
        dispatch(SET_RESULT_MESSAGE(false));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { sendCodeOnClick, sendCodeAfterRegistration };
};

export default useMainPage;
