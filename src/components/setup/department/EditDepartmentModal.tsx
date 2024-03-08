import { Modal } from "antd";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  selectedRowId: number | null;
}
function EditDepartmentModal ({open, onClose, selectedRowId}: EditModalProps) {
  return (
    <>
      <Modal
      open={open}
      onCancel={onClose}
      >edit openCreateModal</Modal>
    </>
  );
}

export default EditDepartmentModal;