import styled from "styled-components";
import { ReactComponent as DisabledGroup } from "src/static/icon/Menu_TreeView_Disabled.svg";
import { ReactComponent as DisabledList } from "src/static/icon/Menu_ListView_Disabled.svg";

const Radio = ({ mode, handleClickTreeBtn, handleClickListBtn }) => {
  return (
    <RadioLayout className="center">
      <RadioInput
        readOnly
        type="radio"
        id="tree"
        checked={mode === "tree"}
      ></RadioInput>
      <RadioLabel
        className="center"
        onClick={() => {
          handleClickTreeBtn();
        }}
      >
        <DisabledGroup className="selected_icon" alt="tree-icon" />
      </RadioLabel>
      <RadioInput
        readOnly
        type="radio"
        id="list"
        checked={mode === "list"}
      ></RadioInput>
      <RadioLabel
        className="center"
        onClick={() => {
          handleClickListBtn();
        }}
      >
        <DisabledList className="selected_icon" alt="list-icon" />
      </RadioLabel>
    </RadioLayout>
  );
};

const RadioLayout = styled.div`
  background-color: #e4e6ea;
  border-radius: 13px;
  width: 66px;
  height: 26px;
  margin-right: 14px;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.label`
  ${RadioInput} + & {
    width: 30px;
    height: 20px;
    background-color: transparent;
    border-radius: 12px;
  }

  ${RadioInput}:checked + & {
    background-color: #fff;

    .selected_icon {
      path {
        fill: #262626;
      }
    }
  }

  cursor: pointer;
`;

export default Radio;
