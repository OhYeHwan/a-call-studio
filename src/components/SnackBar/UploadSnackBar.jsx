import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

import expendOpenIcon from "src/static/icon/dialog_popup_arrow_open.svg";
import expendCloseIcon from "src/static/icon/dialog_popup_arrow_close.svg";
import closeIcon from "src/static/icon/Close_White.svg";
import fileUploadIcon from "src/static/icon/File_Upload.svg";
import checkIcon from "src/static/icon/Popup_Check.svg";
import alertIcon from "src/static/icon/Toast_White.svg";

// 컨텐츠 불러오기 - 업로드 SnackBar
const UploadSnackBar = ({ content, uploadState, setUploadState }) => {
  //확장 상태 (default : true)
  const [expendOpen, setExpendOpen] = useState(true);

  //스낵바 확장/축소
  const handleExpandSnackBar = () => {
    setExpendOpen(!expendOpen);
  };

  //스낵바 닫기
  const handleCloseSnackBar = () => {
    setUploadState(null);
  };

  return (
    <UploadSnackBarWrapper>
      <UploadSnackBarHeader open={expendOpen}>
        <UploadSnackBarHeaderText>
          {uploadState === "fail"
            ? "컨텐츠 파일 불러오기 실패"
            : uploadState === "loading"
            ? "컨텐츠 파일 불러오기 중..."
            : "컨텐츠 파일 불러오기 완료"}
        </UploadSnackBarHeaderText>
        <div className="flex">
          <UploadSnackBarHeaderExpand
            open={expendOpen}
            onClick={handleExpandSnackBar}
          />
          <UploadSnackBarHeaderClose onClick={handleCloseSnackBar} />
        </div>
      </UploadSnackBarHeader>
      {expendOpen && (
        <UploadSnackBarBody open={expendOpen}>
          <UploadSnackBarBodyIconWrapper>
            <UploadSnackBarBodyFileIcon />
          </UploadSnackBarBodyIconWrapper>
          <UploadSnackBarBodyTitle>{content.title}</UploadSnackBarBodyTitle>
          <UploadSnackBarBodyFileSize>
            {content.fileSize}KB
          </UploadSnackBarBodyFileSize>
          {uploadState === "loading" ? (
            <UploadSnackBarBodyStateIcon uploadState={uploadState} />
          ) : (
            <UploadSnackBarBodyStateWrapper>
              <UploadSnackBarBodyStateCircle uploadState={uploadState} />
              <UploadSnackBarBodyStateIcon uploadState={uploadState} />
            </UploadSnackBarBodyStateWrapper>
          )}
        </UploadSnackBarBody>
      )}
    </UploadSnackBarWrapper>
  );
};

//업로드 스낵바 Wrapper
const UploadSnackBarWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  left: 18px;
  bottom: 18px;
  box-shadow: 0px 4px 12px rgba(6, 16, 31, 0.24);
  border-radius: 6px;
`;

//업로드 스낵바 상단 영역
const UploadSnackBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 42px;
  background: #424453;
  border-radius: ${(props) => (props.open ? "6px 6px 0px 0px;" : "6px")};
`;

//업로드 스낵바 상단 텍스트
const UploadSnackBarHeaderText = styled.span`
  margin-left: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

//업로드 스낵바 확장/축소 아이콘
const UploadSnackBarHeaderExpand = styled.span`
  cursor: pointer;
  margin-right: 16px;
  width: 18px;
  height: 18px;
  background: url("${(props) =>
    props.open ? expendOpenIcon : expendCloseIcon}");
`;

//업로드 스낵바 닫기 아이콘
const UploadSnackBarHeaderClose = styled.span`
  cursor: pointer;
  margin-right: 16px;
  width: 18px;
  height: 18px;
  background: url("${closeIcon}");
`;

//업로드 스낵바 하단 영역
const UploadSnackBarBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 60px;
  background: #ffffff;
  padding: 0px 16px;
  border-radius: 0px 0px 6px 6px;
`;

//업로드 스낵바 하단 아이콘 영역
const UploadSnackBarBodyIconWrapper = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background: #4282ed;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

//업로드 스낵바 하단 파일 아이콘
const UploadSnackBarBodyFileIcon = styled.span`
  width: 18px;
  height: 18px;
  background: url("${fileUploadIcon}");
`;

//업로드 스낵바 하단 컨텐츠 제목 영역
const UploadSnackBarBodyTitle = styled.span`
  width: 200px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #262626;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

//업로드 스낵바 하단 파일 용량
const UploadSnackBarBodyFileSize = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: -0.05em;
  color: #6d778a;
`;

//업로드 스낵바 하단 상태 아이콘 Wrapper
const UploadSnackBarBodyStateWrapper = styled.div`
  position: relative;
`;

//업로드 스낵바 하단 상태 Circle
const UploadSnackBarBodyStateCircle = styled.div`
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${(props) =>
    props.uploadState === "success"
      ? css`
          background: #6eca40;
        `
      : css`
          background: #f3594f;
        `}
`;

//업로드 스낵바 하단 상태 아이콘
const UploadSnackBarBodyStateIcon = styled.div`
  width: 20px;
  height: 20px;
  ${(props) =>
    props.uploadState === "success"
      ? css`
          background: url("${checkIcon}") no-repeat center / contain;
          position: absolute;
          width: 10px;
          height: 8px;
          top: 6px;
          right: 5px;
        `
      : props.uploadState === "fail"
      ? css`
          background: url("${alertIcon}") no-repeat center / contain;
          position: absolute;
          right: 20px;
          width: 12px;
          height: 12px;
          top: 4px;
          right: 4px;
        `
      : css`
          &::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 3px solid #d7d9dd;
            border-top-color: #1890ff;
            animation: spinner 0.8s linear infinite;
          }
        `}

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default UploadSnackBar;
