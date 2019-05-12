import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Profil from './Profil';
import Contact from './Kontak';
import Home from './Home';
import Portofolio from './Portofolio';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        
        return (
            <BrowserRouter>
            <Layout className="layout" style={{ minHeight: '1000vh' }}>
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
     
        <Menu.Item key="1">
            Home
            <Link to="/home"></Link>
        </Menu.Item>
        <Menu.Item key="2">
            Contact Me
            <Link to="/contact"></Link>
        </Menu.Item>
        <Menu.Item key="3">
            Profil
            <Link to="/profil"></Link>
            </Menu.Item>
        <Menu.Item key="4">
            Portofolio
            <Link to="/portofolio"></Link>
            </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        
      </Breadcrumb>
      <div style={{ background: '#0E0B16', minHeight: 500 }}>
      <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/profil" component={Profil}/>
                <Route path="/portofolio" component={Portofolio}/>
       </Switch>
       </div>
    </Content>
  </Layout>
  </BrowserRouter>
        );
    }
}
export default Navbar;