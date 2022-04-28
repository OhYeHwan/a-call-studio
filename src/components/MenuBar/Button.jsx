import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const Button = ({ children, onClick, disabled, loading }) => {
  return (
    <ButtonLayout onClick={onClick} disabled={disabled}>
      <ButtonText loading={loading ? "true" : "false"}>{children}</ButtonText>
      {loading && (
        <ButtonBox>
          <CircularProgress sx={{ color: "grey.500" }} size={20} />
        </ButtonBox>
      )}
    </ButtonLayout>
  );
};

const ButtonText = styled.div`
  opacity: ${(props) => (props.loading === "false" ? 100 : 0)};
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

const ButtonLayout = styled.button`
  position: relative;

  height: 36px;
  outline: none;
  border-radius: 6px;
  border: none;
  background: #fff;
  opacity: 0.95;
  padding: 7px 22px;

  font-weight: 700;
  font-size: 14px;
  color: #262626;

  cursor: pointer;

  &:hover {
    &:not([disabled]) {
      opacity: 0.8;
    }
  }

  &:disabled {
    color: var(--color-black-text-sub);
    border: 1px solid var(--color-gray-line);
    background: var(--color-gray-line2);
    cursor: default;
  }

  & + & {
    margin-left: 6px;
  }
`;

export default Button;
