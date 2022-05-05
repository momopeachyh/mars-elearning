const initialState = {
  items: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "ADD_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
  }
};

export default userReducer;
