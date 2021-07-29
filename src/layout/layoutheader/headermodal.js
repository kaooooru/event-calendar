import { LockOutlined, MailOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';
import { Modal, Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, loginGoogleUser, loginUser, updateModalStatus } from '../../redux/auth/actions';


const HeaderModal = () => {
    const modalType = useSelector(state => state.authReducer.modalType);
    const isVisible = useSelector(state => state.authReducer.isVisible);
    const isSignUpError = useSelector(state => state.authReducer.isSignUpError);
    const isLoginError = useSelector(state => state.authReducer.isLoginError);
    const isGoogleLoginError = useSelector(state => state.authReducer.isGoogleLoginError);

    const dispatch = useDispatch();

    const formRef = useRef();

    const handleCancel = () => {
        dispatch(updateModalStatus({modalType: "", isVisible: false}));
        formRef.current.value = "";
    };

    const onLoginFinish = (values) => {
        dispatch(loginUser(values.email, values.password));
        if (!isLoginError) {
            handleCancel();
        }
    };

    const onGoogleLogin = () => {
        dispatch(loginGoogleUser());
        if (!isGoogleLoginError) {
            handleCancel();
        }
    };

    const onSignupFinish = (values) => {
        dispatch(signUpUser(values.email, values.password, values.userName));
        console.log(typeof values.email)
        if (!isSignUpError) {
            handleCancel();
        }
    };

    // useEffect(
    //     () => {dispatch(handleCancel())},
    //     [isSignUpError, isLoginError, isGoogleLoginError]
    // );

    const loginForm = () => {
        return (
            <Form
                name="login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onLoginFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined/>} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            mesage: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>  
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                    <br/>
                    <p>OR</p>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={onGoogleLogin}>
                        <GoogleOutlined/> Login with Google
                    </Button>
                </Form.Item>
            </Form>
        );
    };

    const signUpForm = () => {
        return (
            <Form
                name="signup"
                className="signup-form"
                onFinish={onSignupFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined/>} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            mesage: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item
                    name="confirm-password"
                    rules={[
                        {
                            required: true,
                            mesage: 'Please confirm your Password!',
                            
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Confirm Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="signup-form-button">
                        Signup
                    </Button>
                </Form.Item>
            </Form>
        );
    };

    let title = "";
    let authForm = "";

    if (modalType === "login") {
        title = "Login";
        authForm = loginForm();
    } else if (modalType === "signup") {
        title = "Sign Up";
        authForm = signUpForm();
    }

    return (
        <Modal
            title={title}
            visible={isVisible}
            onCancel={handleCancel}
            footer={null}
            centered={true}
        >
            {authForm}
        </Modal>
    );
};

export default HeaderModal;