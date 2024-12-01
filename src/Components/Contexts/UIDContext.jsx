import { createContext, useState } from "react";

export const UIDContext = createContext();

const UIDContextProvider = (props)=>{
    const [uid,setUID] = useState('')

    const handleUID = (val)=>{
        setUID(val)
    }

    return(
        <UIDContext.Provider value={{uid,handleUID}}>
            {props.children}
        </UIDContext.Provider>
    )

}

export default UIDContextProvider