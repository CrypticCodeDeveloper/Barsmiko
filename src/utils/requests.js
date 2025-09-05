import { api } from "./axiosInstance";

export const loginRequest = async (data) => {
    const response = await api.post("/auth/login", data)
    return response.data;
}