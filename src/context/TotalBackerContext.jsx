import { createContext, useState } from "react";

export const TotalBackerContext = createContext()

export function TotalBackerProvider({ children }) {
    const [totalBackers, setTotalBackers] = useState(0)

    function sumTotalBackers() {
        setTotalBackers(prev => prev + 1)
    }

    return(
        <TotalBackerContext.Provider value={{totalBackers, sumTotalBackers}}>
            {children}
        </TotalBackerContext.Provider>
    )
}