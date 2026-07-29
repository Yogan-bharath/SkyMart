import { createBrowserRouter } from 'react-router'
import AuthLayOut from '../Layouts/AuthLayOut'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../Layouts/MainLayout'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import AboutPage from '../pages/AboutPage'

export const router = createBrowserRouter([
    {
        path:"",
        element:<AuthLayOut/>,
        children:[
            {
                index:true,
                element:<LoginPage/>
            },{
                path:"/register",
                element:<RegisterPage/>
            }
        ]
    },{
        path:"/home",
        element:<MainLayout/>,
        children:[
            {
                 index:true,
                 element:<HomePage/>
            },{
                path:"products",
                element:<ProductsPage/>
            },{
                path:"about",
                element:<AboutPage/>
            }
        ]
    }
])