import axios from "axios";

class ContentRepository {
  // URL = "http://192.168.156.97:8080";

  constructor(url) {
    this.URL = url || this.URL;
  }

  findAll() {
    return axios.get(`/content/list`);
  }

  findOne(id, data) {
    return axios.post(`/content/open/${id}`, data);
  }
}

export default new ContentRepository();
