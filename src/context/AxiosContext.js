import { createContext, useContext, useMemo } from 'react';
import Axios from 'axios';

export const AxiosContext = createContext();

export function AxiosProvider({ children }) {
  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: `https://integradorbackend-production.up.railway.app/api/v1`,
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    // INTERCEPTOR
    axios.interceptors.request.use((config) => {
      const data = localStorage.getItem('authData') || null;
      const authData = data ? JSON.parse(data) : null;
      if (authData?.token) {
        config.headers.Authorization = `Bearer ${authData.token}`;
      }
      return config;
    },
      error => { return Promise.reject(error); });
    return axios;
  }, []);

  return (
    <AxiosContext.Provider value={axios}> {children} </AxiosContext.Provider>
  );
}

export function useAxios() {
  return useContext(AxiosContext);
}
