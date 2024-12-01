import { createContext, useState } from "react";

export const OccuranceContext = createContext();

const OccuranceContextProvider = (props)=>{
    const [occurance,setOccurance] = useState('')

    const handleOccurance = (val)=>{
        setOccurance(val)
    }

    return(
        <OccuranceContext.Provider value={{occurance,handleOccurance}}>
            {props.children}
        </OccuranceContext.Provider>
    )

}

export default OccuranceContextProvider