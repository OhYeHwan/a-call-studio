import React from "react";
import styled, { css } from "styled-components";

const IconButton = ({ children, icon, variant, onClick }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      <ButtonIcon src={icon} />
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 36px;
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: 700;
  line-height: 2px;
  letter-spacing: -0.01em;
  color: #fff;

  border-radius: 6px;
  outline: none;
  cursor: pointer;

  & + & {
    margin-left: 6px;
  }

  ${(props) =>
    props.variant === "default" &&
    css`
      border: none;
      background-color: transparent;
      padding: 6px 8px 6px 8px;

      &:hover {
        background: rgba(0, 0, 0, 0.12);
        border-radius: 4px;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.08);
      background: rgba(0, 0, 0, 0.2);
      padding: 4px 16px 4px 16px;

      &:hover {
        opacity: 0.8;
      }
    `}
`;

const ButtonIcon = styled.img``;

const ButtonText = styled.div`
  padding-left: 7px;
`;

IconButton.defaultProps = {
  variant: "default",
};

export default IconButton;
