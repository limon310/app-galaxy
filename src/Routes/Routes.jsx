import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import Banner from "../Components/Banner/Banner";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home
            },
            // {
            //     paht: "home",
            //     Component: Banner
            // },
            {
                path: "/apps",
                Component: Apps,
            },
            {
                path: "/install",
                Component: Installation,
            }
        ]

    }
])

export default router;