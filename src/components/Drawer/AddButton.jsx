import React from "react";
import styled from "styled-components";
import { ReactComponent as Plus } from "src/static/icon/plus_button.svg";

const AddButton = ({ handleClickAddButton }) => {
  return (
    <AddButtonLayout className="icon-button" onClick={handleClickAddButton}>
      <Plus width={22} fill="#8b8e90" />
    </AddButtonLayout>
  );
};

const AddButtonLayout = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export default AddButton;
