import Main from "../Layout/Main"
import Appointment from "../Pages/Appointment/Appointment"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"

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
                element:<Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>,
            }
        ]
    },
   
])