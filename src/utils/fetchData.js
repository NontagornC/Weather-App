import axios from "axios";

const fetchData = async (url) => {
  try {
    let data = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default fetchData;
