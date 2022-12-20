import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { IUser } from "interfaces";
import { authReducer } from "./AuthReducer";
import { authservices } from "services/auth.services";

export interface AuthState {
  user: IUser | null;
  token: "";
  loading: false;
  errorMessage: null;
  isLoggedIn: false;
}

export type AuthContextProps = {
  user: IUser;
  token: string;
  loading: false;
  errorMessage: null;
  isLoggedIn: false;
  loadUser: (token: string) => void;
  login: (username: string, password: string) => string;
  logout: () => void;
};

const accessToken = localStorage.getItem("token");

export const INITIAL_STATE = {
    user: null,
    token: accessToken,
    loading: false,
    errorMessage: null,
    isLoggedIn: false,
};

interface props {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: props) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    const loadUser = async (token: string) => {
        const jwtData = token.split(".")[1];
        const decodedJwtJsonData = window.atob(jwtData);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);

        dispatch({
            type: "getUserRequest",
        });
        authservices
            .getUser(decodedJwtData.sub)
            .then((response) => {
                dispatch({
                    type: "getUserSuccess",
                    payload: {
                        user: response.data,
                        token: token,
                    },
                });
            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: "getUserFailure",
                });
            });
    };

    const login = async (username: string, password: string) => {
        dispatch({
            type: "loginRequest",
        });
         
        const response = await authservices.login(username, password);          
        if (response.token) {
            dispatch({
                type: "loginSuccess",
                payload: {
                    token: response.token,
                },
            });
            localStorage.setItem("token", JSON.stringify(response.token));
            loadUser(response.token);
        } else {
            dispatch({
                type: "loginError",
                payload: {
                    errorMessage: "Invalid Username or Password",
                },
            });
        }
    };

    const logout = async () => {
        dispatch({
            type: "logout",
        });    
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ ...state, login, loadUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
