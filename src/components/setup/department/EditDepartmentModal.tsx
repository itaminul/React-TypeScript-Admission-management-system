import { Button, Form, Input, Modal, Select } from "antd";
const { Option } = Select;
interface EditModalProps {
  open: boolean;
  onClose: () => void;
  selectedRowId: number | null;
}
function EditDepartmentModal ({open, onClose, selectedRowId}: EditModalProps) {
   const [form] = Form.useForm();
  const onFinish = () => {

  }
  return (
    <>
      <Modal
        open={open}
        onCancel={onClose}
        footer={[
          <>
            <Button onClick={onClose}>Cancel</Button>
          </>,
        ]}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
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
            <Input placeholder="Department Descriptoin" />
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
          <Form.Item>
            <Button
              style={{ float: "left" }}
              key="submit"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditDepartmentModal;