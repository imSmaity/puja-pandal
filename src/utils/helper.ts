import uuid from "react-native-uuid";

/**
 * Returns a random id
 * @returns {String} `id` Random id
 */
export const getRandomId = (): string | number[] => {
  return uuid.v4();
};
