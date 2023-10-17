import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";


export default function Registration() {
    const { test, count, setCount, createUserByEmail, signInGoogle } = useContext(AuthContext)
    const auth = getAuth(app);

    const handleReg = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;

        createUserByEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                }).then(() => {
                    // Profile updated!
                    // ...
                    alert("Profile Photo updated!")
                }).catch((error) => {
                    // An error occurred
                    // ...
                    alert("Error")
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..

                console.log(errorCode)
                console.log(errorMessage)
                alert("Registration Failed")
            });



    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-x-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleReg}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-1">
                                <button className="btn btn-warning text-white hover:bg-black hover:border-black" type="submit">Registration</button>
                            </div>
                            {/* <div className="form-control mt-1">
                                <button className="btn btn-success btn-outline outline-success text-white hover:bg-black hover:border-black" type="submit">Google</button>
                            </div> */}
                            <div className="form-control mt-1">
                                <Link to={'/login'} className="btn btn-primary text-white hover:bg-black hover:border-black" type="submit">Have Account? Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
