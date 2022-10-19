/*
 * @Author: kateget 1397945742@qq.com
 * @Date: 2022-10-07 14:24:49
 * @LastEditors: kateget 1397945742@qq.com
 * @LastEditTime: 2022-10-19 22:36:30
 * @FilePath: \myProject\react\react-antd\src\routers\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
            path: "/home",
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
