import axios from "axios";
import { API_URL } from "@env";

const FetchData = {
  fetchData: async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default FetchData;
