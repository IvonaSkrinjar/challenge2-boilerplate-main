export const authReducer = (state: any, action: any) => {
  switch (action.type) {
  case "getUserRequest":
    return {
      ...state,
      isLoading: true,
      isLoggedIn: false
    };
  case "getUserSuccess":
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isLoading: false,
      isLoggedIn: true
    };
  case "getUserError":
    return {
      ...state,
      user: null,
      token: "",
      isLoading: false,
      errorMessage: action.error,
      isLoggedIn: false
    };
  case "loginRequest":
    return {
      ...state,
      isLoading: true,
      isLoggedIn: false,
      errorMessage: ""
    };
  case "loginSuccess":
    return {
      ...state,          
      token: action.payload.token,
      isLoading: false,
      isLoggedIn: true,
      errorMessage: ""
    };     
  case "loginError":
    return {
      ...state,           
      token: "",
      isLoading: false,
      errorMessage: action.payload.errorMessage,
      isLoggedIn: false
    };
  case "logout":
    return {
      ...state,
      user: "",
      token: "",
      isLoading: false,
      isLoggedIn: false
    };
  default:
    return state;
  }
};
