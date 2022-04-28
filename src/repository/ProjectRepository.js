import axios from "axios";

class ProjectRepository {
  // URL = "http://192.168.156.97:8080";

  constructor(url) {
    this.URL = url || this.URL;
  }

  create() {
    return axios.get(`/project/new`);
  }

  findAll() {
    return axios.get(`/project/list`);
  }

  findOne(id) {
    return axios.get(`/project/open/${id}`);
  }

  save(data) {
    return axios.post(`/project/save`, data);
  }

  export(data) {
    return axios.post(`/project/export`, data);
  }
}

export default new ProjectRepository();
