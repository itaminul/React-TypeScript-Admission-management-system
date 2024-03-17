import { Button, Table } from "antd";
import  { useState } from "react";
import CreatDepartmentModal from "./CreaetDepartmentModal";
import EditDepartmentModal from "./EditDepartmentModal";
import { useGetDepartmentDataQuery } from "../../../redux/features/service/departmentApiService";
function DepartmentTable() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRowId, setSelectedRow] = useState<number | null>(null);
   const { data: department, error, isLoading } = useGetDepartmentDataQuery();


   if (isLoading) return <div>Loading...</div>;

   if (error || !department) {
     return <div>Error: Failed to fetch department data.</div>;
   }

  const columns = [
    {
      title: "Serial No",
      width: 30,
      dataIndex: "serial",
      key: "serial",
      render: (_: any, record: any, index: number) => index + 1
    },
    {
      title: "Department Name",
      width: 100,
      dataIndex: "departmentName",
      key: "departmentName",
      fixed: "left",
    },
    {
      title: "Department Des",
      width: 100,
      dataIndex: "departmentDes",
      key: "departmentDes",
      fixed: "left",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (params: any) => (
        <div>
          <Button onClick={() => handleOpenEditModal(params.id)}>Edit</Button>
        </div>
      ),
    },
  ];

  const handleOpenEditModal = (id: number) => {
    setIsEditModalOpen(true);
    setSelectedRow(id);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  const handleCreateModalClose = () => {
    setIsCreateModalOpen(false);
  };

  const editModalClose = () => {
    setIsEditModalOpen(false);
  };
  if (!Array.isArray(department) || department.length === 0) {
    return <div>Data is not in the expected format</div>;
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
        dataSource={department}
        columns={columns}
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
