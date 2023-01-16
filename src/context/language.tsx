import React, { createContext, useEffect, useState } from 'react'

const LanguageContext = createContext({
    language: "es",
    handleLanguage: (e:any) => {}
});


const LanguageProvider = ({children}:any) => {
    const [language, setLanguage] = useState("es");
    
    const handleLanguage = (e:any) => {
        setLanguage( e.target.value ); 
    }

    useEffect(() => {
    }, [language])
    
    const data = {
        language,
        handleLanguage
    }
    
    return (
        <LanguageContext.Provider value={data}>
          {children}
        </LanguageContext.Provider>
    )
}

export { LanguageProvider }
export default LanguageContext