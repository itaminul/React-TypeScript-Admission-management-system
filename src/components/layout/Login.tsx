import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import './login.scss'
import LoginDataType from "./LoginType";
import { useNavigate} from 'react-router-dom'

function Login() {

const navigate = useNavigate();
const onFinish = (values: LoginDataType) => {
  const usernmae = values.username;
  const password = values.password;

  if(usernmae === 'admin' && password == '123456'){
    console.log("Success:", values);
    return navigate('/dashboard')
  }else{

  }


};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};


  return(
    <>
    <div className="login-container">
    <Row justify="center" >
        <Col>
      <Form
       name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
        </Form.Item>
      </Form>
      </Col>
      </Row>
    </div>
  </>
  )
};

export default Login;

