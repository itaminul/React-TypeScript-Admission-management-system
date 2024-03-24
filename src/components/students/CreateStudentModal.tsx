import Modal from "antd/es/modal/Modal";
import { CreateStudentsModalProps, StudentDataType } from "./StudentsDataType";
import { Col, Form, Input, Row, Select } from "antd";

function CreateStudentModal({title, open, onClose}: CreateStudentsModalProps) {
  const [form] = Form.useForm();
  const onFinish = (values: StudentDataType) => {

  }
  return (
    <>
      <Modal title={title} open={open} onCancel={onClose} width={1200}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="First Name"
                name="departmentName"
                rules={[
                  { required: false, message: "Please enter department name!" },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                label="Middle Name"
                name="departmentDes"
                rules={[
                  { required: true, message: "Please enter middle name!" },
                ]}
              >
                <Input placeholder="Middle Name" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="departmentDes"
                rules={[{ required: true, message: "Please enter last name!" }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item
                name="orgId"
                label="Organization"
                rules={[
                  { required: true, message: "Please select organization!" },
                ]}
              >
                <Select placeholder="Select organization"></Select>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12} style={{ padding: "0px 8px" }}>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Name"
                name="departmentName"
                rules={[
                  { required: true, message: "Please enter department name!" },
                ]}
              >
                <Input placeholder="Department Name" />
              </Form.Item>

              <Form.Item
                label="Department Description"
                name="departmentDes"
                rules={[{ required: false }]}
              >
                <Input placeholder="Department Description" />
              </Form.Item>
              <Form.Item
                label="Serial No"
                name="serialNo"
                rules={[{ required: false }]}
              >
                <Input placeholder="Serial No" />
              </Form.Item>

              <Form.Item
                name="orgId"
                label="Organization"
                rules={[
                  { required: true, message: "Please select organization!" },
                ]}
              >
                <Select placeholder="Select organization"></Select>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default CreateStudentModal;
