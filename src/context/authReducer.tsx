import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'sigIn' }
    | { type: 'logout' }
    | { type: 'changeFavicon', payload: string }
    | { type: 'changeUsername', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {


    switch (action.type) {
        case 'sigIn':

            return {
                ...state,
                isLoggedIn: true,
                userName: 'asdf'
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case 'changeFavicon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'changeUsername':
            return {
                ...state,
                userName: action.payload
            }
        default:

            return state
    }

}