
import { Form, Input, Modal, Select } from "antd";
const { Option } = Select;
import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import { useGetDepartmentByIdQuery } from "../../../redux/features/service/departmentApiService";
import { useGetOrganizationDataQuery } from "../../../redux/features/service/organizationApiService";
const { Option } = Select;
interface EditModalProps {
  open: boolean;
  onClose: () => void;
  selectedRowId: number;
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
=======

function EditDepartmentModal({ open, onClose, selectedRowId }: EditModalProps) {
  const [form] = Form.useForm();
  const { data: organizations} = useGetOrganizationDataQuery();
  const { data: departmentInfoById, isLoading } =
    useGetDepartmentByIdQuery(selectedRowId);
  useEffect(() => {
    if (departmentInfoById) {
      form.setFieldsValue(departmentInfoById);
    }
  }, [departmentInfoById, form]);

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    // Handle form submission
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (Array.isArray(departmentInfoById) && departmentInfoById.length === 0) {
    return <div>No data available for the selected department.</div>;
  }

  console.log("organizations", organizations);
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="departmentName"
          rules={[{ required: true, message: "Please enter department name!" }]}
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
          name="orgId"
          label="Organization"
          rules={[{ required: true, message: "Please select organization!" }]}
        >
          <Select placeholder="Select organization">
            {organizations?.map((org) => (
              <Option key={org.id} value={org.id}>
                {org.orgName}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditDepartmentModal;
