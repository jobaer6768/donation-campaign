import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
import Details from "../pages/Details";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/donation',
                element: <Donation></Donation>
            },

            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },

            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: () => fetch('../categories.json')
                
            }
        ]
    }
])

export default Routes;