import { Button, Form, Input, Modal, Select, message } from "antd";
import {
  DepartmentDataType,
  CreateDepartmentModalProps,
} from "./DepartmentDataType";
import { useCreateDepartmentSetupMutation } from "../../../redux/features/service/departmentApiService";
import { useGetOrganizationDataQuery } from "../../../redux/features/service/organizationApiService";
const { Option } = Select;
function CreatDepartmentModal({ open, onClose }: CreateDepartmentModalProps) {
  const { data: organizations } = useGetOrganizationDataQuery();
  const [createDepartment] = useCreateDepartmentSetupMutation();
  const [form] = Form.useForm();
  const onFinish = async (value: DepartmentDataType) => {
    try {
      const departmentFormat = {
        departmentName: value.departmentName,
        departmentDes: value.departmentName,
        orgId: Number(value.orgId),
      };
      const response = await createDepartment(departmentFormat);
      if (response != null) {
        setTimeout(() => {
          void message.success("Created successfully");
          onClose();
          window.location.reload();
        }, 200);
      }
      form.resetFields();
    } catch (error) {
      console.error("Error create data", error);
    }
  };
  return (
    <>
      <Modal
        title="Create Department"
        open={open}
        onCancel={onClose}
        footer={[
          <>
            <Button onClick={onClose}>Cancel</Button>,
            <Button
              key="submit"
              type="primary"
              htmlType="submit"
              onClick={form.submit}
            >
              Submit
            </Button>
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
            <Select placeholder="Select organization">
              {organizations?.map((org) => (
                <Option key={org.id} value={org.id}>
                  {org.orgName}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreatDepartmentModal;
