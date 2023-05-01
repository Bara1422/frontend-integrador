import { useState } from 'react';
import { useAxios } from '../context/AxiosContext';

export const useCreateOrder = () => {
  const [initPoint, setInitPoint] = useState('');
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const createOrder = async (userId, domicilio, localidad, items, subtotal) => {
    setLoading(true);
    try {
      const response = await axios.post('orders', {
        userId: userId,
        shippingDetails: {
          domicilio: domicilio,
          localidad: localidad,
        },
        items: items,
        shippingPrice: 250,
        subtotal: subtotal,
        total: subtotal + 250,
      });
      const { data: respuesta } = response;
      console.log(respuesta);

      setInitPoint(respuesta.data.result.init_point);
      return respuesta;
    } catch (error) {
      console.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };
  return { createOrder, initPoint, loading };
};
