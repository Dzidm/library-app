import { apiClient } from "./config";

export const apiAddAdvert =async (payload) => apiClient.post("/adverts", payload)

export  const apiGetAllAdverts = async() => apiClient.get("/adverts")

export const apiGetVendorAdverts = async() => apiClient.get("/vendors-adverts")

export const apiUpdateAdverts = async (id, payload) => apiClient.patch(`/adverts/${id}`, payload)

export const apiGetSingleAdvert =async (id) => apiClient.get(`/advert/${id}`, payload)

//*note that with GET you don't attach "payload".