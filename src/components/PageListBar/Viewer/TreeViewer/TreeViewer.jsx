import React from "react";
import styled, { css } from "styled-components";
import PageGroup from "../PageGroup";

const TreeViewer = ({
  projectName,
  mode,
  tree,
  selectedPage,
  handleClickPageItem,
}) => {
  return (
    <TreeViewerLayout mode={mode}>
      {tree.map((t) => (
        <PageGroup
          projectName={projectName}
          mode={mode}
          key={t.pageGroupId}
          selectedPage={selectedPage}
          handleClickPageItem={handleClickPageItem}
          groupName={t.pageGroupName}
          pages={t.pages}
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
