import { useState } from "react";
import styled from "styled-components";
import useStore from "src/stores/useStore";
import aiDubbingBlack from "src/static/icon/ai_dubbing_black.svg";
import aiDubbingArrowCloseGray from "src/static/icon/ai_dubbing_arrow_close_gray.svg";
import aiDubbingArrowOpenGray from "src/static/icon/ai_dubbing_arrow_open_gray.svg";
// import aiDubbingPlusGray from "src/static/icon/ai_dubbing_plus_gray.svg";
import aiDubbingPlusBlack from "src/static/icon/ai_dubbing_plus_black.svg";

const AIDubbing = () => {
  const { drawerHeightStore } = useStore();

  const [isDubbingOpen, switchIsDubbingOpen] = useState(false);
  const [dubbingText, setDubbingText] = useState("");

  const switchDubbingHeight = () => {
    switchIsDubbingOpen(!isDubbingOpen);
  };

  const handleDubbingTextChange = (e) => {
    setDubbingText(e.target.value);
  };

  return (
    <StyledAIDubbing drawerHeight={drawerHeightStore._height}>
      <DubbingHeader onClick={switchDubbingHeight}>
        <DubbingIcon src={aiDubbingBlack} alt={`${aiDubbingBlack}`} />
        <DubbingTitle>AI 더빙 추가</DubbingTitle>
        <ArrowCloseIcon
          isDubbingOpen={isDubbingOpen}
          src={aiDubbingArrowCloseGray}
          alt={`${aiDubbingArrowCloseGray}`}
        />
        <ArrowOpenIcon
          isDubbingOpen={isDubbingOpen}
          src={aiDubbingArrowOpenGray}
          alt={`${aiDubbingArrowOpenGray}`}
        />
      </DubbingHeader>
      <DubbingBody isDubbingOpen={isDubbingOpen}>
        <DubbingTextContainer>
          <textarea
            name=""
            id=""
            placeholder="컨텐츠 요약내용을 입력해주세요."
            value={dubbingText}
            onChange={handleDubbingTextChange}
          ></textarea>
        </DubbingTextContainer>
        <DubbingButtonContainer>
          <p>추가완료</p>
          <DubbingAddButton>
            <DubbingPlusIconBlack
              src={aiDubbingPlusBlack}
              alt={`${aiDubbingPlusBlack}`}
            />
            <p>AI더빙추가</p>
          </DubbingAddButton>
        </DubbingButtonContainer>
      </DubbingBody>
    </StyledAIDubbing>
  );
};

export default AIDubbing;

const StyledAIDubbing = styled.div`
  width: 252px;
  background-color: #ffffff;
  position: absolute;
  border: 1px solid #d7d9dd;
  border-radius: 6px;
  box-shadow: 0px 2px 12px rgba(6, 16, 31, 0.06);
  right: 20px;
  bottom: ${(props) => `${props.drawerHeight + 10}px`};
`;

const DubbingButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 18px;
  margin-right: 14px;

  p {
    margin-right: 6px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.02em;
    color: #9599a5;
  }
`;

const DubbingAddButton = styled.button`
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 2px;
  width: 114px;
  height: 32px;
  border: 1px solid #d7d9dd;
  border-radius: 6px;
  background: #ffffff;

  p {
    font-size: 14px;
    line-height: 23px;
    color: #262626;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DubbingTextContainer = styled.div`
  margin: 10px 14px auto 14px;
  width: 224px;
  height: 140px;

  textarea {
    width: 100%;
    height: 100%;
    padding: 8px;
    resize: none;
    background-color: #f9fafc;
    border-radius: 4px;
    border: 1px solid #d7d9dd;
    overflow-y: auto;
  }
`;

const DubbingHeader = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
  border-bottom: 1px solid #d7d9dd;
`;

const ArrowCloseIcon = styled.img`
  display: ${(props) => !props.isDubbingOpen && "none"};
  margin-left: 114px;
`;

const DubbingTitle = styled.div`
  font-weight: 700;
`;

const DubbingPlusIconBlack = styled.img`
  /* margin-left: 12px; */
  /* margin-top: 7px; */
  height: 18px;
`;

const ArrowOpenIcon = styled.img`
  display: ${(props) => props.isDubbingOpen && "none"};
  margin-left: 114px;
`;

const DubbingBody = styled.div`
  display: ${(props) => !props.isDubbingOpen && "none"};
  width: 252px;
  height: 202px;
`;

const DubbingIcon = styled.img`
  margin-left: 14px;
  margin-right: 10px;
  height: 18px;
`;
