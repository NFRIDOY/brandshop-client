import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


export default function Login() {
    const { setLoading, currentUser, setCurrentUser, signInByEmail, signInGoogle, isDarkModeFunc } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        signInByEmail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
                toast.success("Login Successfull")
                setCurrentUser(user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                toast.error("Login Failed")
                toast.error("Incorrect Email Or Password")
                // toast.error(errorMessage)
                // if(errorMessage == "Firebase: Error (auth/invalid-login-credentials).") {
                //     toast.error("Login Failed For Email")
                // }
                // else {
                //     toast.error("Login Failed Other")
                // }
            });

    }

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const hangleGoogleSignIn = () => {
        // signInGoogle()
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
                navigate(location?.state ? location?.state : '/')
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

    return (
        <div className={isDarkModeFunc ? "bg-violet-950 text-white" : " "}>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-x-20 w-full ">
                    <div className="text-center lg:text-center lg:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                </div>
                                <div className="form-control mt-1">
                                    <button className="btn btn-accent text-white hover:bg-black hover:border-black" type="submit">Login</button>
                                </div>
                            </form>
                            <div className="flex flex-col">
                                {/* <div className="mx-auto w-full mt-6"> */}
                                <Link to={'/registration'} className=" mt-6 btn btn-primary text-white hover:bg-black hover:border-black" >Need An Account? Register Here</Link>
                                {/* </div> */}
                                <span className="text-center text-black">OR</span>
                                {/* <div className="mx-auto w-full mt-1"> */}
                                <button onClick={hangleGoogleSignIn} className="mt-1 btn btn-success btn-outline outline-success text-white hover:bg-black hover:border-black" >Google</button>
                                {/* </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
