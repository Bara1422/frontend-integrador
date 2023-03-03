import { useAxios } from '../context/AxiosContext';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useMemo } from 'react';

export const useCategories = () => {
  const axios = useAxios();
  return useQuery(['categories'], async () => {
    const { data } = await axios.get('category');

    return data.data.result;
  });
};

export const useOrdersById = () => {
  const stringData = localStorage.getItem('authData');
  const authData = JSON.parse(stringData);
  const axios = useAxios();
  const [error, setError] = useState(null);
  const [ordersState, setOrdersState] = useState(null);
  return useQuery(['orderss', authData.userId], async () => {
    try {
      const { data } = await axios.get('orders');
      const orders = await data.data.result;

      setOrdersState(orders);
      const filteredOrders = await orders.filter(
        (order) => order.userId === authData.userId
      );
      const ordersEnd = filteredOrders.map((order) => {
        const newCreatedAt = order.createdAt.substring(0, 10);
        const newUpdatedAt = order.updatedAt.substring(0, 10);
        return {
          ...order,
          createdAt: newCreatedAt,
          updatedAt: newUpdatedAt,
        };
      });

      return ordersEnd;
    } catch (e) {
      setError(e.message);
    }
  });
};

export const useGetOrderById = (orderId) => {
  const { data: ordersEnd } = useOrdersById();

  return useMemo(() => {
    if (!ordersEnd) {
      return null;
    }
    const filteredOrder = ordersEnd.filter((order) => order.id === orderId);

    return filteredOrder;
  }, [ordersEnd, orderId]);
};

export const useGetOrdersByOrderId = (orderId) => {
  const axios = useAxios();
  return useQuery([orderId], async () => {
    const { data } = await axios.get(`orders/${orderId}/order-items`);
    return data;
  });
};

export const useGetProducts = () => {
  const axios = useAxios();
  return useQuery(['products'], async () => {
    const { data } = await axios.get('products');
    return data.data;
  });
};
