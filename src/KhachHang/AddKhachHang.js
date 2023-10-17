// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function AddKhachHang() {
//   let navigate = useNavigate();

//   const [user, setUser] = useState({
//     ma: "",
//     ten: "",
//     nguoiTao: "",
//   });

//   const { ma, ten, nguoiTao } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:8080/chuc-vu/add", user);
//     navigate("/homeCV");
//   };

//   return (

//   );
// }

import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Typography, Upload, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddKhachHang = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  return (
    <>
      <Row>
        <Typography.Text strong level={1} style={{ fontSize: "20px" }}>
          Them Nhan Vien
        </Typography.Text>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Form
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}
            style={{
              maxWidth: formLayout === "inline" ? "none" : 600,
            }}
          >
            <Form.Item label="Tên">
              <Input placeholder="Nhập tên" />
            </Form.Item>
            <Form.Item label="SĐT">
              <Input placeholder="Nhập SĐT" />
            </Form.Item>

            <Form.Item label="Ngày tạo">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Giới tính">
              <Input placeholder="Nhập giới tính" />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </div>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default AddKhachHang;
