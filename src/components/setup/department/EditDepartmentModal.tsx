import { Form, Input, Modal, Select } from "antd";
const { Option } = Select;
interface EditModalProps {
  open: boolean;
  onClose: () => void;
  selectedRowId: number | null;
}
function EditDepartmentModal ({open, onClose, selectedRowId}: EditModalProps) {
  const onFinish = () => {
    
  }
  return (
    <>
      <Modal open={open} onCancel={onClose}>
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

export default EditDepartmentModal;