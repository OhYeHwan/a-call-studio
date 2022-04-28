import React from "react";

import styled, { css } from "styled-components";
import PageItem from "../PageItem/PageItem";

const ListViewer = ({
  mode,
  list,
  projectName,
  groupName,
  selectedPage,
  handleClickPageItem,
}) => {
  return (
    <ListViewerLayout mode={mode}>
      {list.map((item) => (
        <li key={item.pageId}>
          <PageItem
            id={item.pageId}
            projectName={projectName}
            pageName={item.pageName}
            groupName={groupName}
            selectedPage={selectedPage}
            handleClickPageItem={handleClickPageItem}
          />
        </li>
      ))}
    </ListViewerLayout>
  );
};
const ListViewerLayout = styled.ul`
  ${(props) =>
    props.mode !== "list" &&
    css`
      display: none;
    `}
`;

export default ListViewer;
