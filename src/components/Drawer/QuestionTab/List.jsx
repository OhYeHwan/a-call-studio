import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Toggle } from "src/static/icon/toggle.svg";
import ListItem from "./ListItem";

const List = ({ keyword, onQuestionListDelete, handleQuestionListAdd }) => {
  const [toggle, setToggle] = useState(true);

  const toggleList = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <ListLayout>
      <ListTitle toggle={toggle} onClick={() => toggleList()}>
        <Toggle width={10} />
        {keyword.keyword}
      </ListTitle>
      <ListBox toggle={toggle}>
        {keyword.questions.map((question) => {
          return (
            <ListItem
              key={question.questionId}
              keywordId={keyword.keywordId}
              question={question}
              onQuestionListDelete={onQuestionListDelete}
              handleQuestionListAdd={handleQuestionListAdd}
            />
          );
        })}
      </ListBox>
    </ListLayout>
  );
};

export default List;

const ListLayout = styled.div`
  margin: 0.4rem 1rem;
  transition: 0.5s;
`;

const ListTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 0.3rem 0;
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: 700;
  line-height: 22px;

  svg {
    margin-right: 0.5rem;
    transition: 0.5s;
    transform: ${(props) => (props.toggle ? "rotate(90deg)" : "none")};
  }
`;

const ListBox = styled.ul`
  display: ${(props) => (props.toggle ? "auto" : "none")};
  background: transparent;
`;
