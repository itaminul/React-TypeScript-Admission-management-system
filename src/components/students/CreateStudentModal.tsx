import Modal from "antd/es/modal/Modal";
import { CreateStudentsModalProps, StudentDataType } from "./StudentsDataType";
import {
  Button,
  Col,
  Form,
  Input,
  RadioChangeEvent,
  Row,
  Select,
  Steps,
} from "antd";
import { useEffect, useState } from "react";
import { useGetReligionDataQuery } from "../../redux/features/service/religionApiService";
import { useGetBloodGroupDataQuery } from "../../redux/features/service/bloodGroups";
const { Step } = Steps;
import { DatePicker, Radio, Typography } from "antd";
import type { DatePickerProps } from "antd";
import moment, { Moment } from "moment";
import { useGetDivisionDataQuery } from "../../redux/features/service/division";
import { useGetDistrictByDivisionIdMutation, useGetDistrictDataQuery, useGetDistrictsByDivisionQuery } from "../../redux/features/service/districtApiService";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
const { Title } = Typography;
import { setFirstDropdownValue, setSecondDropdownOptions } from "../../redux/features/dropdownSlice";
function CreateStudentModal({
  title,
  open,
  onClose,
}: CreateStudentsModalProps) {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const { data: religions } = useGetReligionDataQuery();
  const { data: bloodGroups } = useGetBloodGroupDataQuery();
  const { data: divisions } = useGetDivisionDataQuery();
  const { data: districts } = useGetDistrictDataQuery();
 
  import { setFirstDropdownOptions, setSecondDropdownOptions } from "../../redux/features/dropdownSlice";

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
  const onChangeDatePicker: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    console.log(date, dateString);
  };
  const disabledFutureDate = (current: Moment | null): boolean => {
    return current ? current > moment().endOf("day") : false;
  };
  const [maritialStatusValue, setMaritialStatusValue] = useState();
  const onChangeMaritialStatus = (e: RadioChangeEvent) => {
    setMaritialStatusValue(e.target.value);
  };
   const [districtsdata, setDistricts] = useState([]);


  const { division, selectedDivision } = useSelector(
    (state: any) => state.divisionDistrict
  );

  const { data: district = [], isLoading } = useGetDistrictsByDivisionQuery(
    selectedDivision ?? ""
  );

    useEffect(() => {
      dispatch(fetchDivisions());
    }, [dispatch]);

    const handleDivisionChange = (value: any) => {
      dispatch(selectedDivision(value));
    };

console.log("district", district);
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
                      { required: false, message: "Please enter last name!" },
                    ]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>

                  <Form.Item
                    name="mobileOne"
                    label="Mobile"
                    rules={[
                      {
                        required: false,
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
                        required: false,
                        message: "Please select Blood Group!",
                      },
                    ]}
                  >
                    <Select placeholder="Select Blood Group">
                      {bloodGroups?.map((bloodGroup) => (
                        <option key={bloodGroup.id} value={bloodGroup.id}>
                          {bloodGroup.bloodGroupName}
                        </option>
                      ))}
                    </Select>
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
                        required: false,
                        message: "Please enter Date Of Birth!",
                      },
                    ]}
                  >
                    <DatePicker
                      style={{ width: "100%" }}
                      onChange={onChangeDatePicker}
                      format="YYYY-MM-DD"
                      disabledDate={disabledFutureDate}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Gender"
                    name="genderId"
                    rules={[
                      {
                        required: false,
                        message: "Please enter Gender!",
                      },
                    ]}
                  >
                    <Select placeholder="Gender">
                      <option value="">--select--</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="religionId"
                    label="Religion"
                    rules={[
                      {
                        required: false,
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
                        required: false,
                        message: "Please select Maritial Status!",
                      },
                    ]}
                  >
                    <Radio.Group
                      onChange={onChangeMaritialStatus}
                      value={maritialStatusValue}
                    >
                      <Radio value={1}>Mareied</Radio>
                      <Radio value={2}>Unmareied</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            )}
            {currentStep === 1 && (
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={12}>
                  <Title level={4}>Present Address</Title>
                  <Form.Item
                    name="divisionId"
                    label="Division"
                    rules={[
                      {
                        required: true,
                        message: "Please select Division!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select division"
                      onChange={handleDivisionChange}
                    >
                      {divisions?.map((division) => (
                        <option key={division.id} value={division.id}>
                          {division.divisionName}
                        </option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="dristrictId"
                    label="District"
                    rules={[
                      {
                        required: true,
                        message: "Please select Division!",
                      },
                    ]}
                  >
                    <Select placeholder="Select division">
                      {districts?.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.districtName}
                        </option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="dristrictId"
                    label="Thana"
                    rules={[
                      {
                        required: true,
                        message: "Please select Thana!",
                      },
                    ]}
                  >
                    <Select placeholder="Select division">
                      {districts?.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.districtName}
                        </option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Basha"
                    name="Basha"
                    rules={[
                      {
                        required: false,
                        message: "Please enter National ID!",
                      },
                    ]}
                  >
                    <Input placeholder="National ID" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Title level={4}>Permanent Address</Title>
                  <Form.Item
                    name="divisionId"
                    label="Division"
                    rules={[
                      {
                        required: true,
                        message: "Please select Division!",
                      },
                    ]}
                  >
                    <Select placeholder="Select division">
                      {divisions?.map((division) => (
                        <option key={division.id} value={division.id}>
                          {division.divisionName}
                        </option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="dristrictId"
                    label="District"
                    rules={[
                      {
                        required: true,
                        message: "Please select Division!",
                      },
                    ]}
                  >
                    <Select placeholder="Select division">
                      {districts?.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.districtName}
                        </option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="dristrictId"
                    label="Thana"
                    rules={[
                      {
                        required: true,
                        message: "Please select Thana!",
                      },
                    ]}
                  >
                    <Select placeholder="Select division">
                      {districts?.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.districtName}
                        </option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="dristrictId"
                    label="Thana"
                    rules={[
                      {
                        required: true,
                        message: "Please select Thana!",
                      },
                    ]}
                  >
                    <Select placeholder="Select division">
                      {districts?.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.districtName}
                        </option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Basha"
                    name="Basha"
                    rules={[
                      {
                        required: false,
                        message: "Please enter National ID!",
                      },
                    ]}
                  >
                    <Input placeholder="National ID" />
                  </Form.Item>
                </Col>
              </Row>
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
function fetchDivisions(): any {
  throw new Error("Function not implemented.");
}

