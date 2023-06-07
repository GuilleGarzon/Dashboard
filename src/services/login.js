import axios from "axios";
import { Middleware } from "../utils/snakeToCamel";

const baseURL = "http://localhost:3000/login";

export const login = async (user, password) => {
  const result = await axios.get(`${baseURL}?user=${user}&password=${password}`);
  return Middleware(result);
};  
