import { Button, Input, Space, Table } from "antd";
import { useState } from "react";
import {
  SearchOutlined,
  EditOutlined,
  PlusSquareTwoTone,
} from "@ant-design/icons";
import CreateStudentModal from "./CreateStudentModal";
import EditStudentModal from "./EditStudentModal";
import './studentsStyle.scss'
function StudentsDataTable() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRowId, setSelectedRow] = useState<number | null>(null);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (
    selectedKeys: React.Key[],
    confirm: () => void,
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0] as string);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: string) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(selectedKeys, confirm, dataIndex);
            }
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              confirm();
            }
          }}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),

    onFilter: (value: string, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
  });

  const columns = [
    {
      title: "Serial No",
      width: 30,
      dataIndex: "serial",
      key: "serial",
      render: (_: any, record: any, index: number) => index + 1,
    },
    {
      title: "Name",
      width: 100,
      dataIndex: "departmentName",
      key: "departmentName",
      fixed: "left",
      ...getColumnSearchProps("departmentName"),
    },
    {
      title: "Department",
      width: 100,
      dataIndex: "departmentDes",
      key: "departmentDes",
      fixed: "left",
      ...getColumnSearchProps("departmentDes"),
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (params: any) => (
        <div>
          <Button type="primary" onClick={() => handleOpenEditModal(params.id)}>
            <EditOutlined />
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
    setIsCreateModalOpen(true);
  };
  const handleCreateModalClose = () => {
    setIsCreateModalOpen(false);
  };

  const editModalClose = () => {
    setIsEditModalOpen(false);
  };

  const studentDataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  return (
    <>
      <div className="responsive-table">
        <Button
          type="primary"
          style={{ float: "right" }}
          onClick={openCreateModal}
        >
          <PlusSquareTwoTone />
        </Button>
        <CreateStudentModal
          open={isCreateModalOpen}
          onClose={handleCreateModalClose}
          title="Create Students"
        />
        <Table
          dataSource={studentDataSource}
          columns={columns}
          scroll={{ x: 1500, y: 650 }}
          pagination={{
            defaultPageSize: 20,
            showSizeChanger: true,
            pageSizeOptions: ["20", "30"],
          }}
        />
        <EditStudentModal
          open={isEditModalOpen}
          onClose={editModalClose}
          selectedRowId={selectedRowId}
        />
      </div>
    </>
  );
}

export default StudentsDataTable;
