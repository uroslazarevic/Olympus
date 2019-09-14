import axios from "axios";

const user = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export default user;
