import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const newPost = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const updatePost = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const deletePost = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, newPost, updatePost, deletePost };
