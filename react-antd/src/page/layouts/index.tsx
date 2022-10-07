import {Layout} from 'antd'
import React from 'react';
const { Header,Footer,Content } = Layout

const App =(component)=> {
    return(
        <>
            <Layout>
                <Header></Header>
                <Content>
                    {component}
                </Content>
                <Footer></Footer>
            </Layout>
        </>
    )
}

export default  App;