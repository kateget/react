import { Layout } from "antd";
import React, { Suspense } from "react";
import Header from "../components/Header";
// import { Route, Routes } from "react-router-dom";
import RouterDom from "../routers";
// import Home from "../page/Home";

const { Footer, Content } = Layout;

const Layouts = () => {
    return (
        <>
            <Layout>
                <Header></Header>
                <Content>
                    <Suspense>
                        <RouterDom />
                    </Suspense>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};

export default Layouts;
