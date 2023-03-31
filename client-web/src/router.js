import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./views/Dashboard";
import PetDetail from "./views/PetDetail";
import Posts from "./views/Posts";
import VetDetail from "./views/VetDetail";
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
            },
            {
                path: "veterinarians/:id",
                element: <VetDetail />
            },
            {
                path: "pet/:id",
                element: <PetDetail />
            }

        ]
    },
    {
        path: "/login",
        element: <>Login</>
    }
])
export default router