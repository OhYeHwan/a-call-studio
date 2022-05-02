import React from "react";
import styled, { css } from "styled-components";

import errorIcon from "src/static/icon/Toast_Red.svg";
import successIcon from "src/static/icon/Toast_Success.svg";
import infoIcon from "src/static/icon/Toast_Blue.svg";
import notiIcon from "src/static/icon/Toast_Yellow.svg";

// 페이지 하단 Message SnackBar
const MessageSnackBar = ({ text, type }) => {
  /* 
        text: string
        type : 'error', 'info', 'success', 'noti'
    */

  return (
    <MessageSnackBarWrapper type={type}>
      <div className="flex">
        <MessageSnackBarIconWrapper>
          <MessageSnackBarCircle />
          <MessageSnackBarIcon type={type} />
        </MessageSnackBarIconWrapper>
        <MessageSnackBarText>{text}</MessageSnackBarText>
      </div>
    </MessageSnackBarWrapper>
  );
};

//메시지 스낵바 Wrapper (애니메이션 포함)
const MessageSnackBarWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: -45px;

  z-index: 999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #ffffff;

  text-align: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  height: 40px;
  padding: 9px 22px;

  ${(props) =>
    props.type === "error" &&
    css`
      background: #f3594f;
    `}
  ${(props) =>
    props.type === "success" &&
    css`
      background: #6eca40;
    `}
    ${(props) =>
    props.type === "info" &&
    css`
      background: #1890ff;
    `}
    ${(props) =>
    props.type === "noti" &&
    css`
      background: #ffbe24;
    `}

    animation: notification 0.3s ease-out forwards, dissapear 0.3s ease-in
    forwards;
  animation-delay: 0.5s, 2.5s;

  @keyframes notification {
    0% {
      transform: translateY(80px);
      opacity: 0;
    }
    50% {
      transform: translateY(-90px);
      opacity: 1;
    }
    100% {
      transform: translateY(-80px);
      opacity: 1;
    }
  }

  @keyframes dissapear {
    0% {
      transform: translateY(-80px);
      opacity: 1;
    }
    50% {
      transform: translateY(-90px);
      opacity: 1;
    }
    100% {
      transform: translateY(80px);
      opacity: 0;
    }
  }
`;

//메시지 스낵바 아이콘 영역
const MessageSnackBarIconWrapper = styled.span`
  position: relative;
`;

//메시지 스낵바 Circle
const MessageSnackBarCircle = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
`;

//메시지 스낵바 아이콘
const MessageSnackBarIcon = styled.span`
  position: absolute;
  width: 14px;
  left: 3px;
  top: 2px;
  height: 14px;
  ${(props) =>
    props.type === "error" &&
    css`
      background: url(${errorIcon}) no-repeat center / contain;
    `}
  ${(props) =>
    props.type === "success" &&
    css`
      background: url(${successIcon}) no-repeat center / contain;
    `}
    ${(props) =>
    props.type === "info" &&
    css`
      background: url(${infoIcon}) no-repeat center / contain;
    `}
    ${(props) =>
    props.type === "noti" &&
    css`
      background: url(${notiIcon}) no-repeat center / contain;
    `}
`;

//메시지 스낵바 텍스트
const MessageSnackBarText = styled.div`
  margin-left: 28px;
`;

export default MessageSnackBar;
