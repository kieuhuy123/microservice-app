import { GetData, PostData } from "../../utils";
import { Action } from "../actions";
import { userLogin, userProfile } from "../user-slice"; // Update this import
export const SetAuthToken = async (token) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.clear();
  }
};

export const onSignup =
  ({ email, password, phone }) =>
  async (dispatch) => {
    try {
      const response = await PostData("/customner/signup", {
        email,
        password,
        phone,
      });

      const { token } = response.data;
      await SetAuthToken(token);
      return dispatch({ type: Action.SIGNUP, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const onLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await PostData("/customer/login", {
        email,
        password,
      });
      console.log("response ne", response);
      const { token } = response.data;
      await SetAuthToken(token);
      dispatch(userLogin({ token }));
      return { success: true, data: response.data };
    } catch (err) {
      console.log(err);
    }
  };

export const onViewProfile = () => async (dispatch) => {
  try {
    const response = await GetData("/customer/profile");

    dispatch(userProfile(response.data));
    // return { success: true, data: response.data };
  } catch (err) {
    console.log(err);
  }
};
