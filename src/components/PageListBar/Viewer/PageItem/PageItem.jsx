import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Thumbnail from "./Thumbnail/Thumbnail";
import useStores from "src/hooks/useStores";

const PageItem = ({
  mode,
  id,
  html,
  projectName,
  groupName,
  pageName,
  selectedPage,
  handleClickPageItem,
}) => {
  const [pageTitle, setPageTitle] = useState(pageName);

  const { contentStore } = useStores();

  useEffect(() => {
    if (pageTitle.length > 25) {
      let newTitle = pageTitle.slice(0, 25);
      newTitle += "...";
      setPageTitle(newTitle);
    }
  }, [pageTitle]);

  const onClick = () => {
    const data = {
      projectName,
      pageGroupName: groupName,
      pageId: id,
      pageName: pageName,
      html: html,
    };

    handleClickPageItem(id);
    contentStore.target = data;
  };

  return (
    <PageItemLayout
      className="column"
      mode={mode}
      id={id}
      selectedPage={selectedPage}
      onClick={onClick}
    >
      <PageItemTitle className="pageitem-title">{pageTitle}</PageItemTitle>
      <Thumbnail
        mode={mode}
        html={html}
        projectName={projectName}
        groupName={groupName}
        pageName={pageName}
      />
    </PageItemLayout>
  );
};

const PageItemLayout = styled.div`
  margin-top: 2px;
  padding: 0px 20px 6px 20px;
  ${(props) =>
    props.mode === "tree" &&
    css`
      padding: 2px 19px 6px 34px;
    `}

  &:hover {
    cursor: pointer;
    .thumbnail-layout {
      border: 2px solid #b9babe;
    }
    .pageitem-title {
      color: #b9babe;
    }
  }

  ${(props) =>
    props.selectedPage === props.id &&
    css`
      background: #e8effb;
      .thumbnail-layout {
        border: 2px solid #4282ed;
      }
      .pageitem-title {
        color: #4282ed;
      }

      &:hover {
        cursor: default;
        .thumbnail-layout {
          border: 2px solid #4282ed;
        }
        .pageitem-title {
          color: #4282ed;
        }
      }
    `}
`;

const PageItemTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  padding: 2px 0 4px 0;
  line-height: 22px;
  color: #262626;
`;

export default PageItem;
