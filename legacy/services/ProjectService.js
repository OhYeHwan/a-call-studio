import axios from "axios";

export const funcGetNewProject = async () => {
  const response = await axios.get(`/project/new`);
  return response;
};

export const funcGetProjects = async () => {
  const response = await axios.get(`/project/list`);
  return response;
};

export const funcGetProject = async (id) => {
  const response = await axios.get(`/project/open/${id}`);
  return response;
};

export const funcSaveProject = async (data) => {
  const response = await axios.post(`/project/save`, data);
  return response;
};

export const funcExportProject = async (data) => {
  const response = await axios.post(`project/export`, data);
  return response;
};
