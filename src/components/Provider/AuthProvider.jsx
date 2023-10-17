import { createContext, useState } from "react"


export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [count, setCount] = useState(0)
    const test = 10
    const infoValue = { test, count, setCount };
    return (
        <AuthContext.Provider value={infoValue}>
            {children}
        </AuthContext.Provider>
    )
}
