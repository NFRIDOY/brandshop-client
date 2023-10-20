import { Link, NavLink } from "react-router-dom";
import logo from '/Logo.png'
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import toast from "react-hot-toast";

export default function Navbar() {
    const { test, currentUser, setCurrentUser, signOutUser, isDarkMode, setIsDarkMode, isDarkModeFunc, setIsDarkModeFunc } = useContext(AuthContext)
    // const [isDarkMode, setIsDarkMode] = useState(() => false);
    const handleDarkMode = () => {
        setIsDarkMode()
    }
    return (
        <div className={isDarkModeFunc ? "w-full bg-violet-950" : ""}>
            <div className="w-full max-w-7xl mx-auto p-8 text-center">
                <div className={isDarkModeFunc ? "navbar rounded-lg bg-violet-950 text-white " : "navbar bg-base-100"}>
                    <div className="navbar-start ">
                        <div className= {isDarkModeFunc ? "dropdown text-black bg-violet-950" : "dropdown text-black"}>
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className={isDarkModeFunc ? "h-5 w-5 text-white" : "h-5 w-5 text-black"} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/addProducts"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Add Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/myCart"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/registration"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Registration
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li>
                                    <span>
                                        <button className="" onClick={() => {
                                            console.log(isDarkModeFunc)
                                            setIsDarkModeFunc(!isDarkModeFunc)
                                            console.log(isDarkModeFunc)
                                            toast.success("Mode Changed")
                                        }}>
                                            {
                                                isDarkModeFunc ? "Light" : "Dark"
                                            }
                                        </button>
                                    </span>
                                </li>

                            </ul>
                        </div>
                        <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                            <img className="h-10 w-14" src={logo} alt="" /> <span className="md:text-4xl font-black">Technology</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addProducts"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Add Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/myCart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/registration"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Registration
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                {/* Dark Mode Btn */}
                                <span
                                // className={({ isActive, isPending }) =>
                                //     isPending ? "pending" : isActive ? "active" : ""
                                // }
                                >
                                    {/* <input type="checkbox" className="toggle" checked /> */}
                                    {/* <DarkModeToggle
                                    onChange={setIsDarkMode}
                                    checked={isDarkMode}
                                    size={50}
                                    onClick={() => {
                                        console.log(isDarkModeFunc)
                                        setIsDarkModeFunc(!isDarkModeFunc)
                                        console.log(isDarkModeFunc)
                                        toast.success("Toggle")
                                    }}
                                /> */}
                                    <button className="" onClick={() => {
                                        console.log(isDarkModeFunc)
                                        setIsDarkModeFunc(!isDarkModeFunc)
                                        // let mode;
                                        // // const getMode = () => {
                                        // mode = localStorage.getItem("mode")
                                        // console.log(mode)
                                        // // }
                                        // if (mode) {
                                        //     localStorage.setItem("mode", false)
                                        //     toast.success("Mode Null")
                                        // }
                                        // else {
                                        //     // localStorage.setItem("mode", setIsDarkModeFunc(true))
                                        //     toast.success("Mode Else")

                                        // }
                                        // console.log(isDarkModeFunc)
                                        {
                                            isDarkModeFunc ? toast.success("Light Mode") : toast.success("Hello Darkness", {
                                                icon: '👏',
                                                style: {
                                                    borderRadius: '10px',
                                                    background: '#333',
                                                    color: '#fff',
                                                },
                                            })
                                        }
                                    }}>
                                        {
                                            isDarkModeFunc ? "Light" : "Dark"
                                        }
                                    </button>
                                </span>
                            </li>

                        </ul>
                    </div>
                    <div className="navbar-end">

                        <span>
                            {
                                currentUser?.displayName && <span className="mx-1 font-bold hidden lg:block">
                                    {currentUser?.displayName}
                                </span>
                            }
                        </span>
                        <span className="avatar placeholder ">
                            {
                                currentUser?.photoURL && <span onClick={signOutUser} className="mx-1 w-4 lg:w-8" >
                                    <img className=" bg-neutral-focus text-neutral-content rounded-full ring ring-accent hover:ring-error ring-offset-base-100 ring-offset-2" src={currentUser?.photoURL} alt="" />
                                </span>
                            }
                        </span>
                        <span>

                        </span>
                        {
                            currentUser?.uid ? <button className="rounded-md btn-ghost font-bold text-red-600 text-sm p-2 " onClick={signOutUser}>Log Out</button> : <Link to={'/login'} className="btn" >Log In</Link>
                        }

                        {/* <a className="btn" onClick={() => setCount(count+1)}>Sign Out { count }</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
