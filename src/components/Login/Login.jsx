import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";


export default function Login() {
    const { test, currentUser, setCurrentUser, signInByEmail, signInGoogle,isDarkModeFunc } = useContext(AuthContext)
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

    const hangleGoogleSignIn = () => {
        signInGoogle()
    }
    return (
        <div className={isDarkModeFunc ? "bg-violet-950 text-white" : " "}>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-x-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
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
                            <div className="form-control mt-6">
                                <Link to={'/registration'} className="btn btn-primary text-white hover:bg-black hover:border-black" >Need An Account? Register</Link>
                            </div>
                            <span className="text-center text-black">OR</span>
                            <div className="form-control mt-1">
                                <button onClick={hangleGoogleSignIn} className="btn btn-success btn-outline outline-success text-white hover:bg-black hover:border-black" >Google</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
