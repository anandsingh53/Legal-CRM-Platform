import axios from "axios";

const API = axios.create({
  baseURL: "https://legal-crm-platform.onrender.com"
});

export default API;