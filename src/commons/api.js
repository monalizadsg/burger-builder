import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-react-8356c-default-rtdb.firebaseio.com/",
});

export default instance;
