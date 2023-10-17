import { createContext, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    
    const createUserByEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    const [count, setCount] = useState(0)
    const test = 10
    const infoValue = { test, count, setCount, createUserByEmail, signInGoogle };
    return (
        <AuthContext.Provider value={infoValue}>
            {children}
        </AuthContext.Provider>
    )
}
