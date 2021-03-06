import { observable } from "mobx";
import { funcGetContents } from "legacy/services/ContentService";

const ContentListStore = observable({
  list: [],

  async getContents() {
    const response = funcGetContents();
    return await response.then((res) => this.setList(res.data));
  },

  setList(list) {
    this.list = this.changeFormat(list);
    return this.list;
  },

  changeFormat(data) {
    const contentList = {};
    data.forEach((item) => {
      const contentInfo = {
        id: item.contentId,
        title: `${item.superAppName}_${item.contentName}`,
        fileSize: "0",
        type: item.superAppName,
      };
      if (Object.keys(contentList).includes(item.superAppName)) {
        contentList[item.superAppName].push(contentInfo);
      } else {
        contentList[item.superAppName] = [contentInfo];
      }
    });
    contentList["MyApp"] = [
      {
        id: "1",
        title: "Myapp_로또말줄임표나오나안나오나",
        fileSize: "254MB",
        type: "Myapp",
      },
      { id: "2", title: "Myapp_타로", fileSize: "254KB", type: "Myapp" },
      { id: "3", title: "Myapp_노트", fileSize: "254KB", type: "Myapp" },
      { id: "4", title: "Myapp_로또", fileSize: "254KB", type: "Myapp" },
      { id: "5", title: "Myapp_타로", fileSize: "254KB", type: "Myapp" },
      { id: "6", title: "Myapp_노트", fileSize: "1GB", type: "Myapp" },
      { id: "7", title: "Myapp_로또", fileSize: "254KB", type: "Myapp" },
      { id: "8", title: "Myapp_타로", fileSize: "254MB", type: "Myapp" },
      { id: "9", title: "Myapp_노트", fileSize: "1GB", type: "Myapp" },
      { id: "10", title: "Myapp_로또", fileSize: "1GB", type: "Myapp" },
      { id: "11", title: "Myapp_타로", fileSize: "1GB", type: "Myapp" },
      { id: "12", title: "Myapp_노트", fileSize: "1GB", type: "Myapp" },
      { id: "13", title: "Myapp_로또", fileSize: "1GB", type: "Myapp" },
      { id: "14", title: "Myapp_타로", fileSize: "1GB", type: "Myapp" },
      { id: "15", title: "Myapp_노트", fileSize: "1GB", type: "Myapp" },
    ];

    contentList["Pay"] = [
      { id: "16", title: "Pay_가디건", fileSize: "10MB", type: "Pay" },
      { id: "17", title: "Pay_교재", fileSize: "10MB", type: "Pay" },
      { id: "18", title: "Pay_가방", fileSize: "10MB", type: "Pay" },
    ];

    return contentList;
  },
});

export { ContentListStore };
