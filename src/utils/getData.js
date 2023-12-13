 import axios from "axios";

const API = import.meta.env.VITE_API_URL;
const KEY = import.meta.env.VITE_API_KEY; 

const axiosOptions = {
  method: "GET",
  url: API,
  headers: {
    'X-RapidAPI-Key': KEY,
  },
};

const getData = async () => {
  try {
    const res = await axios.request(axiosOptions);
    return res.data
  } catch (error) {
    console.log(error);
  }
};

console.log(getData());

export default getData; 