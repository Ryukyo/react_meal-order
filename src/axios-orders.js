import axios from "axios";

const dbInstance = axios.create({
  baseURL: "https://food-order-mvp.firebaseio.com/",
});

export default dbInstance;
