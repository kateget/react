import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./layouts";
import "./components/common/common.scss";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Layouts></Layouts>
            </BrowserRouter>
        </div>
    );
}

export default App;
