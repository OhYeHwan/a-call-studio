import {
  observable,
  makeObservable,
  action,
  runInAction,
  computed,
  toJS,
} from "mobx";
import projectRepository from "src/repository/ProjectRepository";
import contentRepository from "src/repository/ContentRepository";
import { uuidv4 } from "src/utils/uuid";

class ProjectStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _saveState = false;

  @observable
  _exportState = false;

  @observable
  _projectList = {
    Abook: [],
    MyApp: [],
    Pay: [],
  };

  @observable
  _target = {
    projectId: uuidv4(),
    projectName: null,
    superAppName: null,
    isExported: "N",
    size: 0,
    pageGroups: null,
    histories: null,
  };

  @computed
  get saveState() {
    return toJS(this._saveState);
  }

  @computed
  get exportState() {
    return toJS(this._exportState);
  }

  @computed
  get projectList() {
    return toJS(this._projectList);
  }

  @computed
  get target() {
    return toJS(this._target);
  }

  set saveState(value) {
    this._saveState = value;
  }

  set exportState(value) {
    this._exportState = value;
  }

  set projectList(value) {
    this._projectList = value;
  }

  set target(value) {
    this._target = value;
  }

  @action
  async getProjectList() {
    try {
      const response = await projectRepository.findAll();
      const data = response.data;
      runInAction(() => {
        this.projectList = this.changeFormat(data);
      });
    } catch (e) {
      runInAction(() => {
        console.log(e);
      });
    }
  }

  @action
  async loadProject(id) {
    try {
      const response = await projectRepository.findOne(id);
      const data = response.data;
      runInAction(() => {
        this.target = data;
      });
    } catch (e) {
      runInAction(() => {
        console.log(e);
      });
    }
  }

  @action
  async loadContent(id) {
    try {
      const response = await contentRepository.findOne(id, this.target);
      runInAction(() => {
        this.target = response.data;
      });
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async saveProject(data) {
    this.saveState = true;
    try {
      const response = await projectRepository.save(data);
      this.saveState = false;
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async exportProject(data) {
    this.exportState = true;

    try {
      const response = await projectRepository.export(data);
      this.exportState = false;
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  changeFormat(data) {
    const projectList = {
      ABOOK: [],
      MyApp: [],
      Pay: [],
    };
    data.forEach((item) => {
      const projectInfo = {
        id: item.projectId,
        title: `${item.superAppName}_${item.projectName}`,
        fileSize: item.size,
        type: item.superAppName,
      };

      if (Object.keys(projectList).includes(item.superAppName)) {
        projectList[item.superAppName].push(projectInfo);
      } else {
        projectList[item.superAppName] = [projectInfo];
      }
    });
    return projectList;
  }
}

export default ProjectStore;
