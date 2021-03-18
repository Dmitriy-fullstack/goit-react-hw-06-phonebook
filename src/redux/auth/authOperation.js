import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions.js";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

// const register = credentials => dispatch => {
//     dispatch(registerRequest());

//     axios
//     .post('/users/signup', credentials)
//     .then(({ data }) => {token.set(data.token), dispatch(registerSuccess(data))})
//     .catch((error) => dispatch(registerError(error)))
// }

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    const response = await axios("/users/logout");
    token.unset();
    dispatch(logoutSuccess(response.data));
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current");

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
