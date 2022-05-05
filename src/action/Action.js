import http from "./http-common";

export const registerUser = (postData) => async (dispatch, getState) => {
  dispatch({ type: "ADD_USER_REQUEST" });

  try {
    const response = await http.post("addUser", postData);

    dispatch({ type: "ADD_USER_SUCCESS", payload: response.data });
    console.log("Data:", response.data);
  } catch (error) {
    dispatch({ type: "ADD_USER_ERROR" });
  }
};
