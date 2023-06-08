import axios from "axios";
import * as Types from "../../global/types";

export const registerNewUser = async (data: Types.RegisterUserData) => {
  const response = await axios.post("/api/v1/user/register", data);
  return response.data;
};

export const loginUser = async (data: Types.LoginUserData) => {
  const response = await axios.post("/api/v1/user", data);
  return response.data;
};
