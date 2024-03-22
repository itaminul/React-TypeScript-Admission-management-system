import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import { useGetDepartmentByIdQuery, useUpdateDepartmentMutation } from "../../../redux/features/service/departmentApiService";
import { useGetOrganizationDataQuery } from "../../../redux/features/service/organizationApiService";
import { DepartmentDataType, EditDepartmentProps } from "./DepartmentDataType";
const { Option } = Select;


function EditDepartmentModal({ open, onClose, selectedRowId }: EditDepartmentProps ) {
  const [form] = Form.useForm();
  const { data: organizations} = useGetOrganizationDataQuery();
  const { data: departmentInfoById, isLoading } =
    useGetDepartmentByIdQuery(selectedRowId);
   const [ updateDepartment ] =  useUpdateDepartmentMutation();
  useEffect(() => {
    if (departmentInfoById) {
      form.setFieldsValue(departmentInfoById);
    }
  }, [departmentInfoById, form]);

  const onFinish = async(value: DepartmentDataType) => {
    try {
       const departmentFormat = {
         departmentName: value.departmentName,
         departmentDes: value.departmentName,
         orgId: Number(value.orgId),
       }
      // const response = await updateDepartment(departmentFormat);
    } catch (error) {
      
    }
    console.log("Received values:", value);
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
    title="Update department"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          htmlType="submit"
          onClick={form.submit}
        >
          Submit
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
      </Form>
    </Modal>
  );
}

export default EditDepartmentModal;
