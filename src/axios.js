import axios from "axios";

axios.defaults.headers = { Accept: "application/json" };

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
