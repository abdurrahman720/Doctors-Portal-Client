import DashboardLayout from "../Layout/DashboardLayout"
import Main from "../Layout/Main"
import Appointment from "../Pages/Appointment/Appointment"
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers"

import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors"
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/SignUp/SignUp"
import AdminRoute from "./AdminRoute"
import PrivateRoute from "./PrivateRoute"

const { createBrowserRouter } = require("react-router-dom")

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/appointment',
                element:<PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
          
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/add-doctors',
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRoute>
                    <ManageDoctors></ManageDoctors>
                </AdminRoute>
            }
        ]
    }
])