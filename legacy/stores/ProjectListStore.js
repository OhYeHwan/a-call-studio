import { observable } from "mobx";
import { funcGetProjects } from "legacy/services/ProjectService";

const ProjectListStore = observable({
  projectList: [],

  async getProjects() {
    const response = funcGetProjects();
    return await response.then((res) => this.setProjectList(res.data));
  },

  setProjectList(list) {
    this.projectList = this.changeFormat(list);
    return this.projectList;
  },

  changeFormat(data) {
    const projectList = {};
    let tmpId = 0;

    data.forEach((item) => {
      const projectInfo = {
        id: item.projectId,
        title:
          item.superAppName === null
            ? `새 프로젝트 ${(tmpId += 1)}`
            : `${item.superAppName}_${item.projectName}`,
        fileSize: "0",
        type: item.superAppName === null ? "새 프로젝트" : item.superAppName,
      };

      const newSuperAppName =
        item.superAppName === null ? "새 프로젝트" : item.superAppName;

      if (Object.keys(projectList).includes(`${newSuperAppName}`)) {
        projectList[newSuperAppName].push(projectInfo);
      } else {
        projectList[newSuperAppName] = [projectInfo];
      }
    });
    return projectList;
  },
});

export { ProjectListStore };
