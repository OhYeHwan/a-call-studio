import React from "react";
import styled, { css } from "styled-components";
import CheckBox from "./CheckBox";

const Thumbnail = ({ mode, image, keyword = false, ql = false }) => {
  return (
    <ThumbnailLayout className="thumbnail-layout" mode={mode}>
      <ThunmbnailHeader>
        <Badge checked={keyword}>Keyword</Badge>
        <Badge checked={ql}>Q/L</Badge>
        <CheckBox />
      </ThunmbnailHeader>
      <ThumbnailViewer>
        <Container>
          <ThumbnailImg
            src={`data:image/png;base64,${image}`}
            alt="thumbnail"
          />
        </Container>
      </ThumbnailViewer>
    </ThumbnailLayout>
  );
};

const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

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
  line-height: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 0 7px 0 7px;
  z-index: 999;

  ${(props) =>
    props.checked &&
    css`
      background-color: #b9e8f8;
      border: 1px solid #76bcd6;
      color: #006487;
    `}
`;

const ThumbnailViewer = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
`;

export default Thumbnail;
