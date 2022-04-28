import axios from "axios";

// const server = "http://192.168.156.97:8080";

export const funcGetContents = async () => {
  const response = await axios.get(`/content/list`);
  return response;
};

export const funcGetContent = async (id, data) => {
  const response = await axios.post(`/content/open/${id}`, data);
  return response;
};
