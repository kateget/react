import { Layout } from "antd";
import Header from "../components/Header";
import Router from "../layouts";

const { Footer, Content } = Layout;

const Layouts = () => {
    return (
        <>
            <Layout>
                <Header></Header>
                <Content>
                    <Router></Router>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};

export default Layouts;
