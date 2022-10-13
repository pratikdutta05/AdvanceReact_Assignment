import axios from "axios";

const resetURl = "https://api.openweathermap.org/data/2.5/weather";
const appid = "eb64305885b61f636c471c8298979a28";

export const searchAction = (q: string) => {
  return axios.get(resetURl, { params: { q, appid } });
};
