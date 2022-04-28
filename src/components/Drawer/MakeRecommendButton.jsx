import React from "react";
import { ReactComponent as Arrow } from "src/static/icon/arrow_right.svg";
import styled from "styled-components";

const RecommendMake = ({ contents, keywords, setQuestions }) => {
  //API호출 받아서 만드는 함수
  const makeRecommend = () => {
    let questionArray = [];
    keywords.forEach((keyword) => {
      questionArray.push({
        keyword: keyword.content,
        list: [
          {
            id: 1,
            value:
              "티베로는 어떤 시스템인가? 티베로는 어떤 시스템인가? 티베로는",
          },
          {
            id: 2,
            value: "티베로는 어떤 시스템인가? 티베로는 어떤 시스템인가?",
          },
          { id: 3, value: "티베로는 어떤 시스템인가? 티베로는" },
        ],
      });
    });
    setQuestions(questionArray);
  };

  return (
    <RecommendMakeBtn
      className="column center"
      disabled={!contents.length || !keywords.length}
      onClick={makeRecommend}
    >
      <ArrowDiv>
        <Arrow
          width={22}
          fill={!contents.length || !keywords.length ? "#BCBCBC" : "white"}
        />
      </ArrowDiv>
      <p className="mt-8">추천질문</p> <p>만들기</p>
    </RecommendMakeBtn>
  );
};

export default RecommendMake;

const RecommendMakeBtn = styled.button`
  transition: all 0.15s;
  width: 70px;
  height: 120px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  padding: 1.5rem 0;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.01em;
  color: white;
  background: var(--color-primary);

  &:disabled {
    color: var(--color-black-text-sub);
    border: 1px solid var(--color-gray-line);
    background: var(--color-gray-line2);
    cursor: default;
  }

  &:hover {
    &:not([disabled]) {
      background: #306eda;
    }
  }
`;

const ArrowDiv = styled.div`
  width: 22px;
  height: 22px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 100%;
`;
