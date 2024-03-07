import { Modal } from "antd";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
}
function EditDepartmentModal ({open, onClose}: EditModalProps) {
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