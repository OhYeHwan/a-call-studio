import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DeleteIcon from "src/static/icon/ai_delete.svg";

import useStores from "src/hooks/useStores";

const KeywordInputBox = ({ keyword }) => {
  const inputRef = useRef(null);
  const [content, _setContent] = useState(keyword.keyword);

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

  const onClickDelButton = () => {
    contentStore.deleteKeyword(keyword.keywordId);
  };

  const handleUpdateKeywords = () => {
    if (content === keyword.keyword) return;
    if (content) {
      const exist = contentStore.findExistKeyword(content, keyword.keywordId);
      if (exist === -1) {
        contentStore.updateKeywords(content, keyword.keywordId);
        inputRef.current.blur();
        alert("키워드가 변경 되었습니다.");
      } else {
        alert("이미 존재하는 키워드 입니다.");
        inputRef.current.focus();
      }
    } else {
      alert("키워드를 입력해주세요");
      inputRef.current.focus();
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUpdateKeywords();
    }
  };

  return (
    <KeywordInputBoxDiv>
      <Input
        ref={inputRef}
        spellCheck={false}
        contentEditable
        onInput={handleInputEvent}
        onKeyPress={onKeyPress}
        onBlur={handleUpdateKeywords}
      />
      <DeleteImg src={DeleteIcon} onClick={onClickDelButton} />
    </KeywordInputBoxDiv>
  );
};

export default KeywordInputBox;

const KeywordInputBoxDiv = styled.div`
  position: relative;
  display: inline-block;

  &:nth-child(1) {
    margin: 3px 3px 3px 4px;
  }

  & + & {
    margin: 3px 3px 3px 3px;
  }
`;

const DeleteImg = styled.img`
  position: absolute;
  top: 9px;
  right: 4px;
  display: none;

  ${KeywordInputBoxDiv}:hover & {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
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

  ${KeywordInputBoxDiv}:hover & {
    padding-right: 22px;
    border: 1px solid var(--color-primary);
    outline: 1px solid var(--color-primary);
  }

  &:focus {
    border: 1px solid var(--color-primary);
    outline: 1px solid var(--color-primary);
  }
`;
