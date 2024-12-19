import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import img from "../../assets/images/place.png";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://192.168.10.22:8052",
  prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["overview", "host"],
  endpoints: () => ({}),
});

export const imageUrl = "http://192.168.10.22:8052";
export const placeImage = img;
