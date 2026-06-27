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
import PaymentSuccess from "../components/Form/PaymentSuccess";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><ApplyLoan></ApplyLoan></PrivateRoute>,
            },
            {
                path: 'browse-loans',
                element: <BrowseLoans></BrowseLoans>
            },
            {
                path: '/loan-details/:id',
                element: <LoanDetail></LoanDetail>
            },
            {
                path: '/payment-success',
                element: <PaymentSuccess></PaymentSuccess>
            },
        ],
    },
    {
        path: '/dashboard',
        element: (<PrivateRoute>
            <DashboardLayout></DashboardLayout>,
        </PrivateRoute>),
        children: [
            {
                index: true,
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'profile',
                element: (
                    <PrivateRoute><Profile></Profile></PrivateRoute>
                ),
            },
            {
                path: 'loan-applications',
                element: <PrivateRoute><LoanApply></LoanApply></PrivateRoute>
            },
            {
                path: 'my-loans',
                element:<PrivateRoute> <MyLoans></MyLoans></PrivateRoute>
            },
            {
                path: 'manage-users',
                element: <PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivateRoute>
            },
            {
                path: 'manage-requests',
                element: <PrivateRoute><AdminRoute><ManageRequests></ManageRequests></AdminRoute></PrivateRoute>
            },
        ],
    }

])