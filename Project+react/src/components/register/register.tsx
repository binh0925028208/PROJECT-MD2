import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import UserService from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { notifyError } from "../../common/toastify";
import { ToastContainer } from "react-toastify";

type FieldType = {
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
};
interface props {
  btnLogin: () => void;
}
const Register = ({ btnLogin }: props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    address: "",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/project-shop-gundam.appspot.com/o/img%20user%2Favatar-trang-4.jpg?alt=media&token=da8f7c53-e039-4a0c-b30b-ddbf7084adf9",
    role: 1,
    status: 1,
    phone: "",
    cart: [],
  });

  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const userService = new UserService();
      const response = await userService.register(formData);
      if (response.status == 201) {
        navigate("/login", { state: true });
        btnLogin();
      }
    } catch (error: any) {
      notifyError(error.response.data);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const handleLogin = () => {
    btnLogin();
  };
  const handleChangeFormData = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async (): Promise<void> => {};
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <ToastContainer />
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeFormData}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          name="password"
          value={formData.password}
          onChange={handleChangeFormData}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input
          name="address"
          value={formData.address}
          onChange={handleChangeFormData}
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your phoneNumber!" }]}
      >
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChangeFormData}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="btn_register">
        <Button type="primary" htmlType="submit" onClick={handleRegister}>
          Submit
        </Button>
        <Button
          htmlType="submit"
          onClick={handleLogin}
          className="btn_login_in_register"
          style={{ marginLeft: 30, backgroundColor: "#fe635e", color: "white" }}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
// import React, { useState } from "react";
// import type { CascaderProps } from "antd";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import {
//   AutoComplete,
//   Button,
//   Cascader,
//   Checkbox,
//   Col,
//   Form,
//   Input,
//   InputNumber,
//   Row,
//   Select,
// } from "antd";
// import { toastSuccess, toastError } from "../../utils/toast";

// const { Option } = Select;

// interface DataNodeType {
//   value: string;
//   label: string;
//   children?: DataNodeType[];
// }

// const residences: CascaderProps<DataNodeType>["options"] = [
//   {
//     value: "zhejiang",
//     label: "Zhejiang",
//     children: [
//       {
//         value: "hangzhou",
//         label: "Hangzhou",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "jiangsu",
//     label: "Jiangsu",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 8 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 16 },
//   },
// };

// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
// };
// interface props {
//   btnLogin: () => void;
// }

// const Register = ({ btnLogin }: props) => {
//   const [email, setEmail] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [pass, setPass] = useState<string>("");
//   const [form] = Form.useForm();

//   const handleRegister = async (): Promise<void> => {
//     try {
//       const emailExists = await axios.get(
//         `http://localhost:3006/User/?email=${email}`
//       );
//       if (emailExists.data.length > 0) {
//         toastError("Email đã tồn tại");
//       } else {
//         if (email !== "" && phone.length >= 10 && pass.length >= 7) {
//           await axios
//             .post("http://localhost:3006/User", {
//               email: email,
//               password: pass,
//               phone: phone,
//               status: true,
//             })
//             .then(() => {
//               btnLogin();
//               toastSuccess("Đã đăng kí thành công");
//             })
//             .catch(() => {
//               toastError("Vui lòng điền đầy đủ thông tin");
//             });
//         } else {
//           toastError("Vui lòng điền đầy đủ thông tin");
//         }
//       }
//     } catch (error) {
//       toastError("Đã xảy ra lỗi");
//     }
//   };

//   const onFinish = (values: any) => {
//     console.log("Received values of form: ", values);
//   };

//   const suffixSelector = (
//     <Form.Item name="suffix" noStyle>
//       <Select style={{ width: 70 }}>
//         <Option value="USD">$</Option>
//         <Option value="CNY">¥</Option>
//       </Select>
//     </Form.Item>
//   );

//   const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

//   const onWebsiteChange = (value: string) => {
//     if (!value) {
//       setAutoCompleteResult([]);
//     } else {
//       setAutoCompleteResult(
//         [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
//       );
//     }
//   };

//   const websiteOptions = autoCompleteResult.map((website) => ({
//     label: website,
//     value: website,
//   }));

//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       initialValues={{
//         prefix: "89",
//       }}
//       style={{ maxWidth: 600 }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: "email",
//             message: "The input is not valid E-mail!",
//           },
//           {
//             required: true,
//             message: "Please input your E-mail!",
//           },
//         ]}
//       >
//         <Input value={email} onChange={(e) => setEmail(e.target.value)} />
//       </Form.Item>
//       <Form.Item
//         name="phone"
//         label="Phone:"
//         rules={[{ required: true, message: "Please input your phone number!" }]}
//       >
//         <Input
//           style={{ width: "100%" }}
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!",
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password
//           value={pass}
//           onChange={(e) => setPass(e.target.value)}
//         />
//       </Form.Item>
//       <Form.Item
//         name="confirm"
//         label="Confirm Pass"
//         dependencies={["password"]}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: "Please confirm your password!",
//           },
//           ({ getFieldValue }) => ({
//             validator(_, value) {
//               if (!value || getFieldValue("password") === value) {
//                 return Promise.resolve();
//               }
//               return Promise.reject(
//                 new Error("The new password that you entered do not match!")
//               );
//             },
//           }),
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>
//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit" onClick={handleRegister}>
//           Create Account
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Register;
