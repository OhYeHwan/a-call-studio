import React from "react";

import styled, { css } from "styled-components";
import PageItem from "../PageItem/PageItem";

const ListViewer = ({
  mode,
  projectName,
  pageGroup,
  selectedPage,
  handleClickPageItem,
}) => {
  const { pages, pageGroupName } = pageGroup;

  return (
    <ListViewerLayout mode={mode}>
      {pages.map((page) => (
        <li key={page.pageId}>
          <PageItem
            mode={mode}
            projectName={projectName}
            page={page}
            pageGroupName={pageGroupName}
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
