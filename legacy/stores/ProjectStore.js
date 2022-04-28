import { observable } from "mobx";
import { funcGetContent } from "legacy/services/ContentService";
import {
  funcExportProject,
  funcGetNewProject,
  funcGetProject,
  funcSaveProject,
} from "legacy/services/ProjectService";

const ProjectStore = observable({
  data: {
    projectId: null,
    projectName: "untitle",
    superAppName: null,
    isExported: null,
    pageGroups: [],
    histories: [],
  },

  async setNewProject() {
    const response = funcGetNewProject();
    return await response.then((res) => this.setProjectData(res.data));
  },

  async getProject(id) {
    const response = funcGetProject(id);
    return await response.then((res) => {
      console.log(1);
      console.log(res.data);
      this.setProjectData(res.data);
    });
  },

  async getContent(id) {
    const response = funcGetContent(id, this.data);
    return await response.then((res) => this.setProjectData(res.data));
  },

  async saveProject(data) {
    return funcSaveProject(data);
  },

  async exportProject(data) {
    return funcExportProject(data);
  },

  setProjectData(data) {
    this.data.projectId = data.projectId;
    this.data.projectName = data.projectName;
    this.data.superAppName = data.superAppName;
    this.data.isExported = data.isExported;
    this.data.pageGroups = data.pageGroups;
    this.data.histories = data.histories;

    return this.data;
  },
});

export { ProjectStore };
