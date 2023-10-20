import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase/firebase.config";
import toast from "react-hot-toast";


export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState();
    const cartList = [];
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [isDarkModeFunc, setIsDarkModeFunc] = useState(false);
    // const [isDarkModeFunc, setIsDarkModeFunc] = useState(() => false);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const createUserByEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInByEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true)
        // return signInWithPopup(auth, googleProvider)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                toast.success("Google Sign In")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

                toast.error("Google Sign In Failed")
            });
    }
    const signOutUser = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("Sign-out successful.")
        }).catch((error) => {
            // An error happened.
            toast.error("An error happened.")
            console.log(error)
        });
    }

    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
            console.log("Current User: ", currentUser);
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    }, [currentUser])
    // useEffect(() => {
    //     const unsubscriber = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/auth.user
    //             const uid = user.uid;
    //             // ...
    //         } else {
    //             // User is signed out
    //             // ...
    //         }
    //     });

    //     return unsubscriber
    // }, [])


    const test = 10
    const infoValue = { test, currentUser, setCurrentUser, createUserByEmail, signInByEmail, signInGoogle, signOutUser,loading, setLoading, cart, setCart, cartList, isDarkMode, setIsDarkMode, isDarkModeFunc, setIsDarkModeFunc };
    return (
        <AuthContext.Provider value={infoValue}>
            {children}
        </AuthContext.Provider>
    )
}
