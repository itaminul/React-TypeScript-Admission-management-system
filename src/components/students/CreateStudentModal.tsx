import Modal from "antd/es/modal/Modal";
import { CreateStudentsModalProps, StudentDataType } from "./StudentsDataType";
import { Button, Col, Form, Input, Row, Select, Steps } from "antd";
import { useState } from "react";
import { useGetReligionDataQuery } from "../../redux/features/service/religionApiService";
const { Step } = Steps;

function CreateStudentModal({
  title,
  open,
  onClose,
}: CreateStudentsModalProps) {
  const [form] = Form.useForm();
  const { data: religions } = useGetReligionDataQuery();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const handleNext = async () => {
    try {
      const values = await form.validateFields();
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values: StudentDataType) => {};
  return (
    <>
      <Modal title={title} open={open} onCancel={onClose} width={1200}>
        <div>
          <Steps current={currentStep}>
            <Step title="Personal Information" />
            <Step title="Address" />
            <Step title="Education" />
            <Step title="Attachment" />
          </Steps>
          <Form
            form={form}
            name="multi-step-form"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            layout="vertical"
          >
            {currentStep === 0 && (
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: false,
                        message: "Please enter First name!",
                      },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    label="Middle Name"
                    name="middleName"
                    rules={[
                      { required: true, message: "Please enter middle name!" },
                    ]}
                  >
                    <Input placeholder="Middle Name" />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      { required: true, message: "Please enter last name!" },
                    ]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>

                  <Form.Item
                    name="mobileOne"
                    label="Mobile"
                    rules={[
                      {
                        required: true,
                        message: "Please select mobile!",
                      },
                    ]}
                  >
                    <Input placeholder="Mobile" />
                  </Form.Item>

                  <Form.Item
                    name="bloodGroupId"
                    label="Blood Group"
                    rules={[
                      {
                        required: true,
                        message: "Please select Blood Group!",
                      },
                    ]}
                  >
                    <Input placeholder="Blood Group" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="National ID"
                    name="nationalId"
                    rules={[
                      {
                        required: false,
                        message: "Please enter National ID!",
                      },
                    ]}
                  >
                    <Input placeholder="National ID" />
                  </Form.Item>
                  <Form.Item
                    label="Date Of Birth"
                    name="dateOfBirts"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Date Of Birth!",
                      },
                    ]}
                  >
                    <Input placeholder="Date Of Birth" />
                  </Form.Item>
                  <Form.Item
                    label="Gender"
                    name="genderId"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Gender!",
                      },
                    ]}
                  >
                    <Input placeholder="Gender" />
                  </Form.Item>

                  <Form.Item
                    name="religionId"
                    label="Religion"
                    rules={[
                      {
                        required: true,
                        message: "Please select Religion!",
                      },
                    ]}
                  >
                    <Select placeholder="Select organization">
                      {religions?.map((religion) => (
                        <option key={religion.id} value={religion.id}>
                          {religion.religionName}
                        </option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="maritialStatus"
                    label="Maritial Status"
                    rules={[
                      {
                        required: true,
                        message: "Please select Maritial Status!",
                      },
                    ]}
                  >
                    <Input placeholder="Maritial Status" />
                  </Form.Item>
                </Col>
              </Row>
            )}
            {currentStep === 1 && (
              <Form.Item
                label="Field 2"
                name="field2"
                rules={[{ required: true, message: "Please input Field 2!" }]}
              >
                <Input />
              </Form.Item>
            )}
            {currentStep === 2 && (
              <Form.Item
                label="Field 3"
                name="field3"
                rules={[{ required: true, message: "Please input Field 3!" }]}
              >
                <Input />
              </Form.Item>
            )}
            <div style={{ textAlign: "right" }}>
              {currentStep > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
                  Previous
                </Button>
              )}
              {currentStep < 2 && (
                <Button type="primary" onClick={handleNext}>
                  Next
                </Button>
              )}
              {currentStep === 2 && (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
}

export default CreateStudentModal;
