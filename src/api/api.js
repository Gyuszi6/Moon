import axios from "axios";

export const ApiInstance = axios.create({
  baseURL: "https://ncp-dummy.staging.moonproject.io/api/toth-gyorgy",
  headers: {
    "content-type": "application/json",
  },
  timeout: 100000,
});
