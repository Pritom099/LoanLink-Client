import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import Banner2 from "../components/Banner/Banner2";
import Profile from "../pages/Dashboard/Common/Profile";
import Dashboard from "../pages/Dashboard/Common/Dashboard";
import MyLoans from "../pages/Dashboard/Customer/MyLoans";


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
                path: '/how-works',
                element: <Banner2></Banner2>,
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
                path: 'my-loans',
                element: <MyLoans></MyLoans>
            },
        ],
    }

])