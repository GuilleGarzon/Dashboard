import axios from "axios";
import { Middleware } from "../utils/snakeToCamel";

const baseURL = "http://localhost:3000";

export const getProjects = async () => {
  const result = await axios.get(`${baseURL}/dashboard_cards`);
  return Middleware(result);
};

export const getDetailsServer = async () => {
  const result = await axios.get(`${baseURL}/cpu_report`);
  return Middleware(result);
};

export const getCommitsReportData = async () => {
  const result = await axios.get(`${baseURL}/report_commits`);
  return Middleware(result);
};

export const getResume = async () => {
  const result = await axios.get(`${baseURL}/release_resume`);
  return Middleware(result);
};
