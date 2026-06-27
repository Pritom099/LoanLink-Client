import { AiOutlineBars } from "react-icons/ai";
// import { BsGraphUp } from "react-icons/bs";
// import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { FcSettings } from "react-icons/fc";
import MenuItem from "./Menu/MenuItem";
import CustomerMenu from "./Menu/CustomerMenu";
import AdminMenu from "./Menu/AdminMenu";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../shared/LoadingSpinner";


const Sidebar = () => {
    const { logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [role, isRoleLoading] = useRole()

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

    if(isRoleLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <>
            {/* Small Screen Navbar, only visible till md breakpoint */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl ">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                                LL
                            </div>
                            <span className="hidden sm:inline text-2xl">LoanLink</span>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200 z-30 mr-10'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-56 space-y-6 px-2 py-4 absolute top-16 bottom-0 left-0 transform 
  ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
  md:top-0 md:translate-x-0 transition duration-200 ease-in-out z-10`}
            >
                <div className='flex flex-col h-full'>
                    {/* Top Content */}
                    <div>
                        {/* Logo */}
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto'>
                            <Link to="/" className="flex items-center gap-2 font-bold text-xl ">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                                    LL
                                </div>
                                <span className="hidden sm:inline text-2xl">LoanLink</span>
                            </Link>
                        </div>
                    </div>

                    {/* Middle Content */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/*  Menu Items */}
                        <nav>
                            {/* Common Menu */}
                            <MenuItem
                                icon={FaHome}
                                label='Dashboard'
                                address='/dashboard'
                            />

                            {role === 'customer' && <CustomerMenu></CustomerMenu>}
                            {role === 'admin' && <AdminMenu></AdminMenu>}
                            
                        </nav>
                    </div>

                    {/* Bottom Content */}
                    <div>
                        <hr />

                        <MenuItem
                            icon={FcSettings}
                            label='Profile'
                            address='/dashboard/profile'
                        />
                        <button
                            onClick={handleLogout}
                            className='flex cursor-pointer w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                        >
                            <GrLogout className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;