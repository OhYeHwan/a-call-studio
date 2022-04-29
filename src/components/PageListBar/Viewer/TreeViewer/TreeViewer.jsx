import React from "react";
import styled, { css } from "styled-components";
import PageGroup from "../PageGroup";

const TreeViewer = ({ mode, target, selectedPage, handleClickPageItem }) => {
  const { pageGroups, projectName } = target;

  return (
    <TreeViewerLayout mode={mode}>
      {pageGroups.map((pageGroup) => (
        <PageGroup
          key={pageGroup.pageGroupId}
          mode={mode}
          projectName={projectName}
          pageGroup={pageGroup}
          selectedPage={selectedPage}
          handleClickPageItem={handleClickPageItem}
        />
      ))}
    </TreeViewerLayout>
  );
};

const TreeViewerLayout = styled.div`
  ${(props) =>
    props.mode !== "tree" &&
    css`
      display: none;
    `}
`;

export default TreeViewer;
