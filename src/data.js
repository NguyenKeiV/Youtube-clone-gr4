export const API_KEY = "AIzaSyDpvsU98g4kE49eGbHML9kIzbf-dyS0YiE";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else return value;
};
