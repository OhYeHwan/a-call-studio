import React from "react";
import styled, { css } from "styled-components";
import CheckBox from "./CheckBox";

const Thumbnail = ({
  mode,
  keyword = false,
  ql = false,
  html,
  projectName,
  groupName,
  pageName,
}) => {
  return (
    <ThumbnailLayout className="thumbnail-layout" mode={mode}>
      <ThunmbnailHeader>
        <Badge checked={keyword}>Keyword</Badge>
        <Badge checked={ql}>Q/L</Badge>
        <CheckBox />
      </ThunmbnailHeader>
      <ThumbnailViewer>
        <Container>
          {/* <Iframe
            // srcDoc={html}
            src={`./${projectName}_html/${groupName}/${pageName}`}
            scrolling="no"
          ></Iframe> */}
        </Container>
      </ThumbnailViewer>
    </ThumbnailLayout>
  );
};

const ThumbnailLayout = styled.section`
  position: relative;
  height: 112px;
  width: 182px;
  border: 2px solid #d7d9dd;
  border-radius: 6px;

  ${(props) =>
    props.mode === "tree" &&
    css`
      width: 168px;
    `}
`;

const ThunmbnailHeader = styled.header`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  .default:hover {
    .border {
      fill: #4282ed;
    }
  }
`;

const Badge = styled.div`
  background: #e4e6ea;
  border: 1px solid #c7cace;
  border-radius: 10px;
  color: #999999;
  text-align: center;
  display: inline-block;
  height: 20px;
  line-height: 16px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 0 7px 0 7px;
  z-index: 999;

  ${(props) =>
    props.checked &&
    css`
      background-color: #b9e8f8;
      border: 2px solid #76bcd6;
      color: #006487;
    `}
`;

const ThumbnailViewer = styled.main`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;

const Iframe = styled.iframe`
  /* -ms-zoom: 1;
  -moz-transform: scale(0.1);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.1);
  -o-transform-origin: 0 0; */

  -webkit-transform: scale(0.4);
  -webkit-transform-origin: 0 0;
  /* 
  width: calc(182px * 10);
  height: calc(112px * 10); */

  width: 50%;
  height: 100%;

  pointer-events: none;
`;

export default Thumbnail;
