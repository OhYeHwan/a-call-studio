import React, { useState } from "react";
import { observer } from "mobx-react";
import styled, { css } from "styled-components";
import Count from "./Count/Count";
import Radio from "./Radio/Radio";
import Empty from "./Viewer/EmptyViewer/Empty";
import ListViewer from "./Viewer/ListViewer/ListViewer";
import TreeViewer from "./Viewer/TreeViewer/TreeViewer";
import ToggleButton from "./ToggleButton/ToggleButton";

import useStores from "src/hooks/useStores";

const PageListBar = observer(() => {
  const [toggle, setToggle] = useState(true);
  const [selectedPage, setSelectedPage] = useState(null);
  const [mode, setMode] = useState("tree");

  const { projectStore } = useStores();
  const { target } = projectStore;

  const handleClickToggleBtn = () => {
    setToggle(!toggle);
  };

  const handleClickTreeBtn = () => {
    setMode("tree");
  };

  const handleClickListBtn = () => {
    setMode("list");
  };

  const handleClickPageItem = (id) => {
    setSelectedPage(id);
  };

  return (
    <>
      <PageListBarLayout className="column" toggle={toggle}>
        <PageListBarHeader toggle={toggle}>
          <Count
            count={target.pageGroups === null ? 0 : target.pageGroups.length}
          />
          <Radio
            mode={mode}
            handleClickTreeBtn={handleClickTreeBtn}
            handleClickListBtn={handleClickListBtn}
          />
        </PageListBarHeader>
        <PageListBarBox
          className={target.pageGroups !== null && "scrollbar"}
          toggle={toggle}
        >
          {target.pageGroups === null ? (
            <Empty />
          ) : (
            <>
              <TreeViewer
                mode={mode}
                target={target}
                selectedPage={selectedPage}
                handleClickPageItem={handleClickPageItem}
              />
              {target.pageGroups.map((pageGroup) => {
                return (
                  <ListViewer
                    key={pageGroup.pageGroupId}
                    mode={mode}
                    projectName={target.projectName}
                    pageGroup={pageGroup}
                    selectedPage={selectedPage}
                    handleClickPageItem={handleClickPageItem}
                  />
                );
              })}
            </>
          )}
        </PageListBarBox>
      </PageListBarLayout>
      <ToggleButton
        toggle={toggle}
        handleClickToggleBtn={handleClickToggleBtn}
      />
    </>
  );
});

const PageListBarLayout = styled.div`
  border: 1px solid #d7d9dd;
  background-color: #f9fafc;
  min-width: 224px;

  ${(props) =>
    !props.toggle &&
    css`
      min-width: 20px;
      background-color: #f9fafc;
      border: 1px solid #d7d9dd;
    `}
`;

const PageListBarBox = styled.div`
  ${(props) =>
    !props.toggle
      ? css`
          display: none;
        `
      : css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;

          min-width: 224px;
          overflow-y: scroll;
          overflow-x: scroll;
        `}
`;

const PageListBarHeader = styled.div`
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-between;
  min-height: 45px;
  border-bottom: 1px solid #d7d9dd;

  ${(props) =>
    !props.toggle &&
    css`
      display: none;
    `}
`;

export default PageListBar;
