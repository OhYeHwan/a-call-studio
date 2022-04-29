import List from "src/components/Drawer/QuestionTab/List";
import { ReactComponent as Empty } from "src/static/icon/empty_state.svg";
import { ReactComponent as QuestionListSVG } from "src/static/icon/ai_QL.svg";
import styled from "styled-components";

import useStores from "src/hooks/useStores";

const QuestionTab = ({ afterKeywords }) => {
  // contentTarget
  // pageGroupName, pageId

  const { projectStore, contentStore } = useStores();

  const handleClickSaveButton = () => {
    const pageGroupsIndex = projectStore.target.pageGroups.findIndex(
      (i) => i.pageGroupName === contentStore.target.pageGroupName
    );

    const pagesIndex = projectStore.target.pageGroups[
      pageGroupsIndex
    ].pages.findIndex((i) => i.pageId === contentStore.target.pageId);

    const newPage = {
      ...projectStore.target.pageGroups[pageGroupsIndex].pages[pagesIndex],
      keywords: afterKeywords,
      summary: contentStore.target.summary,
    };

    const newPages = [...projectStore.target.pageGroups[pageGroupsIndex].pages];
    newPages[pagesIndex] = newPage;

    const newPageGroup = {
      ...projectStore.target.pageGroups[pageGroupsIndex],
      pages: newPages,
    };

    const newPageGroups = [...projectStore.target.pageGroups];
    newPageGroups[pageGroupsIndex] = newPageGroup;

    projectStore.target = {
      ...projectStore.target,
      pageGroups: newPageGroups,
    };
  };

  return (
    <QuestionListLayout>
      <QuestionListBox>
        <QuestionListHeader>
          <QuestionListTitle>
            <QuestionListSVG />
            질문 리스트
          </QuestionListTitle>
          <QuestionListButton onClick={handleClickSaveButton}>
            저장
          </QuestionListButton>
        </QuestionListHeader>
        {afterKeywords.length > 0 ? (
          <QuestionListContainer>
            {afterKeywords.map((keyword) => {
              return <List key={keyword.keywordId} keyword={keyword} />;
            })}
          </QuestionListContainer>
        ) : (
          <EmptyLayout className="center column">
            <Empty />
            <EmptyText className="mt-8">
              질문리스트가 없습니다. 추천질문 만들기 버튼을 클릭해주세요.
            </EmptyText>
          </EmptyLayout>
        )}
      </QuestionListBox>
    </QuestionListLayout>
  );
};

export default QuestionTab;

const QuestionListLayout = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #d7d9dd;
  overflow-y: hidden;
`;

const QuestionListBox = styled.div`
  height: 100%;
  background-color: #f9fafc;
  display: flex;
  flex-direction: column;
`;

const QuestionListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d7d9dd;
`;

const QuestionListTitle = styled.div`
  display: flex;
  padding: 10px 17px;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  gap: 4px;
`;

const QuestionListButton = styled.button`
  width: 62px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #d7d9dd;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  line-height: 23px;
  margin-right: 8px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const QuestionListContainer = styled.div`
  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #cccccc;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  flex: 1;
  width: 100%;
  overflow-y: scroll;
`;

const EmptyLayout = styled.div`
  height: 100%;
`;

const EmptyText = styled.div`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #6d778a;
`;
