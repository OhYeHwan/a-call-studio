import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

import emptyIcon from "src/static/illust/EmptyState.svg";

const Tabs = ({
  list,
  style,
  selectedTab,
  selectedItem,
  setSelectedItem,
  setSelectedTab,
}) => {
  //Tab의 Label을 클릭할 때 state값 세팅
  const handleTabLabelClick = (tabName) => {
    setSelectedItem(null);
    setSelectedTab(tabName);
  };

  return (
    <TabsWrapper style={style}>
      <div className="flex">
        {Object.keys(list) &&
          Object.keys(list).map((tabName) => (
            <TabsLabels
              className={tabName === selectedTab && "active"}
              value={tabName}
              key={tabName}
              onClick={() => handleTabLabelClick(tabName)}
            >
              {tabName}
            </TabsLabels>
          ))}
      </div>
      {Object.keys(list).map((tabName, idx) => (
        <TabsContent className={tabName === selectedTab && "active"} key={idx}>
          <div value={tabName} key={idx}>
            <ContentsTabList>
              {list[tabName] && list[tabName].length ? (
                list[tabName].map((item) => {
                  return (
                    <ListItem
                      key={item.id}
                      item={item}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
                    />
                  );
                })
              ) : (
                <ContentsTabEmptyList>
                  <ContentsTabEmptyImage />
                  <ContentsTabEmptyText>
                    불러올 수 있는 컨텐츠가 없습니다.
                  </ContentsTabEmptyText>
                </ContentsTabEmptyList>
              )}
            </ContentsTabList>
          </div>
        </TabsContent>
      ))}
    </TabsWrapper>
  );
};

//탭 전체를 감싸는 Wrapper
const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0px 40px 16px 40px;
  margin-top: 8px;
`;

//탭의 제목 영역
const TabsLabels = styled.div`
  cursor: pointer;
  display: flex;
  height: 44px;
  margin-right: 26px;
  flex-direction: row;
  align-items: center;
  color: #9599a5;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;

  &.active {
    border-bottom: 2px solid #4282ed;
    font-weight: bold;
    color: #262626;
  }
  img {
    pointer-events: none;
    &:not(.active) {
      opacity: 0.5;
    }
  }
`;

//탭 컨텐츠 영역
const TabsContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: auto;
  border: 1px solid #d7d9dd;
  background-color: #f5f5f5;
  border-radius: 4px;
  &:not(.active) {
    display: none;
  }
`;

//탭 컨텐츠 목록
const ContentsTabList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 906px;
  height: 444px;
  align-content: flex-start;
  overflow-y: auto;
`;

//탭 불러올 컨텐츠가 없을 때 영역
const ContentsTabEmptyList = styled.div`
  display: flex;
  flex-direction: column;
  width: 906px;
  height: 444px;
  justify-content: center;
  align-items: center;
  padding-bottom: 61px;
`;

//탭 불러올 컨텐츠가 없을 때 일러스트
const ContentsTabEmptyImage = styled.div`
  width: 74px;
  height: 98px;
  background: url("${emptyIcon}") no-repeat center / contain;
`;

//탭 불러올 컨텐츠가 없을 때 텍스트 스타일
const ContentsTabEmptyText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #6d778a;
`;

export default Tabs;
