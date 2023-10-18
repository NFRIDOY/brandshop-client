import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


export default function Loading({ children }) {
    const { currentUser, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='mx-auto w-fit'><span className="loading loading-ring loading-lg text-center "></span></div>
    }

    if (currentUser) {
        return children;
    }
    // return (
    //     <div>{children}</div>
    // )
}
