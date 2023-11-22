import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalANT = ({userName, userPassword}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Show user
      </Button>
      <Modal title="User" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>The user name is: {userName}</p>
        <p>The passsword is: {userPassword}</p>
      </Modal>
    </>
  );
};
export default ModalANT;