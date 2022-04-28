import { observer } from "mobx-react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";

import useStore from "./stores/useStore";

import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import PageListBar from "./components/PageListBar/PageListBar";
import ContentViewer from "./components/ContentViewer/ContentViewer";
import Drawer from "./components/Drawer/Drawer";

const App = observer(() => {
  const { messageDialogStore } = useStore();

  return (
    <>
      <GlobalStyles />
      <Header />
      <MenuBar />
      <AppContainer>
        <PageListBar />
        <AppMain>
          <ContentViewer />
          <Drawer />
        </AppMain>
      </AppContainer>
      {messageDialogStore._messageDialog}
      <AppBrowserWidthMessage />
    </>
  );
});

const AppContainer = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 0;
  position: relative;
`;

const AppMain = styled.div`
  position: relative;
  background-color: #e5e6e9;
  width: 100%;
  min-width: 345px;
  overflow-y: hidden;
`;

const AppBrowserWidthMessage = () => {
  return (
    <BrowserWidthMessageLayout>
      <div>브라우저 화면의 너비를 1100px 이상으로 조정해야</div>
      <div>서비스를 이용할 수 있습니다.</div>
    </BrowserWidthMessageLayout>
  );
};

const BrowserWidthMessageLayout = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background-color: #262626;
    color: #ffffff;
  }
`;

export default App;
