import { useAxios } from "../context/AxiosContext";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const useCategories = () => {
  const axios = useAxios();
  return useQuery(['categories'], async () => {
    const { data } = await axios.get('category');

    return data.data.result;
  });
};

export const useOrdersById = (userId) => {
  const stringData = localStorage.getItem('authData');
  const authData = JSON.parse(stringData);
  const axios = useAxios();
  const { currentUser } = useAuth();
  console.log(currentUser);
  console.log(authData);
  return useQuery(['orderss', currentUser.userId], async () => {
    const { data } = await axios.get('orders');
    const orders = await data.data.result;
    const filteredOrders = await orders.filter(order => order.userId === authData.userId);
    const ordersEnd = filteredOrders.map(order => {
      const newCreatedAt = order.createdAt.substring(0, 10);
      const newUpdatedAt = order.updatedAt.substring(0, 10);
      return {
        ...order,
        createdAt: newCreatedAt,
        updatedAt: newUpdatedAt,
      };
    });
    console.log(ordersEnd);
    return ordersEnd;
    
  });
};

export const useGetOrdersByOrderId = (orderId) => {
  const [ordersId, setOrdersId] = useState(orderId);
  const stringData = localStorage.getItem('authData');
  const authData = JSON.parse(stringData);
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