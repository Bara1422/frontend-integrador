/* eslint-disable no-undef */
/* eslint-disable no-mixed-operators */
import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useMemo,
} from 'react';
import { useToast } from '@chakra-ui/react';
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
      console.log('checkAuthTimeout ->', new Date(expirationTime));
      console.log(expirationTime);
      setTimeout(() => {
        logout();
        console.log('checkAuthTimeout -> Run Auto logout');
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
        console.log(expirationDate);
        console.log(new Date(expirationDate));
        history('/');
        console.log(response);
        localStorage.setItem('authData', JSON.stringify(response.data.result));
        localStorage.setItem('expirationDate', expirationDate.toString());
        setCurrentUser(response.data.result);
        setLoading(false);
        setError(null);
        checkAuthTimeout(response.data.result.expiresIn);

        console.log(expirationDate.toString());
        console.log(expirationDate);

        console.log(response.data.result.expiresIn);
        console.log(response.data.result);
        console.log(response.data);
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

  const ordersFetch = useCallback(async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get('/orders/:id');
      console.log(response);
      console.log(response.data.data.result);
      const responseMap = response.data.data.result.filter(order => order.userId === userId);
      console.log(responseMap);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      let newError = error.response.data.errors.flatMap(
        (item) => item.message
      );
      setError(newError);

    }
  }, [axios]);

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
      console.log(localStorage.getItem('expirationDate'));
      console.log(parseInt(localStorage.getItem('expirationDate')));
      console.log(expirationDate);
      console.log((expirationDate.getTime() - new Date().getTime()));
      console.log(new Date().getTime());
      if (expirationDate.getTime() > new Date().getTime()) {
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime())
        );
        setCurrentUser(authData);
      } else {
        console.log('hola');
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
      ordersFetch
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
    ordersFetch
  ]);
}