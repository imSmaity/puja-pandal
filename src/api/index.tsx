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
  getDistrictMarker(_id: string) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(
          config.DISTRICT.BASE.concat("/")
            .concat(_id)
            .concat(config.MARKER.BASE)
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error));
    });
  },
  addMarker(data: any) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(config.DISTRICT.BASE.concat(config.MARKER.BASE), data)
        .then((res) => resolve(res.data))
        .catch((error) => reject(error));
    });
  },
};
