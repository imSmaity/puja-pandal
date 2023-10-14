import { IDistrict } from "../redux/map/types";

const getSimplifyDistricts = (districts: IDistrict[]): IDistrict[][] => {
  const length = districts.length;
  const halfLengthWithRound = Math.round(length / 2);
  const simplifyArray = [];

  for (let i = 0; i < halfLengthWithRound; i++) {
    if (halfLengthWithRound + i < length) {
      const subArray = [districts[i], districts[halfLengthWithRound + i]];
      simplifyArray.push(subArray);
    } else {
      simplifyArray.push([districts[i]]);
    }
  }

  return simplifyArray;
};

export default getSimplifyDistricts;
