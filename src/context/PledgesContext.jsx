import { useState } from "react";
import { createContext } from "react";

export const PledgesContext = createContext()

export function PledgesProvider({ children }) {
    const [pledgeTotalValue, setPledgeTotalValue] = useState(0)

    function sumPledgeTotalValue(value) {
        setPledgeTotalValue(prev => Number(prev) + Number(value))
    }

    return (
        <PledgesContext.Provider value={{pledgeTotalValue, sumPledgeTotalValue}}>
            {children}
        </PledgesContext.Provider>
    )
}