import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import useStore from "../../stores/useStore";
import styled from "styled-components";

import ContentsTab from "./ContentTab/ContentsTab";
import QuestionTab from "./QuestionTab/QuestionTab";
import RecommendMake from "./MakeRecommendButton";
import AIDubbing from "./AIDubbing";

import useStores from "src/hooks/useStores";

const MIN_HEIGHT = 418; // drawer 높이의 최소값. 이 값보다 작은 경우 dragger의 굵기로 전환
const DRAGGER_THICKNESS = 12; // dragger 굵기.
const HEIGHT_LIMIT = 5000; // drawer 높이 제한

const Drawer = observer(() => {
  const { contentStore } = useStores();
  const { target, afterKeywords } = contentStore;

  const [savedHeight, setSavedHeight] = useState(DRAGGER_THICKNESS); // 더블 클릭 시 기존 높이 저장
  const [isDragging, setIsDragging] = useState(false);

  const { drawerHeightStore } = useStore();

  // const [dragTimeout, setDragTimeout] = useState(null); dragging delay 방지를 위해 만들었으나 Delay가 사라지지 않아 comment 처리
  // window 사이즈 변경 시 drawer 사이즈가 화면을 넘기지 않도록 조정
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // 윈도우 창 크기 변경 시 drawer 사이즈 강제 조정하여 overflow 방지
  const handleResize = () => {
    const MAX_HEIGHT = window.innerHeight - 84;
    if (drawerHeightStore._height >= Math.min(HEIGHT_LIMIT, MAX_HEIGHT)) {
      drawerHeightStore.setHeight(Math.min(HEIGHT_LIMIT, MAX_HEIGHT));
    }
  };

  // drag 중 이미지 제거
  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setDragImage(document.querySelector(".BlankImage"), 0, 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // drag 더블클릭 시 기존 높이로 전환
  const handleDoubleClick = (e) => {
    if (drawerHeightStore._height !== DRAGGER_THICKNESS) {
      setSavedHeight(drawerHeightStore._height);
      drawerHeightStore.setHeight(DRAGGER_THICKNESS);
    } else {
      drawerHeightStore.setHeight(savedHeight);
      setSavedHeight(DRAGGER_THICKNESS);
    }
  };

  // drag시 drawer 높이 조정
  const handleDrag = (e) => {
    let calculatedHeight = 0;
    const MAX_HEIGHT = window.innerHeight - 84;

    if (e.pageY === 0) return; // drag 시 마지막 e.pageY 값이 0이 되는 현상을 무시하기 위해 추가

    calculatedHeight = window.innerHeight - e.pageY + 6;

    if (calculatedHeight >= Math.min(HEIGHT_LIMIT, MAX_HEIGHT)) {
      calculatedHeight = Math.min(MAX_HEIGHT, HEIGHT_LIMIT);
    } else if (calculatedHeight < MIN_HEIGHT) {
      calculatedHeight = MIN_HEIGHT;
    }

    drawerHeightStore.setHeight(calculatedHeight);
  };

  const handleChange = (e) => {
    contentStore.handleChangeSummary(e.target.value);
  };

  return (
    <DrawLayout className="column" height={drawerHeightStore._height}>
      <DrawerDragger
        draggable
        onDoubleClick={handleDoubleClick}
        onDrag={handleDrag}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <Dot />
        <Dot />
        <Dot />
      </DrawerDragger>
      <DrawerContents>
        <ContentsTab target={target} handleChange={handleChange} />
        <RecommendMake
          contents={target.summary === null ? "" : target.summary}
          keywords={target.keywords}
        />
        <QuestionTab afterKeywords={afterKeywords} />
      </DrawerContents>
      <DrawerBlankImage />
      <AIDubbing />
    </DrawLayout>
  );
});

export default Drawer;

const DrawLayout = styled.div`
  height: ${(props) => `${props.height}px`};
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
`;

const DrawerDragger = styled.div`
  display: flex;
  height: 12px;
  border-top: 1px solid #e4e6ea;
  border-bottom: 1px solid #e4e6ea;
  justify-content: center;
  cursor: grab;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: #bcbcbc;
  border-radius: 50%;
  margin-top: 3px;
  margin-bottom: 3px;

  &:nth-child(2) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const DrawerContents = styled.div`
  gap: 18px;
  display: flex;
  height: 100%;
  align-items: center;
  min-height: 300px;
  margin: 24px 26px;
  overflow: hidden;
`;

const DrawerBlankImage = () => {
  return (
    <img
      className="BlankImage"
      src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      width="1"
      height="1"
      alt=""
    />
  );
};
