import React from "react";
import styled, { css } from "styled-components";
import arrowClose from "src/static/icon/arrow_close.svg";
import arrowOpen from "src/static/icon/arrow_open.svg";

const ToggleButton = ({ toggle, handleClickToggleBtn }) => {
  return (
    <ToggleButtonLayout
      className="center"
      toggle={toggle}
      onClick={handleClickToggleBtn}
    >
      <img
        src={toggle ? arrowClose : arrowOpen}
        alt={toggle ? "arrow-close" : "arrow-open"}
      />
    </ToggleButtonLayout>
  );
};

const ToggleButtonLayout = styled.button`
  position: absolute;
  z-index: 999;
  top: 53px;
  left: 222px;
  transform: translateX(-50%);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #e4e6ea;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(6, 16, 31, 0.14);

  &:hover {
    background-color: #e4e6ea;
    cursor: pointer;
  }

  ${(props) =>
    props.toggle === false &&
    css`
      left: 20px;
    `}
`;

export default ToggleButton;
