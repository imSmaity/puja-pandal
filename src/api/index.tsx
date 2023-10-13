import axios from "axios";
import { config } from "../apiConfig";

const axiosInstance = axios.create({
  baseURL: `${config.API_URL}/${config.API_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

export default {
  getDistrict() {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(config.DISTRICT.BASE)
        .then((res) => resolve(res.data))
        .catch((error) => reject(error));
    });
  },
};
