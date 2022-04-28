import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import styled, { css } from "styled-components";

import Tabs from "./Tabs";
import useStore from "src/stores/useStore";
import closeIcon from "src/static/icon/Close_White.svg";

const Dialog = observer(({ type, list, close, handleLoadButtonClick }) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(list)[0]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loadProjectButtonState, setLoadProjectButtonState] = useState(false);
  //Background Ovelay 요소
  const overlayArea = useRef(null);

  const { snackBarStore, messageDialogStore } = useStore();

  useEffect(() => {
    if (selectedItem === null) {
      setLoadProjectButtonState(false);
    } else {
      setLoadProjectButtonState(true);
    }
  }, [selectedItem]);

  const onClickLoadButton = () => {
    handleLoadButtonClick();
    close();
  };

  //프로젝트 불러오기 버튼 클릭시 이벤트
  //현재 임시소스로 컨텐츠 업로드 스낵바가 동작하게 되어있음.
  //컨텐츠를 선택하지 않았을 경우 메시지 다이얼로그가 뜨게 되어있음.
  // const handleLoadProject = () => {
  //   console.log(selectedItem);

  //   if (selectedItem) {
  //     snackBarStore.setUploadSnackBar(selectedItem);
  //   } else {
  //     messageDialogStore.showMessageDialog({
  //       type: "info",
  //       confirm: () => {
  //         snackBarStore.setMessageSnackBar(
  //           "info",
  //           "테스트용 메시지 스낵바입니다."
  //         );
  //       },
  //       text: "컨텐츠를 선택 해주세요.",
  //     });
  //   }
  // };

  return (
    <DialogOveray
      ref={overlayArea}
      onClick={(e) => {
        if (overlayArea.current === e.target) {
          close();
          setSelectedItem(undefined);
          setSelectedTab(undefined);
          snackBarStore.setUploadSnackBar();
        }
      }}
    >
      <DialogWrapper>
        <DialogTitle>
          <span>
            {type === "content" ? "컨텐츠 불러오기" : "프로젝트 리스트"}
          </span>
          <div onClick={close}>
            <DialogTitleCircle />
            <DialogTitleIcon />
          </div>
        </DialogTitle>
        <DialogSection>
          {list && (
            <Tabs
              list={list}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          )}
          {loadProjectButtonState ? (
            <DialogLoadButton
              state={loadProjectButtonState}
              // onClick={handleLoadProject}
              onClick={onClickLoadButton}
            >
              {type === "content" ? "컨텐츠 불러오기" : "프로젝트 불러오기"}
            </DialogLoadButton>
          ) : (
            <DialogLoadButton state={loadProjectButtonState}>
              {type === "content" ? "컨텐츠 불러오기" : "프로젝트 불러오기"}
            </DialogLoadButton>
          )}
          {snackBarStore._uploadSnackBar}
        </DialogSection>
      </DialogWrapper>
    </DialogOveray>
  );
});

//Dialog 전체를 감싸는 오버레이
const DialogOveray = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Dialog 창 영역
const DialogWrapper = styled.div`
  max-width: "988px";
  max-height: "636px";
`;

//컨텐츠 불러오기 타이틀 영역
const DialogTitle = styled.div`
  display: flex;
  position: relative;
  min-width: 988px;
  min-height: 58px;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  background-color: #4282ed;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
`;

//컨텐츠 불러오기 닫기 버튼 Circle
const DialogTitleCircle = styled.span`
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  right: 18px;
  top: 18px;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    right: 18px;
    top: 18px;
    background: rgba(0, 0, 0, 0.6);
  }
`;

//컨텐츠 불러오기 닫기 버튼 아이콘
const DialogTitleIcon = styled.span`
  position: absolute;
  background: url("${closeIcon}") no-repeat center / contain;
  width: 22px;
  height: 22px;
  right: 20px;
  top: 20px;
  pointer-events: none;
`;

//컨텐츠 불러오기 내용 영역
const DialogSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  min-width: 908px;
  min-height: 446px;
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(6, 16, 31, 0.12);
  border-radius: 0px 0px 10px 10px;
`;

//프로젝트 불러오기 버튼
const DialogLoadButton = styled.button`
  width: 150px;
  height: 36px;
  border-radius: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  outline: none;
  letter-spacing: -0.01em;
  align-self: flex-end;
  margin: 0px 40px 28px;

  ${(props) =>
    props.state
      ? css`
          color: #ffffff;
          background: #4282ed;
          opacity: 0.95;
          border: none;
          cursor: pointer;

          &:hover {
            background: #3572d9;
          }
        `
      : css`
          color: #bcbcbc;
          background: #e4e6ea;
          opacity: 0.95;
          border: 1px solid #d7d9dd;
        `}
`;

export default Dialog;
