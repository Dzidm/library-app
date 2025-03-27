import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL

export const apiClient =axios.create({
    baseURL: baseURL,
    headers: {
        Authorization
    }
    // baseURL: `${import.meta.env.VITE_BASE_URL}` another way
})

apiClient.interceptors.request.use((config) => {
    //Get access token from localStorage
    const token = localStorage.getItem ("token")
    //Attach token to Authorization header
    config.headers.Authorization = `Bearer ${token}`
    //Return config
    return config

})