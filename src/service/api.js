import axios from "axios";

const API = axios.create({
  baseURL: "url",
  timeout: 1000,
  headers: { "Content-Type": "application/json", Accept: "" },
});

API.interceptors.request.use(() => {});
