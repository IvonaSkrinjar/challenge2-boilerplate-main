export const authReducer = (state: any, action: any) => {
    switch (action.type) {
    case "getUserRequest":
        return {
            ...state,
            loading: true,
            isLoggedIn: false
        };
    case "getUserSuccess":
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            loading: false,
            isLoggedIn: true
        };
    case "getUserError":
        return {
            ...state,
            user: null,
            token: "",
            loading: false,
            errorMessage: action.error,
            isLoggedIn: false
        };
    case "loginRequest":
        return {
            ...state,
            loading: true,
            isLoggedIn: false,
            errorMessage: ""
        };
    case "loginSuccess":
        return {
            ...state,          
            token: action.payload.token,
            loading: false,
            isLoggedIn: true,
            errorMessage: ""
        };     
    case "loginError":
        return {
            ...state,           
            token: "",
            loading: false,
            errorMessage: action.payload.errorMessage,
            isLoggedIn: false
        };
    case "logout":
        return {
            ...state,
            user: "",
            token: "",
            loading: false,
            isLoggedIn: false
        };
    default:
        return state;
    }
};
