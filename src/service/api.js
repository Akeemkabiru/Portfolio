import axios from "axios";

const API = axios.create({
  baseURL: "url",
  headers: { "Content-Type": "application/json", Accept: "" },
});

API.interceptors.request.use(() => {});
