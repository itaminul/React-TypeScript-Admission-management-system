import { Button, Form, Input, Modal, Select } from "antd";
import { DepartmentDataType } from "./DepartmentDataType";
const { Option } = Select;
interface CreateModalProps {
  open: boolean;
  onClose: () => void;
}

function CreatDepartmentModal({ open, onClose }: CreateModalProps) {

  const onFinish = (value: DepartmentDataType) => {
    console.log("department value", value);
  }
  return (
    <>
      <Modal
        open={open}
        onCancel={onClose}
        footer={[
          <>
            <Button onClick={onClose}>Cancel</Button>
            <Button key="submit"  type="primary" htmlType="submit">
              Submit
            </Button>
          </>,
        ]}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="departmentName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Department Name" />
          </Form.Item>

          <Form.Item
            name="orgId"
            label="Organization"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select placeholder="select your gender">
              <Option value="1">Abc</Option>
              <Option value="2">Def</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreatDepartmentModal;