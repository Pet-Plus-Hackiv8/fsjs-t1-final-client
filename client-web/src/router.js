import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import OwnerInfo from "./components/OwnerInfo";
import ClinicProfile from "./views/ClinicProfile";
import CreateInvoice from "./views/CreateInvoice";
import Dashboard from "./views/Dashboard";
import History from "./views/History";
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
                path: "/",
                element: < Dashboard />
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path: "/veterinarians",
                element: <Veterinarians />
            },
            {
                path: "/histories",
                element: <History />
            },
            {
                path: "/profile",
                element: <ClinicProfile />
            },
            {
                path: "/veterinarians/:id",
                element: <VetDetail />
            },
            {
                path: "/pet",
                element: <PetDetail />,
                children: [
                    {
                        path: "owner/:id",
                        element: <OwnerInfo />
                    },
                    {
                        path: "history/:id",
                        element: <>Appointment history</>
                    }
                ]
            },
            {
                path: "/invoice/:id",
                element: <CreateInvoice />
            }

        ]
    },
    {
        path: "/login",
        element: <>Login</>
    }
])
export default router