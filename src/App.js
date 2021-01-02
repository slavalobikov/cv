import './App.css';
import React from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    RocketOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import About from "./components/About";
import Skills from "./components/skills/Skills";


const { Header, Sider, Content } = Layout;

class App extends React.Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });


    };

    render() {
        return (
            <Layout className={'app'}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to={'/about'}>
                                {!!this.props.english && <span>About me</span>}
                                {!this.props.english && <span>Обо мне</span>}
                                </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<RocketOutlined />}>
                            <Link to={'/skills'}>
                            {!!this.props.english && <span>Skills</span>}
                            {!this.props.english && <span>Умения</span>}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <div className={'lang'}><input className={'lang-input'}
                                                       defaultChecked={this.props.english}
                                                       onChange={() => this.props.isEnglish(!this.props.english)}
                                                       type="checkbox"/><span className={'eng'}>eng</span>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Route path={'/about'} render={() => <About {...this.props} />} />
                        <Route path={'/skills'} render={() => <Skills {...this.props} />} />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
