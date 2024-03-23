export interface StudentDataType {
  id: number;
  firstName: string
  middleName: string
  lastName: string
  fullName: string
  phone: string
  mobileOne: string
  mobileTwo: string
  emergencyMobile: string
  officeEmail: string
  personalEmail: string
  studentImage: string
  studentSignature: string
  nationalId: number
  departmentId: number
  designationId: number
  studentType: number
  dateOfBirts: string
  genderId: number
  religionId: number
  bloodGroupId: number
  maritialStatus: boolean
}


export interface CreateStudentsModalProps {
  title: string,
  open: boolean;
  onClose: () => void
}

export interface EditStudentsProps extends CreateStudentsModalProps {
  selectedId: number;
  data: StudentDataType
}

export interface updateStudentsProps extends EditStudentsProps {
  students: StudentDataType | null;
}