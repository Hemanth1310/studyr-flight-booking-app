import { createContext } from "react";

export const AuthContext=createContext();

const AuthContextProvider=(props)=>{
    const auth=false;

    return(
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider