import { Button, Table, TableColumnProps } from "antd";
import React, { useState } from "react";
import CreatDepartmentModal from "./CreaetDepartmentModal";
import EditDepartmentModal from "./EditDepartmentModal";
import { useGetDepartmentDataQuery } from "../../../redux/features/service/departmentApiService";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  
}
function DepartmentTable() {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRowId, setSelectedRow] = useState<number | null>(null);
const{ data = [] } = useGetDepartmentDataQuery();
const columns: TableColumnProps<DataType> = [
  {
    id: 1,
    departmentName: "Department Name",
    width: 100,
    dataIndex: "departmentName",
    key: "departmentName",
    fixed: "left",
  },
  {
    id: 1,
    departmentDes: "Department Des",
    width: 100,
    dataIndex: "departmentDes",
    key: "departmentDes",
    fixed: "left",
  },
  {
    id: 1,
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: (params: any) => (
      <div>
        <Button onClick={() => handleOpenEditModal(params.id)}>
          Edit
        </Button>
      </div>
    ),
  },
];



  const handleOpenEditModal = (id: number) => {
    setIsEditModalOpen(true);
    setSelectedRow(id);
  };

  const openCreateModal = () => {
      setIsCreateModalOpen(true)
  }
const handleCreateModalClose = () => {
  setIsCreateModalOpen(false);
}

const editModalClose = () => {
  setIsEditModalOpen(false);
}
  return (
    <>
      <Button
        type="primary"
        style={{ float: "right" }}
        onClick={openCreateModal}
      >
        Add
      </Button>
      <CreatDepartmentModal
        open={isCreateModalOpen}
        onClose={handleCreateModalClose}
      />
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500, y: 650 }}
        pagination={{
          defaultPageSize: 20,
          showSizeChanger: true,
          pageSizeOptions: ["20", "30"],
        }}
      />
      <EditDepartmentModal
        open={isEditModalOpen}
        onClose={editModalClose}
        selectedRowId={selectedRowId}
      />
    </>
  );
}

export default DepartmentTable;