import { Modal as BaseModal } from "antd";
import styled from "styled-components";

const ModalStyled = styled(BaseModal)`
  .ant-modal-title {
    color: red !important;
    text-align: center !important;
    font-size: 18px;
    line-height: 24px;
  }
  .ant-btn {
    background-color: ${({ theme }) => theme.primary} !important;
    color: white !important;
    font-size: 15px;
    font-weight: 500;
  }
`;

const Modal = ({ isOpen, handleOk, handleCancel, title, content }) => {
  return (
    <>
      <ModalStyled
        title={title}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {content}
      </ModalStyled>
    </>
  );
};

export default Modal;
