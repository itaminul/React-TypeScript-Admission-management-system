import { Button, Form, Input, Modal, Select, message } from "antd";
import { DepartmentDataType } from "./DepartmentDataType";
import { useCreateDepartmentSetupMutation } from "../../../redux/features/service/departmentApiService";
const { Option } = Select;
interface CreateModalProps {
  open: boolean;
  onClose: () => void;
}

function CreatDepartmentModal({ open, onClose }: CreateModalProps) {
const [ createDepartment ]  = useCreateDepartmentSetupMutation();
  const [form] = Form.useForm();
  const onFinish = async(value: DepartmentDataType) => {
    try {
      const departmentFormat = {
        departmentName: value.departmentName,
        departmentDes: value.departmentName,
        orgId: Number(value.orgId)
      }
      console.log("department value", departmentFormat);
      const response = await createDepartment(departmentFormat);
      if(response != null) {
        setTimeout(() =>{
          void message.success('Created successfully');
          onClose();
          window.location.reload();
        }, 200)
      }
      form.resetFields();
    } catch (error) {
      console.error("Error create data", error);
    }
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
            rules={[{ required: true,  message: "Please enter department name!"  }]}
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
              style={{ float: 'left' }}
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

export default CreatDepartmentModal;