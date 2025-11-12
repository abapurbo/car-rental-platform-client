import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: 'https://car-rental-server-six-xi.vercel.app',
});

export default function useAxiosSecure() {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    //  Request interceptor
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user?.accessToken; // ✅ fixed typo
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    //  Response interceptor
    const responseInterceptor = instance.interceptors.response.use(
      (res) => res,
      (error) => {
        const status = error?.response?.status; //  correct path
        if (status === 401 || status === 403) {
          logOutUser()
            .then(() => navigate('/login'))
            .catch((err) => console.error("Logout failed:", err));
        }
        return Promise.reject(error); // always reject so axios can handle it
      }
    );

    //Cleanup interceptors on unmount
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOutUser, navigate]); // added navigate dependency

  return instance;
}
