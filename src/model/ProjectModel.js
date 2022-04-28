import { extendObservable } from "mobx";

class ProjectModel {
  constructor(data) {
    extendObservable(this, data);
  }
}

export default ProjectModel;
