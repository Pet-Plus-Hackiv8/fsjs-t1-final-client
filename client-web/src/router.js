import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>
    }
])
export default router