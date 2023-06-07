import axios from "axios";
import { Middleware } from "../utils/snakeToCamel";

const baseURL = "http://localhost:3000/users";

export const getUsers = async () => {
  const result = await axios.get(baseURL);
  return Middleware(result);
};

export const getUser = async (id) => {
  const result = await axios.get(`${baseURL}/${id}`);
  return result;
};

export const newUser = async (request_body) => {
  const result = await axios.post(baseURL, request_body);
  return Middleware(result);
};

export const editUser = async (request_body, id) => {
  const result = await axios.put(`${baseURL}/${id}`, request_body);
  return Middleware(result);
};

export const deleteUser = async (id) => {
  const result = await axios.delete(`${baseURL}/${id}`);
  return result;
};


