import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import Button from "./Button";
import Dialog from "./Dialog/Dialog";

import FilePlus from "src/static/icon/File_plus.svg";
import FileImport from "src/static/icon/File_Import.svg";
import FileView from "src/static/icon/File_View.svg";
import Question from "src/static/icon/Question.svg";
import Select from "src/static/icon/Select.svg";

import { observer } from "mobx-react";

import useStores from "src/hooks/useStores";

const MenuBar = observer(() => {
  const [contentOpen, setContentOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const { projectStore, contentStore } = useStores();
  const { target, projectList, saveState, exportState } = projectStore;
  const { contentList } = contentStore;

  useEffect(() => {
    projectStore.getProjectList();
    contentStore.getContentList();
  }, []);

  const handleClickSaveButton = () => {
    if (target.projectId === null) {
      console.log("빈 프로젝트");
      return;
    }
    projectStore.saveProject(target).then(() => {
      projectStore.getProjectList();
    });
  };

  const handleClickExportButton = () => {
    if (target.projectId === null) {
      console.log("빈 프로젝트");
      return;
    }
    projectStore.exportProject(target).then((res) => {
      console.log(res);
    });
  };

  const handleProjectLoad = (id) => {
    return projectStore.loadProject(id);
  };

  const handleContentLoad = (id) => {
    return projectStore.loadContent(id);
  };

  const handleOpenContentsDialog = () => {
    setContentOpen(true);
  };

  const handleCloseContentsDialog = () => {
    setContentOpen(false);
  };

  const handleOpenProjectsDialog = () => {
    setProjectOpen(true);
  };

  const handleCloseProjectsDialog = () => {
    setProjectOpen(false);
  };

  const handleNewProjectButtonClick = () => {
    window.open("https://ohyehwan.github.io/a-call-studio/", "_blank");
  };

  return (
    <>
      <MenuBarLayout>
        <ProjectButtonGroup>
          <IconButton icon={FilePlus} onClick={handleNewProjectButtonClick}>
            새프로젝트
          </IconButton>
          <IconButton icon={FileImport} onClick={handleOpenContentsDialog}>
            컨텐츠 불러오기
          </IconButton>
          <IconButton icon={FileView} onClick={handleOpenProjectsDialog}>
            프로젝트 보기
          </IconButton>
        </ProjectButtonGroup>
        <FuncButtonGroup>
          <QuestionButtonGroup>
            <IconButton icon={Select} variant="secondary">
              선택된 페이지 추천질문 만들기
            </IconButton>
            <IconButton icon={Question} variant="secondary">
              모든페이지 추천질문 만들기
            </IconButton>
          </QuestionButtonGroup>
          <VerticalLine />
          <ButtonGroup>
            <Button
              onClick={handleClickSaveButton}
              disabled={
                saveState === true ||
                target.projectName !== null ||
                target.superAppName !== null
              }
              loading={saveState}
            >
              저장
            </Button>
            <Button
              onClick={handleClickExportButton}
              disabled={
                exportState === true ||
                target.projectName !== null ||
                target.superAppName !== null
              }
              loading={exportState}
            >
              내보내기
            </Button>
          </ButtonGroup>
        </FuncButtonGroup>
      </MenuBarLayout>
      {contentOpen && (
        <Dialog
          type="content"
          list={contentList}
          close={handleCloseContentsDialog}
          handleLoadButtonClick={handleContentLoad}
        />
      )}
      {projectOpen && (
        <Dialog
          type="project"
          list={projectList}
          close={handleCloseProjectsDialog}
          handleLoadButtonClick={handleProjectLoad}
        />
      )}
    </>
  );
});

const MenuBarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 52px;
  width: 100%;
  background: linear-gradient(90deg, #6aaaf4 0%, #5584f4 49.99%, #355adc 100%);
`;

const ProjectButtonGroup = styled.div`
  display: flex;
  padding-left: 13px;
`;

const FuncButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

const QuestionButtonGroup = styled.div`
  display: flex;
  padding-right: 8px;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 28px;
  background: rgba(255, 255, 255, 0.28);
`;

const ButtonGroup = styled.div`
  padding-left: 8px;
`;

export default MenuBar;
