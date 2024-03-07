import { Button, Modal } from "antd";

interface CreateModalProps {
  open: boolean;
  onClose: () => void;
}

function CreatDepartmentModal({ open, onClose }: CreateModalProps) {
  return (
    <>
      <Modal open={open} onCancel={onClose}>
        {" "}
        create departmet modal;
       
      </Modal>
    </>
  );
}

export default CreatDepartmentModal;