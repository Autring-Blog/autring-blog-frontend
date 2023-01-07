import axios from 'axios';
import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../constants/userConstant';
const URL = 'https://www.theautring.com/api/v1';
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post(
      `${URL}/login`,
      { email, password },
      {
        xhrFields: {
          withCredentials: true,
        },
        withCredentials: true,
      }
    );
    console.log(data);

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('loggedIn', true);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.error });
  }
};

//REGISTER
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    console.log(userData);
    const { data } = await axios.post(`${URL}/signup`, userData);
    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
  } catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_FAIL, payload: error.response.data.error });
  }
};

export const logOut = () => {
  localStorage.clear();
};

// // Load User
// export const loadUser = () => async (dispatch) => {
//     try {
//         dispatch({ type: LOAD_USER_REQUEST });
//         const { data } = await axios.get(`/api/v1/me`);
//         dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
//     } catch (error) {
//         dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
//     }
// };

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
