import axios from "axios";

const FetchData = {
  fetchData: async () => {
    try {
      const response = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default FetchData;
