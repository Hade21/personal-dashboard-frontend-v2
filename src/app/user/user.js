import { createSlice } from "@reduxjs/toolkit";

const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,24}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const initialState = {
  fullname: "",
  username: "",
  email: "",
  password: "",
  validName: false,
  validEmail: false,
  validPass: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFullname: (state, action) => {
      return {
        ...state,
        fullname: action.payload,
      };
    },
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setUsername: (state, action) => {
      return {
        ...state,
        username: action.payload,
      };
    },
    setPassword: (state, action) => {
      return {
        ...state,
        password: action.payload,
      };
    },
    validateName: (state, action) => {
      const valid = USER_REGEX.test(action.payload);
      return {
        ...state,
        validName: valid,
      };
    },
    validateEmail: (state, action) => {
      const valid = EMAIL_REGEX.test(action.payload);
      return {
        ...state,
        validEmail: valid,
      };
    },
    validatePass: (state, action) => {
      const valid = PASS_REGEX.test(action.payload);
      return {
        ...state,
        validPass: valid,
      };
    },
    reset: (state) => {
      return {
        ...state,
        fullname: "",
        username: "",
        email: "",
        password: "",
        validName: false,
        validEmail: false,
        validPass: false,
      };
    },
  },
});

export const {
  setFullname,
  setUsername,
  setEmail,
  setPassword,
  validateName,
  validateEmail,
  validatePass,
  reset,
} = userSlice.actions;
export default userSlice.reducer;
