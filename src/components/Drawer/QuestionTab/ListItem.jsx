import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import QuestionAddButton from "../AddButton";
import QuestionDeleteButton from "../DeleteButton";

const ListItem = ({
  id,
  keyword,
  question,
  onQuestionListDelete,
  handleQuestionListAdd,
}) => {
  const inputRef = useRef(null);
  const [value, _setValue] = useState(question);

  useEffect(() => {
    setValue(value);
  }, []);

  useEffect(() => {
    if (value === "") {
      inputRef.current.focus();
    }
  }, []);

  const setValue = (newValue) => {
    if (inputRef.current) {
      inputRef.current.innerText = newValue;
      _setValue(newValue);
    }
  };

  const handleInputEvent = (e) => {
    _setValue(e.target.innerText);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const onClickQuestionListDelete = () => {
    onQuestionListDelete(keyword, id);
  };

  const handleClickAddButton = () => {
    handleQuestionListAdd(keyword, id);
  };

  return (
    <ListItemLayout>
      <ListItemContent
        ref={inputRef}
        contentEditable
        spellCheck={false}
        onInput={handleInputEvent}
        onKeyPress={onKeyPress}
      />
      <QuestionDeleteButton onClickDeleteButton={onClickQuestionListDelete} />
      <QuestionAddButton handleClickAddButton={handleClickAddButton} />
    </ListItemLayout>
  );
};

export default ListItem;

const ListItemLayout = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;

  .icon-button {
    display: none;
  }

  &:hover .icon-button {
    display: flex;
  }

  & + & {
    margin-top: 4px;
  }
`;

const ListItemContent = styled.span`
  display: inline-block;
  padding: 5px 8px 5px 4px;
  border-radius: 6px;
  /* word-break: nowrap; */
  /* text-overflow: clip; */
  /* overflow: hidden; */
  /* white-space: nowrap; */

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;

  ${ListItemLayout}:hover & {
    border: 1px solid var(--color-primary);
    outline: 1px solid var(--color-primary);
    background: #fff;
  }

  &:focus {
    border: 1px solid var(--color-primary);
    outline: 1px solid var(--color-primary);
    background: #fff;
  }
`;
