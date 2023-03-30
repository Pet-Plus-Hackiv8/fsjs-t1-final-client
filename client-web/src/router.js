import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./views/Dashboard";
import Posts from "./views/Posts";
import Veterinarians from "./views/Veterinarian";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "",
                element: < Dashboard />
            },
            {
                path: "posts",
                element: <Posts />
            },
            {
                path: "veterinarians",
                element: <Veterinarians />
            },
            {
                path: "histories",
                element: <>histories</>
            },
            {
                path: "profile",
                element: <>profile</>
            }

        ]
    },
    {
        path: "/login",
        element: <>Login</>
    }
])
export default router