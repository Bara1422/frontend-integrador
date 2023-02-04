/* eslint-disable no-undef */
/* eslint-disable no-mixed-operators */
import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../context/AxiosContext';
import { useEffect } from 'react';

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
  loading: false,
  error: null,
  login: (email, password) => { },
  logout: () => { },
  authCheckState: () => { },
};

const authContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const history = useNavigate();
  const axios = useAxios();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [error, setError] = useState(null);

  const logout = useCallback(() => {
    setCurrentUser(null);
    setLoading(false);
    setError(null);
    localStorage.removeItem('authData');
    localStorage.removeItem('expirationDate');
  }, []);

  const checkAuthTimeout = useCallback(
    (expirationTime) => {
      setTimeout(() => {
        logout();
      }, expirationTime);
    },
    [logout]
  );

  const login = useCallback(
    async (email, password) => {
      setLoading(true);

      try {
        const response = await axios.post('/auth/login', {
          email: email,
          password: password,
        });
        const expirationDate = new Date(
          new Date().getTime() + response.data.result.expiresIn
        ).getTime();
        history('/');
        console.log(response);
        localStorage.setItem('authData', JSON.stringify(response.data.result));
        localStorage.setItem('expirationDate', expirationDate.toString());
        setCurrentUser(response.data.result);
        setLoading(false);
        setError(null);
        checkAuthTimeout(response.data.result.expiresIn);
      } catch (error) {
        console.log(error);
        setLoading(false);
        let err = error;
        let errorRes = err.response?.data ? err.response?.data : null;

        setError(errorRes);
      }
    },
    [checkAuthTimeout, history, axios]
  );

  const signin = useCallback(
    async (name, email, password) => {
      setLoading(true);
      try {
        const response = await axios.post('/auth/signin', {
          name: name,
          email: email,
          password: password,
          roleId: 2,
        });
        const expirationDate = new Date(
          new Date().getTime() + response.data.result.expiresIn
        ).getTime();
        history('/');
        localStorage.setItem('authData', JSON.stringify(response.data.result));
        localStorage.setItem('expirationDate', expirationDate.toString());
        setCurrentUser(response.data.result);
        setLoading(false);
        setError(null);
        checkAuthTimeout(response.data.result.expiresIn);
      } catch (error) {
        console.log(error);
        setLoading(false);
        let err = error;
        let errorRes = err.response?.data ? err.response?.data : null;

        setError(errorRes);
      }
    },
    [axios, history, checkAuthTimeout]
  );

  const authCheckState = useCallback(() => {
    const stringData = localStorage.getItem('authData');
    const authData = JSON.parse(String(stringData));
    console.log(authData);
    if (!authData?.token) {
      logout();
    } else {
      const expirationDate = new Date(
        parseInt(localStorage.getItem('expirationDate'))
      );
      if (expirationDate.getTime() > new Date().getTime()) {
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime())
        );
        setCurrentUser(authData);
      } else {
        logout();
      }
    }
  }, [logout, checkAuthTimeout]);

  useEffect(() => {
    authCheckState();
  }, []);

  return useMemo(() => {
    return {
      currentUser,
      loading,
      hiddenMenu,
      error,
      login,
      logout,
      signin,
      authCheckState,

    };
  }, [
    currentUser,
    loading,
    hiddenMenu,
    error,
    login,
    logout,
    signin,
    authCheckState,

  ]);
}