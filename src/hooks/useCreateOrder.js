import { useState } from "react";
import { useAxios } from "../context/AxiosContext";


export const useCreateOrder = () => {
  const [initPoint, setInitPoint] = useState('');
  const axios = useAxios();
  const createOrder = async (userId, domicilio, localidad, OrderItems, subtotal) => {
    try {
      const response = await axios.post('orders', {
        userId: userId,
        shippingDetails: {
          domicilio: domicilio,
          localidad: localidad
        },
        items: OrderItems,
        shippingPrice: 250,
        subtotal: subtotal,
        total: subtotal + 250,
      });
      setInitPoint(response.data.result.init_point);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return { createOrder, initPoint };
};