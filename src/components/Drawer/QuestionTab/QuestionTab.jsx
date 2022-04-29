import List from "src/components/Drawer/QuestionTab/List";
import { ReactComponent as Empty } from "src/static/icon/empty_state.svg";
import { ReactComponent as QuestionListSVG } from "src/static/icon/ai_QL.svg";
import styled from "styled-components";

const QuestionTab = ({ afterKeywords }) => {
  // const handleQuestionListDelete = (keyword, id) => {
  //   let Qindex = questions.findIndex((i) => i.keyword === keyword);

  //   let question = {
  //     keyword: questions[Qindex].keyword,
  //     list: questions[Qindex].list.filter((q) => q.id !== id),
  //   };

  //   if (questions[Qindex].list.length === 1) {
  //     alert("삭제 불가");
  //   } else {
  //     let newQuestions = [...questions];
  //     newQuestions[Qindex] = question;
  //     setQuestions(newQuestions);
  //   }
  // };

  // const handleQuestionListAdd = (keyword, id) => {
  //   let Qindex = questions.findIndex((i) => i.keyword === keyword);
  //   let ListIndex = questions[Qindex].list.findIndex((i) => i.id === id);
  //   let newList = [...questions[Qindex].list];

  //   newList.splice(ListIndex + 1, 0, {
  //     id: new Date(),
  //     value: "",
  //   });

  //   let question = {
  //     keyword: questions[Qindex].keyword,
  //     list: newList,
  //   };

  //   let newQuestions = [...questions];
  //   newQuestions[Qindex] = question;
  //   setQuestions(newQuestions);
  // };

  return (
    <QuestionListLayout>
      <QuestionListBox>
        <QuestionListHeader>
          <QuestionListTitle>
            <QuestionListSVG />
            질문 리스트
          </QuestionListTitle>
          <QuestionListButton>저장</QuestionListButton>
        </QuestionListHeader>
        {afterKeywords.length > 0 ? (
          <QuestionListContainer>
            {afterKeywords.map((keyword, idx) => {
              return (
                <List
                  key={keyword.keywordId}
                  keyword={keyword.keyword}
                  list={keyword.questions}
                  // onQuestionListDelete={handleQuestionListDelete}
                  // handleQuestionListAdd={handleQuestionListAdd}
                />
              );
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
