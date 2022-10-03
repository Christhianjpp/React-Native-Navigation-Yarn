import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


// Definir la información

export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

//  Estado inicial
export const authIntialState: AuthState = {
    isLoggedIn: false
}

//Lo usaremos para decirle a react como luce y que expone el context

export interface AuthContexProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (iconName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContexProps)

// Coponente proveedor del estado
export const AuthProvide = ({ children }: any) => {


    const [authState, dispatch] = useReducer(authReducer, authIntialState)


    const signIn = () => {
        dispatch({ type: 'sigIn' })
    }
    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: "changeFavicon", payload: iconName })
    }
    const changeUsername = (userName: string) => {
        dispatch({ type: "changeUsername", payload: userName })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}
