import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5500",
    headers: { "Content-Type": "application/json" },
    timeout: 10000
});

// ✅ Request Interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ✅ Response Interceptor
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            console.error("API Error:", error.response.data?.message || error.message);
            toast.error(error.response.data?.message || error.message)
            if (error.response.status === 401) {
                window.location.href = "/admin/login";
            }
        } else if (error.request) {
            console.error("No response received from server.");
        } else {
            console.error("Request setup error:", error.message);
        }
        return Promise.reject(error);
    }
);