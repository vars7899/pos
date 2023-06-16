import axios from "axios";

export const createNewStore = async (data: any) => {
  const response = await axios.post("/api/v1/store/add-new", data);
  return response.data;
};
