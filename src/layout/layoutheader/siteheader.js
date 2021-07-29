import { Layout, Button, Row, Col } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateModalStatus } from '../../redux/auth/actions';
import HeaderModal from './headermodal';

const { Header } = Layout;

const SiteHeader = (props) => {
    const dispatch = useDispatch();

    const loginModal = () => {
        dispatch(updateModalStatus({modalType: "login", isVisible: true}))
    };

    const signUpModal = () => {
        dispatch(updateModalStatus({modalType: "signup", isVisible: true}))
    };

    return (
        <Header className="site-layout-background" style={{ padding: 0, width: "100%" }}>
            <Row>
                <Col xs={12} lg={18}>
                    {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: props.toggle,
                    })}
                </Col>
                <Col xs={12} lg={6}>
                    <Button type="primary" onClick={loginModal}>Login</Button>
                    <Button type="primary" onClick={signUpModal}>Signup</Button>
                    <HeaderModal/>
                </Col>
            </Row>
        </Header>
    );
};

export default SiteHeader;
