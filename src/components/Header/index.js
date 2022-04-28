import React, { useEffect } from "react";
import styled from "styled-components";

import useStores from "src/hooks/useStores";
import { observer } from "mobx-react";

const Header = observer(() => {
  const { projectStore } = useStores();
  const { target } = projectStore;

  useEffect(() => {
    console.log(target);
  });

  return (
    <>
      <HeaderContainer>
        <HeaderLogoContainer>
          <HeaderLogo>A-call Studio</HeaderLogo>
          {target.projectName === null ? null : (
            <>
              <HeaderVerticalLine />
              <HeaderTitle>
                {target.superAppName === ""
                  ? target.projectName
                  : `${target.superAppName}_${target.projectName}`}
              </HeaderTitle>
            </>
          )}
        </HeaderLogoContainer>
      </HeaderContainer>
    </>
  );
});

export default Header;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  min-height: 32px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(90deg, #6aaaf4 0%, #5584f4 49.99%, #355adc 100%);
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

export const HeaderLogo = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  padding-right: 7px;
`;

export const HeaderVerticalLine = styled.div`
  width: 1px;
  height: 14px;
  background: rgba(255, 255, 255, 0.28);
`;

export const HeaderTitle = styled.span`
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #ffffff;
  padding-left: 7px;
  opacity: 0.8;
`;
