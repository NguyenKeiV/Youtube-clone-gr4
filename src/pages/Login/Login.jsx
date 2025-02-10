import { Button, Form, Input } from "antd";
import "./Login.scss";

function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Sign in</h2>
      <Form labelCol={{ span: 24 }} className="login-form">
        <Form.Item rules={[{ required: true, message: "Please enter email" }]}>
          <Input placeholder="Email" className="login-input" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password placeholder="Password" className="login-input" />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="login-button">
          Login
        </Button>

        <p>Forgot password ?</p>
      </Form>
    </div>
  );
}

export default Login;
