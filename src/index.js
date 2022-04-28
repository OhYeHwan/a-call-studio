import React from "react";
import { Provider } from "mobx-react";
import GlobalStyles from "./styles/GlobalStyle";
import ReactDOM from "react-dom";
import App from "./App";
import ProjectStore from "./store/ProjectStore";
import ContentStore from "./store/ContentStore";

const projectStore = new ProjectStore();
const contentStore = new ContentStore();

ReactDOM.render(
  <Provider projectStore={projectStore} contentStore={contentStore}>
    <App />
    <GlobalStyles />
  </Provider>,
  document.getElementById("root")
);
