import { api } from "./axiosInstance";

export const loginRequest = async (data) => {
    const response = await api.post("/auth/login", data)
    return response.data;
}

export const createBlogPost = async (data) => {
    const response = await api.post("/blogs", data, {
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    });
    return response.data;
}

export const getAllBlogPosts = async () => {
    const response = await api.get("/blogs");
    return response.data;
}

export const getBlogPost = async (id) => {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
}

export const editBlogPost = async (id, data) => {

    console.log("id: ")
    console.log(id)
    console.log(data)
    const response = await api.put(`/blogs/${id}`, data, {
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    });

    return response.data;
}

export const deleteBlogPost = async (id) => {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
}