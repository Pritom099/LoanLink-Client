import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useAuth();
    // const [isOpen, setIsOpen] = useState(false);
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        const newTheme = dark ? "light" : "dark";
        setDark(!dark);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!",
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        toast.success("Logout Successful");
                    })
                    .catch(() => {
                        toast.error("Logout Failed");
                    });
            }
        });
    };


    return (
        <div className="navbar bg-base-100 shadow-sm px-6 py-3 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to='/browse-loans' className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Browse Loans</Link>
                        {user && <Link to='/dashboard' className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Dashboard</Link>}
                        {user && <Link to='/apply-loan' className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Apply Loan</Link>}

                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2 font-bold text-xl ">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        LL
                    </div>
                    <span className="hidden sm:inline text-2xl">LoanLink</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/browse-loans' className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Browse Loans</Link>
                    {user && <Link to='/dashboard' className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Dashboard</Link>}
                    {user && <Link to='/apply-loan' className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Apply Loan</Link>}
                    <Link to='/map' className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Coverage</Link>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <button onClick={toggleTheme} className="text-xl">
                    {dark ? <FaSun /> : <FaMoon />}
                </button>
                {
                    user ? (
                        <>
                            <div onClick={handleLogout}>
                                <Link className="my-btn">LogOut</Link>
                            </div>
                            <div className='hidden md:block'>
                                {/* Avatar */}
                                <img
                                    className='rounded-full'
                                    referrerPolicy='no-referrer'
                                    src={user && user.photoURL}
                                    alt='profile'
                                    height='40'
                                    width='40'
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to='/login' className="our-btn">Login</Link>
                            <Link to='/signup' className="my-btn">Sign Up</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;