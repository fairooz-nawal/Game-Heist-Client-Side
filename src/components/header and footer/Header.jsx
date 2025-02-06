import { NavLink } from "react-router-dom"

const Header = () => {

    const link = <>
        <NavLink className="pr-6 font-bold nav-link" to="/">Home</NavLink>
        <NavLink className="pr-6 font-bold nav-link" to="/allReview">All Review</NavLink>
        <NavLink className="pr-6 font-bold nav-link" to="/addReview">Add Review</NavLink>
        <NavLink className="pr-6 font-bold nav-link" to="/myReview">My Review</NavLink>
        <NavLink className="pr-6 font-bold nav-link" to="/gameWatchList">Game Watch List</NavLink>

    </>

    return (
        <div>
            <div className="navbar nav-bg-color roboto-normal">
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
                        <div className=" w-[50px] h-[40px]"><img className="w-full" src="../../../Assets/logo-mobile.png" alt="" /></div>
                        <a className="oxanium-normal font-extrabold lg:text-3xl">Game Heist</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink className="pr-6 font-bold nav-link" to="/signIn">Sign In</NavLink>
                    <NavLink className="pr-6 font-bold nav-link" to="/signUp">Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;