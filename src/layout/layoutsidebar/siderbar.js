import { Layout, Menu, Image } from 'antd';
import {
    CoffeeOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import React from 'react';

const { Sider } = Layout;

const Siderbar = (props) => {
    return (
        <Sider trigger={null} collapsed collapsed={props.collapsed}>
            <Image className="logo" preview={false} src="/img/logo.png"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<CoffeeOutlined />}>
                    Event
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    Create Event
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    Profile
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Siderbar;