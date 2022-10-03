import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: "localhost:8081/",
});

export default api;
