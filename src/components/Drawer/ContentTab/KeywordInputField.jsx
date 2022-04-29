import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import useStores from "src/hooks/useStores";

import KeywordAddButton from "../AddButton";

const KeywordInputField = () => {
  const inputRef = useRef(null);
  const [content, _setContent] = useState("");

  const { contentStore } = useStores();

  useEffect(() => {
    setContent(content);
  }, []);

  const setContent = (newContent) => {
    if (inputRef.current) {
      inputRef.current.innerText = newContent;
      _setContent(newContent);
    }
  };

  const handleInputEvent = (e) => {
    _setContent(e.target.innerText);
  };

  const handleClickAddButton = () => {
    contentStore.handleAddKeyword(content);
    setContent("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClickAddButton();
    }
  };

  return (
    <KeywordInputFieldLayout>
      <Input
        ref={inputRef}
        spellCheck={false}
        contentEditable
        onInput={handleInputEvent}
        onKeyPress={onKeyPress}
      />
      <KeywordAddButton handleClickAddButton={handleClickAddButton} />
    </KeywordInputFieldLayout>
  );
};

export default KeywordInputField;

const KeywordInputFieldLayout = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const Input = styled.span`
  display: inline-block;
  border: 1px solid #d7d9dd;
  background: #ffffff;
  font-size: 12px;
  padding: 6px;
  line-height: normal;
  border-radius: 6px;
  height: 32px;

  &:hover {
    border: 1px solid var(--color-primary);
    outline: 1px solid var(--color-primary);
  }

  &:focus {
    border: 1px solid var(--color-primary);
    outline: 1px solid var(--color-primary);
  }
`;
