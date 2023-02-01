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
  const toast = useToast();
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
        localStorage.setItem('authData', JSON.stringify(response.data));
        localStorage.setItem('expirationDate', expirationDate.toString());
        setCurrentUser(response.data.result.name);
        setLoading(false);
        setError(null);
        checkAuthTimeout(response.data.result.expiresIn);
        history('/');
        console.log(response.data.result.name);
        console.log(response);

      } catch (error) {
        setLoading(false);
        let newError = error.response.data.errors.flatMap(
          (item) => item.message
        );

        setError(newError.join(' '));
        toast({
          title: 'Login Error',
          description: newError.join(', '),
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    },
    [checkAuthTimeout, history, axios, toast]
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
        localStorage.setItem('authData', JSON.stringify(response.data));
        localStorage.setItem('expirationDate', expirationDate.toString());
        setCurrentUser(response.data.result.name);
        setLoading(false);
        setError(null);
        checkAuthTimeout(response.data.result.expiresIn);
        history('/');
      } catch (error) {
        setLoading(false);
        let newError = error.response.data.errors.map((item) => item.message);
        setError(newError);
        toast({
          title: 'Register Error',
          description: newError.join(', '),
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    },
    [axios, toast, history, checkAuthTimeout]
  );

  const authCheckState = useCallback(() => {
    const stringData = localStorage.getItem('authData');
    const authData = JSON.parse(String(stringData));
    if (!authData) {
      logout();
    } else {
      const expirationDate = new Date(
        parseInt(localStorage.getItem('expirationDate'))
      );
      if (expirationDate > new Date()) {
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        );
        setCurrentUser(authData);
      } else {
        logout();
      }
    }
  }, [logout, checkAuthTimeout]);

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