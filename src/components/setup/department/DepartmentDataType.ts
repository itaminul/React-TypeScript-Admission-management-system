export interface DepartmentDataType {
  id?: number;
  departmentName?: string;
  departmentDes?: string;
  serialNo: number;
  orgId?: number;
  selectedRowId: number;
}

export interface CreateDepartmentModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

export interface EditDepartmentProps extends CreateDepartmentModalProps {
  selectedRowId: number;
  data: DepartmentDataType;
}

export interface updateDepartmentProps extends EditDepartmentProps {
  department: DepartmentDataType | null;
}
