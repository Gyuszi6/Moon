import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  modalIsOpen: false,
  code: "",
  formattedDate: "",
  resultMessage: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    SET_MODAL_IS_OPEN: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    SET_EMAIL: (state, action) => {
      state.email = action.payload;
    },
    SET_CODE: (state, action) => {
      state.code = action.payload;
    },
    SET_FORMATTED_DATE: (state, action) => {
      state.formattedDate = action.payload;
    },
    SET_RESULT_MESSAGE: (state, action) => {
      state.resultMessage = action.payload;
    },
  },
});

export const {
  SET_MODAL_IS_OPEN,
  SET_EMAIL,
  SET_CODE,
  SET_FORMATTED_DATE,
  SET_RESULT_MESSAGE,
} = dataSlice.actions;

export default dataSlice.reducer;
