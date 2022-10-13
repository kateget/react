import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// import Home from "../page/Home";
const Home = lazy(() => import("../page/Home"));
const Detail = lazy(() => import("../page/Detail"));
const Nofound = lazy(() => import("../page/404"));

const RouterDom = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/detail",
            element: <Detail />,
            children: [],
        },
        {
            path: "*",
            element: <Nofound />,
        },
    ]);
    return element;
};

export default RouterDom;
