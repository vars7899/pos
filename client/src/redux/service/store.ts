import axios from "axios";

export const createNewStore = async (data: any) => {
  const response = await axios.post("/api/v1/store/add-new", data);
  return response.data;
};

export const getUserStores = async () => {
  const response = await axios.get("/api/v1/store");
  return response.data;
};