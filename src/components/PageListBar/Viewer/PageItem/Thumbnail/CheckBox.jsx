import { useState } from "react";
import { ReactComponent as CheckBoxDefault } from "src/static/icon/CheckBox_Rect_Default.svg";
import { ReactComponent as CheckBoxSelected } from "src/static/icon/CheckBox_Rect_Selected.svg";
import styled from "styled-components";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setChecked(!checked);
  };

  return (
    <CheckBoxLayout onClick={handleClick}>
      {checked ? <CheckBoxSelected /> : <CheckBoxDefault className="default" />}
    </CheckBoxLayout>
  );
};

const CheckBoxLayout = styled.div`
  z-index: 999;
`;

export default CheckBox;
