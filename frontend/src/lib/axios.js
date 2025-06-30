import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:4000/api"
      : "https://talkio-backend.onrender.com/api", // ✅ full backend base URL for production
  withCredentials: true, // ✅ send cookies (required for auth)
});
