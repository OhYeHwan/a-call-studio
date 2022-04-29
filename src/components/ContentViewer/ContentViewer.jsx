import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import DesktopIcon from "src/static/icon/Desktop.svg";
import TabletIcon from "src/static/icon/Tablet.svg";
import MobileIcon from "src/static/icon/Mobile.svg";
import useStore from "src/stores/useStore";

import { observer } from "mobx-react-lite";

import useStores from "src/hooks/useStores";

const ContentViewer = observer(() => {
  const publicUrl = process.env.PUBLIC_URL;
  const [mode, setMode] = useState("mobile");
  const { drawerHeightStore } = useStore();

  const { contentStore } = useStores();
  const { target } = contentStore;

  return (
    <ContentOuterContainer>
      <ContentInnerContainer
        style={{ marginBottom: drawerHeightStore._height + 50 }}
      >
        <ContentViewerLayout mode={mode}>
          <ContentViewerHeader>
            <ContentViewerURL>
              {target.pageId === null
                ? "ㅡ"
                : `./${target.projectName}_html/${target.pageGroupName}/${target.pageName}`}
            </ContentViewerURL>
            <ContentViewrIconGroup>
              <ContentViewerIcon
                className={mode === "desktop" ? "active" : null}
                src={DesktopIcon}
                onClick={() => setMode("desktop")}
              />
              <ContentViewerIcon
                className={mode === "tablet" ? "active" : null}
                src={TabletIcon}
                onClick={() => setMode("tablet")}
              />
              <ContentViewerIcon
                className={mode === "mobile" ? "active" : null}
                src={MobileIcon}
                onClick={() => setMode("mobile")}
              />
            </ContentViewrIconGroup>
          </ContentViewerHeader>
          <ContentViewerMain>
            {target.pageId === null ? null : (
              <Iframe
                src={`${publicUrl}/data/${target.projectName}_html/${target.pageGroupName}/${target.pageName}`}
              ></Iframe>
            )}
          </ContentViewerMain>
        </ContentViewerLayout>
      </ContentInnerContainer>
    </ContentOuterContainer>
  );
});

const ContentOuterContainer = styled.div`
  flex-grow: 1;
  max-height: 100%;
  width: 100%;
  overflow-y: scroll;
`;

const ContentInnerContainer = styled.div`
  margin-bottom: 200px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const ContentViewerLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
  background-color: white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  ${(props) =>
    props.mode === "mobile" &&
    css`
      width: 475px;
    `}

  ${(props) =>
    props.mode === "tablet" &&
    css`
      width: 1000px;
    `}

    ${(props) =>
    props.mode === "desktop" &&
    css`
      width: 1600px;
    `}
`;

const ContentViewerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 54px;
  background: #f9fafc;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ContentViewerURL = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 20px;
  height: 40px;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  font-size: 12px;
`;

const ContentViewrIconGroup = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

const ContentViewerIcon = styled.img`
  height: 24px;
  width: 24px;

  &.active {
    filter: invert(58%) sepia(64%) saturate(5371%) hue-rotate(202deg)
      brightness(97%) contrast(92%);
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const ContentViewerMain = styled.main`
  flex-grow: 1;
  background: fff;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default ContentViewer;
