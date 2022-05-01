import React, { useEffect, useRef, useState } from "react";
import useStore from "src/stores/useStore";
import { observer } from "mobx-react-lite";
import styled, { css } from "styled-components";

import errorIcon from "src/static/icon/Popup_Error.svg";
import successIcon from "src/static/icon/Popup_Success.svg";
import infoIcon from "src/static/icon/Popup_Info.svg";
import notiIcon from "src/static/icon/Popup_Noti.svg";

// 중앙 Message Dialog
const MessageDialog = observer(({ confirm, text, type }) => {
  /* 
        MessageDialog props data type
        confirm: function
        text: string
        type : 'error', 'info', 'success', 'noti'
    */

  //Background Ovelay 요소
  const overlayArea = useRef(null);
  //contents 요소 (text size 구하는 용도)
  const contents = useRef(null);
  //Modal창 inline 스타일
  const [modalStyle, setModalStyle] = useState(undefined);
  const { snackBarStore, messageDialogStore } = useStore();

  // 텍스트의 width가 247px이 넘을 때 너비 조절
  useEffect(() => {
    if (contents && contents.current) {
      const dialogWidth = contents.current.offsetWidth > 247 ? 570 : 388;
      setModalStyle({
        width: dialogWidth,
      });
    }
  }, [messageDialogStore._open]);

  //Message Dialog 닫기
  const handleCancelDialog = () => {
    messageDialogStore.hideMessageDialog();
    snackBarStore.setMessageSnackBar();
  };

  return (
    <MessageDialogOveray
      open={messageDialogStore._open}
      ref={overlayArea}
      onClick={(e) => {
        if (overlayArea.current === e.target) {
          handleCancelDialog();
          snackBarStore.setMessageSnackBar();
        }
      }}
    >
      {messageDialogStore._open && (
        <>
          <MessageDialogSection style={modalStyle}>
            <MessageDialogIcon type={type} />
            <MessageDialogContents ref={contents}>{text}</MessageDialogContents>
            <div>
              {type === "noti" && (
                <MessageDialogButton onClick={handleCancelDialog} type="cancel">
                  취소
                </MessageDialogButton>
              )}
              <MessageDialogButton onClick={handleCancelDialog} type="confirm">
                확인
              </MessageDialogButton>
            </div>
          </MessageDialogSection>
          {snackBarStore._messageSnackBar}
        </>
      )}
    </MessageDialogOveray>
  );
});

//메시지 다이얼로그 오버레이 영역
const MessageDialogOveray = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);

  ${(props) =>
    props.open
      ? `display: flex;
        justify-content: center;
        align-items: center;`
      : `display: none;`}
`;

//메시지 다이얼로그 전체 영역
const MessageDialogSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;

  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(6, 16, 31, 0.12);
  border-radius: 12px;
`;

//메시지 다이얼로그 아이콘
const MessageDialogIcon = styled.div`
  width: 42px;
  height: 42px;
  margin-bottom: 10px;
  ${(props) =>
    props.type === "error" &&
    css`
      background: url("${errorIcon}") no-repeat center / contain;
    `}
  ${(props) =>
    props.type === "success" &&
    css`
      background: url("${successIcon}") no-repeat center / contain;
    `}
    ${(props) =>
    props.type === "info" &&
    css`
      background: url("${infoIcon}") no-repeat center / contain;
    `}
    ${(props) =>
    props.type === "noti" &&
    css`
      background: url("${notiIcon}") no-repeat center / contain;
    `}
`;

//메시지 다이얼로그 컨텐츠 영역
const MessageDialogContents = styled.div`
  display: inline;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-right: 26px;
  margin-left: 26px;
  margin-bottom: 24px;
  text-align: center;
  letter-spacing: -0.05em;
  white-space: pre-line;
  color: #262626;
`;

//메시지 다이얼로그 버튼
const MessageDialogButton = styled.button`
  width: 99px;
  height: 44px;
  outline: none;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;

  text-align: center;
  letter-spacing: -0.05em;

  background: ${(props) => (props.type === "cancel" ? "#EEF0F2" : "#4282ED")};
  color: ${(props) => (props.type === "cancel" ? "#262626" : "#FFFFFF")};
  &:hover {
    ${(props) =>
      props.type === "cancel" ? "background: #E7E9EC" : "background: #3572D9"};
  }

  ${(props) =>
    props.type === "cancel"
      ? css`
          margin-right: 6px;
        `
      : null}
`;

export default MessageDialog;
