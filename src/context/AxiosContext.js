import { createContext, useContext, useMemo } from 'react';
import Axios from 'axios';

export const AxiosContext = createContext();

export function AxiosProvider({ children }) {
  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    const instance = Axios.create({
      baseURL: `http://localhost:3000`,
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    // INTERCEPTOR
    axios.interceptors.request.use((config) => {
      const data = localStorage.getItem('authData') || null;
      const authData = data ? JSON.parse(data) : null;
      if (authData?.result.token) {
        config.headers.Authorization = `Bearer ${authData.result.token}`;
      }
      return config;
    });
    instance.interceptors.request.use((config) => {
      const data = localStorage.getItem('authData') || null;
      const authData = data ? JSON.parse(data) : null;
      if (authData?.result.token) {
        config.headers.Authorization = `Bearer ${authData.result.token}`;
      }
      return config;
    });
    return axios;
  }, []);

  return (
    <AxiosContext.Provider value={axios}> {children} </AxiosContext.Provider>
  );
}

export function useAxios() {
  return useContext(AxiosContext);
}
