import { createContext } from "react";
import { useContext, useState } from "react";


export const CookieContext = createContext();

const CookieContextProvider =(props)=>{
    const [cConsent,setCookieConcent] = useState(()=>{
        const cls = localStorage.getItem('studyr-cookie-consent');
        console.log("----------cls"+cls)
        if(cls===''){return false}
        else if(cls==='false'){return false}
        else if(cls==='true'){return true}
    });


    const updateCookieConsent = (val)=>{ 
        
        localStorage.setItem('studyr-cookie-consent',val);
        setCookieConcent(val);
    }


    return(
        <CookieContext.Provider value={{cConsent,updateCookieConsent}}>
            {props.children}
        </CookieContext.Provider>
    )

}

export default CookieContextProvider