import { AuthI } from "./Login.interface";


export interface AuthContextI {
    auth: AuthI | undefined
    login: Function
    logout: Function
    setReloadUser: Function
}