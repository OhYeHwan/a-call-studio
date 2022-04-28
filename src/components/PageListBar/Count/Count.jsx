import React from "react";
import styled from "styled-components";
import pageIcon from "src/static/icon/Page.svg";

const Count = ({ count = 0 }) => {
  return (
    <div className="flex items-center">
      <CountIcon src={pageIcon} alt="page-icon" />
      <CountText>페이지 {count}</CountText>
    </div>
  );
};

export default Count;

const CountIcon = styled.img`
  margin-right: 5px;
  margin-left: 22px;
`;

const CountText = styled.p`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 700;
`;
