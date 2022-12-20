import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { IUser } from "interfaces";
import { authReducer } from "./AuthReducer";
import { authservices } from "services/auth.services";

export interface AuthState {
  user: IUser;
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
//const token = accessToken ? JSON.parse(accessToken) : "";

export const INITIAL_STATE = {
    user: {},
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
        dispatch({
            type: "getUserRequest",
        });
        authservices
            .getUser(1)
            .then((response) => {
                dispatch({
                    type: "getUserSuccess",
                    payload: {
                        user: response.data,
                        token: token
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
         
        const token = await authservices.login(username, password);          
        if (token) {
            dispatch({
                type: "loginSuccess",
                payload: {
                    token: token,
                },
            });
            localStorage.setItem("token", JSON.stringify(token));
            loadUser(token);
        } else {
            dispatch({
                type: "loginError",
                payload: {
                    errorMessage: "Invalid Username or Password"
                }
            });
        }
    };

    const logout = async () => {
        dispatch({
            type: "logout",
        });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ ...state, login, loadUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
