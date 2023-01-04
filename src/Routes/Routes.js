import Main from "../Layout/Main"
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
                path: '/login',
                element: <Login></Login>,
            }
        ]
    },
   
])