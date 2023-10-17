import { useContext } from "react";
import Banner from "../Banner/Banner";
import { AuthContext } from "../Provider/AuthProvider";


export default function Home() {
    const { test, count, setCount, createUserByEmail, signInGoogle } = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
            Home {test}
            
        </div>
    )
}
