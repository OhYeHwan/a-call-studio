import { observable, makeObservable, computed, toJS } from "mobx";

import { uuidv4 } from "src/utils/uuid";

import { referenceData } from "src/data";

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

  loadContent() {
    this.target = referenceData;
  }

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
}

export default ProjectStore;
