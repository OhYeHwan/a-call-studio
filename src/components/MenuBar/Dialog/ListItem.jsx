import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import SelectedRadio from "src/static/icon/Selected_Radio.svg";
import DefaultRadio from "src/static/icon/Default_Radio.svg";
import FileIllust from "src/static/illust/File.svg";

// 컨텐츠 불러오기 - 컨텐츠 목록
const ListItem = observer(({ item, selectedItem, setSelectedItem }) => {
  //컨텐츠 체크 여부
  const handleSelectedItem = () => {
    setSelectedItem(item);
  };

  return (
    <ListItemWrapper
      onClick={handleSelectedItem}
      selectedItem={selectedItem}
      item={item}
    >
      <ListItemBox>
        <ListItemRadio selectedItem={selectedItem} item={item} />
        <ListItemFile />
      </ListItemBox>
      <ListItemTitle>{item.title}</ListItemTitle>
    </ListItemWrapper>
  );
});

//컨텐츠 Wrapper
const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 156px;
  width: 156px;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 10px;
  box-shadow: ${(props) =>
    props.selectedItem && props.selectedItem.id === props.item.id
      ? "0 0 0 2px #4282ED inset"
      : "0 0 0 1px #DFE5EB inset"};
`;

//컨텐츠 상단 BOX 영역
const ListItemBox = styled.div`
  display: flex;
  position: relative;
  background: #e8effb;
  margin-top: 6px;
  border-radius: 4px;
  width: 144px;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

//컨텐츠 라디오 버튼 아이콘
const ListItemRadio = styled.div`
  position: absolute;
  top: 5px;
  right: 4px;
  width: 18px;
  height: 18px;
  background: ${(props) =>
    props.selectedItem && props.selectedItem.id === props.item.id
      ? `url('${SelectedRadio}')`
      : `url('${DefaultRadio}')`};
`;

//컨텐츠 파일 아이콘
const ListItemFile = styled.div`
  width: 70px;
  height: 58px;
  background: url("${FileIllust}") no-repeat center / contain;
`;

//컨텐츠 하단의 제목
const ListItemTitle = styled.div`
  max-width: 144px;
  margin: 16px 0px;
  white-space: nowrap;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.05em;
  color: #262626;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default ListItem;
