import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AxiosProvider } from './context/AxiosContext';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AxiosProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </AxiosProvider>
);


