import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Detail from "../page/Detail";

const BasicRoute = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    </BrowserRouter>
);

export default BasicRoute;
