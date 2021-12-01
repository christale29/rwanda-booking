import React, { useState } from "react";
import "./dashstyle.css"
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom"
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Dashlayout=({children})=>{
    const[collapsed,setcollapsed]=useState(false)
    const toggle=()=>{
        setcollapsed(!collapsed)
    }
    return(
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
             <Link to="/dash/newtour"> create tour</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/dash/alltour" >manage All tour</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    )
}
export default Dashlayout;