import { ReactComponent as KeywordSVG } from "src/static/icon/keyword.svg";
import { ReactComponent as SummarySVG } from "src/static/icon/summary.svg";
import { ReactComponent as Empty } from "src/static/icon/empty_state.svg";
import styled from "styled-components";
import KeywordInputBox from "./KeywordInputBox";
import KeywordInputField from "./KeywordInputField";

const ContentsTab = ({
  contents,
  setContents,
  keywords,
  setKeywords,
  handleClickDelButton,
  updateKeywords,
}) => {
  return (
    <ContentTabDiv>
      <ContentBox>
        <Title>
          <SummarySVG className="center" />
          컨텐츠 요약 내용
        </Title>
        <ContentSummary
          className="scrollbar"
          placeholder="컨텐츠 요약내용을 입력해주세요."
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
      </ContentBox>
      <ContentBox>
        <Title>
          <KeywordSVG />
          컨텐츠 키워드
        </Title>
        <ContentKeyword className="scrollbar">
          {contents ? (
            <>
              <KeywordContainer className="scrollbar">
                {keywords.map((keyword) => {
                  return (
                    <KeywordInputBox
                      key={keyword.id}
                      keyword={keyword}
                      keywords={keywords}
                      handleClickDelButton={handleClickDelButton}
                      updateKeywords={updateKeywords}
                    />
                  );
                })}
                <KeywordInputField
                  keywords={keywords}
                  setKeywords={setKeywords}
                />
              </KeywordContainer>
            </>
          ) : (
            <EmptyLayout className="center column">
              <Empty />
              <EmptyText className="mt-8">
                컨텐츠 요약 내용을 작성 후 키워드를 입력해주세요
              </EmptyText>
            </EmptyLayout>
          )}
        </ContentKeyword>
      </ContentBox>
    </ContentTabDiv>
  );
};

export default ContentsTab;

const ContentTabDiv = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid var(--color-gray-line);
`;

const ContentBox = styled.div`
  height: 50%;
  background-color: #f9fafc;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-bottom: 1px solid #d7d9dd;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 17px;
  border-bottom: 1px solid var(--color-gray-line);
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
`;

const ContentSummary = styled.textarea`
  flex: 1;
  margin: 12px 17px 27px 10px;
  resize: none;
  border: none;
  background-color: #f9fafc;
  padding: 5px;

  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;

  &:focus {
    outline: none;
    border: 1px solid #4282ed;
  }
`;

const ContentKeyword = styled.div`
  flex: 1;
  padding: 8px;
  margin: 0;
  overflow-y: scroll;
`;

const KeywordContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
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
