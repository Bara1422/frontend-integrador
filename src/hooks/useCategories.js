import { useAxios } from "../context/AxiosContext";
import { useQuery } from "react-query";

export const useCategories = () => {
  const axios = useAxios();
  return useQuery('categories', async () => {
    const { data } = await axios.get('category');

    return data.data.result;
  });
};

export const useOrders = () => {
  const axios = useAxios();
  return useQuery('orders', async () => {
    const { data } = await axios.get('orders');
    return data.data.result;
  });
};