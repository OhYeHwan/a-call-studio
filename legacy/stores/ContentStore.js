import { observable } from "mobx";

const ContentStore = observable({
  data: {
    projectName: null,
    pageGroupName: null,
    pageId: null,
    pageName: null,
    html: null,
  },

  setContentData(data) {
    this.data.projectName = data.projectName;
    this.data.pageGroupName = data.pageGroupName;
    this.data.pageId = data.pageId;
    this.data.pageName = data.pageName;
    this.data.html = data.html;
  },
});

export { ContentStore };
