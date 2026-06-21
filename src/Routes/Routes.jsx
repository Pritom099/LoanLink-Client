import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Dashboard/Common/Profile";
import Dashboard from "../pages/Dashboard/Common/Dashboard";
import LoanApply from "../pages/Dashboard/Customer/LoanApply";
import MyLoans from "../pages/Dashboard/Customer/MyLoans";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import BrowseLoans from "../components/BrowseLoans/BrowseLoans";
import LoanDetail from "../components/BrowseLoans/LoanDetail";
import ApplyLoan from "../components/Form/ApplyLoan";
import ManageRequests from "../pages/Dashboard/Admin/ManageRequests";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/apply-loan',
                element: <ApplyLoan></ApplyLoan>,
            },
            {
                path: 'browse-loans',
                element: <BrowseLoans></BrowseLoans>
            },
            {
                path: '/loan-details/:id',
                element: <LoanDetail></LoanDetail>
            },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true,
                element: <Dashboard></Dashboard>
            },
            {
                path: 'profile',
                element:(
                    <Profile></Profile> 
                ),
            },
            {
                path: 'loan-applications',
                element:<LoanApply></LoanApply>
            },
            {
                path: 'my-loans',
                element: <MyLoans></MyLoans>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manage-requests',
                element: <ManageRequests></ManageRequests>
            },
        ],
    }

])