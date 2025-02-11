import { Navigate, NavLink } from "react-router-dom"
import logo from "../../../Assets/logo-mobile.png"
import "../../index.css"
import { useContext } from "react";
import { ContextApi } from "../ContextAPI/ContextAPI";
const Header = () => {
    const { user, signOutUser } = useContext(ContextApi);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                <Navigate to="/signIn"></Navigate>
            }).catch((error) => {
                // An error happened.
            });
    }
    const link = <>
        <NavLink className="pr-6 font-bold nav-link" to="/">Home</NavLink>
        <NavLink className="pr-6 font-bold nav-link" to="/allReview">All Review</NavLink>
        {
            user &&
            <>
                <NavLink className="pr-6 font-bold nav-link" to="/addReview">Add Review</NavLink>
                <NavLink className="pr-6 font-bold nav-link" to={`/myReview/${user.email}`}>My Review</NavLink>
                <NavLink className="pr-6 font-bold nav-link" to="/gameWatchList">Game Watch List</NavLink>
            </>
        }
    </>

    return (
        <div className="fixed w-full top-0  z-1 nav-bg-color">
            <div className="navbar roboto-normal">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className=" w-[50px] h-[40px]"><img className="w-full" src={logo} alt="" /></div>
                        <a className="oxanium-normal font-extrabold lg:text-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">GAME HEIST</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <>
                            <NavLink to={`${user.displayName}`}><img className="rounded-xl w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]" src={user.photoURL} alt="" /></NavLink>
                            <button className="pr-6 font-bold nav-link" onClick={handleSignOut}>Log Out</button>
                        </> :
                        <>
                            <NavLink className="pr-6 font-bold nav-link" to="/signIn">Sign In</NavLink>
                            <NavLink className="pr-6 font-bold nav-link" to="/signUp">Sign Up</NavLink>
                        </>}

                </div>
            </div>
        </div>
    );
};

export default Header;