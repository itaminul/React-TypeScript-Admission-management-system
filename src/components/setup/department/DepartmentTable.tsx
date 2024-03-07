import { Button, Input, Table, TableColumnProps } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import CreatDepartmentModal from "./CreaetDepartmentModal";
import EditDepartmentModal from "./EditDepartmentModal";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  
}
function DepartmentTable() {

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

const columns: TableColumnProps<DataType> = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150,
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    width: 150,
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    width: 150,
  },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];


  const data: DataType[] = [];
  for(let i=0; i < 100; i++) {
    data.push({
      key: i,
      name: `Aminul ${i}`,
      age: 32,
      address: `Dhaka ${i}`
    })
  }

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
        scroll={{ x: 1500, y: 700 }}
        pagination={{
          defaultPageSize: 20,
          showSizeChanger: true,
          pageSizeOptions: ["20", "30"],
        }}
      />
      <EditDepartmentModal
      open={isEditModalOpen} 
      onClose={editModalClose} />
    </>
  );
}

export default DepartmentTable;