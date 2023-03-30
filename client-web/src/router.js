import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: "",
                element:<>hello</>
            },
            {
                path: "posts",
                element: <>posts</>
            },
            {
                path: "veterinarians",
                element: <>veterinarians</>
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
        path:"/login",
        element: <>Login</>
    }
])
export default router