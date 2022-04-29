import React, { useState } from "react";
import styled, { css } from "styled-components";
import TriangleIcon from "src/static/icon/List_Close.svg";
import FolderIcon from "src/static/icon/Folder.svg";
import PageItem from "./PageItem/PageItem";

const PageGroup = ({
  mode,
  projectName,
  pageGroup,
  selectedPage,
  handleClickPageItem,
}) => {
  const [open, setOpen] = useState(false);

  const { pageGroupName, pages } = pageGroup;

  const handleClickToggleBtn = () => {
    setOpen(!open);
  };

  return (
    <div className="column">
      <PageGroupToggleBtn onClick={handleClickToggleBtn}>
        <Triangle open={open} src={TriangleIcon} alt="triangle-icon" />
        <Folder src={FolderIcon} alt="folder-icon" />
        <PageGroupName>{pageGroupName}</PageGroupName>
      </PageGroupToggleBtn>
      <PageGroupList open={open}>
        {pages.map((page) => (
          <li key={page.pageId}>
            <PageItem
              mode={mode}
              projectName={projectName}
              pageGroupName={pageGroupName}
              page={page}
              selectedPage={selectedPage}
              handleClickPageItem={handleClickPageItem}
            />
          </li>
        ))}
      </PageGroupList>
    </div>
  );
};

const PageGroupToggleBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 0 8px 18px;
  cursor: pointer;
`;

const Triangle = styled.img`
  width: 16px;
  height: 16px;
  transition: all ease 1s;

  ${(props) =>
    !props.open
      ? css`
          transform: translateY(-2px) rotate(0deg);
        `
      : css`
          transform: translateY(-2px) rotate(90deg);
        `}
`;

const Folder = styled.img`
  width: 24px;
  height: 24px;
`;

const PageGroupName = styled.div`
  position: relative;
  bottom: 1px;
  font-weight: 500;
  font-size: 14px;
  color: #566384;
`;

const PageGroupList = styled.ul`
  ${(props) =>
    !props.open &&
    css`
      display: none;
    `}
`;

export default PageGroup;
