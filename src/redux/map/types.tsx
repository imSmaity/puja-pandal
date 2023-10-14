export interface IDistrict {
  _id: string;
  name: string;
  image: string;
  latitude: number;
  longitude: number;
  cts: string;
}

export interface IMap {
  districts: IDistrict[][];
}
