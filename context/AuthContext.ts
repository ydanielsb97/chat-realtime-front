import { createContext } from "react";
import { AuthContextI } from "../interface/AuthContext.interface";


const AuthContext = createContext<AuthContextI | undefined>({
    auth: undefined,
    login: (token: string) => token,
    logout: () => null,
    setReloadUser: () => null
})

export default AuthContext;