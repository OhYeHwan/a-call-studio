import React from "react";
import styled from "styled-components";
import { ReactComponent as Delete } from "src/static/icon/delete_button.svg";

const DeleteButton = ({ onClickDeleteButton }) => {
  return (
    <DeleteButtonLayout className="icon-button" onClick={onClickDeleteButton}>
      <Delete width={22} fill="#8b8e90" />
    </DeleteButtonLayout>
  );
};

const DeleteButtonLayout = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export default DeleteButton;
