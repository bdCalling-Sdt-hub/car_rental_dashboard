import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import img from '../../assets/images/login.png'
import { useLoginAdminMutation } from "../../redux/Api/userApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/features/auth/authSlice";

const Login = () => {
    const [loginAdmin] = useLoginAdminMutation()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        loginAdmin(values).unwrap()
            .then((payload) => {
                if(payload?.success){
                    // localStorage.setItem('token' , JSON.stringify(payload?.data?.accessToken))
                    dispatch(setToken(payload?.data?.accessToken))
                    toast.success(payload?.message);
                    return navigate('/')
                }
            }).catch((error) => {
                toast.error(error?.data?.message);
            })
    };

    return (
        <div className="grid grid-cols-1 bg-black items-center min-h-[100vh]">
            {/* <div className="bg-[#C0D4FB] h-full flex items-center justify-center">
                <img src={img} className="" alt="" />
            </div> */}
            <div className=" flex justify-center items-center">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        width: "630px",
                        background: "white",
                        borderRadius: "12px",
                        padding: "90px 57px",
                    }}
                    onFinish={onFinish}
                >
                    <h1
                        style={{ fontSize: "32px", color: "#38393E", textAlign: "center" }}
                    >
                        Login to Account
                    </h1>

                    <p
                        style={{ color: "#7D7E8A", textAlign: "center" }}
                    >
                        Please enter your email and password to continue
                    </p>
                    <div style={{ marginBottom: "24px" }}>
                        <label
                            htmlFor="email"
                            style={{ display: "block", marginBottom: "5px" }}
                        >
                            {" "}
                            Email address:{" "}
                        </label>
                        <Form.Item
                            style={{ marginBottom: 0 }}
                            name="email"
                            id="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter your email address"
                                type="email"
                                style={{
                                    border: "1px solid #E0E4EC",
                                    height: "52px",
                                    background: "white",
                                    borderRadius: "8px",
                                    outline: "none",
                                }}
                            />
                        </Form.Item>
                    </div>

                    <div style={{ marginBottom: "24px" }}>
                        <label
                            style={{ display: "block", marginBottom: "5px" }}
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <Form.Item
                            style={{ marginBottom: 0 }}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input.Password
                                type="password"
                                placeholder="Enter your password"
                                style={{
                                    border: "1px solid #E0E4EC",
                                    height: "52px",
                                    background: "white",
                                    borderRadius: "8px",
                                    outline: "none",
                                }}
                            />
                        </Form.Item>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{ color: "#6A6D7C" }}>Remember me</Checkbox>
                        </Form.Item>
                        <Link
                            className="login-form-forgot "
                            style={{ color: "#3475F1" }}
                            to="/auth/forgot-password"
                        >
                            Forgot Password
                        </Link>
                    </div>

                    <Form.Item style={{ marginBottom: 0 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button py-5"
                            block
                            style={{
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "#3475F1",
                                marginTop: "56px",
                            }}
                        >
                            <Link
                                className="login-form-forgot "
                                style={{ color: "white" }}
                                to="/"
                            >
                                Sign In
                            </Link>
                            {/*Sign In*/}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;