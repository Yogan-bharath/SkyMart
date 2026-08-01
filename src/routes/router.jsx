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
        element:<MainLayout/>,
        children:[
            {
                 path:"home",
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