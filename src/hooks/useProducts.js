import { useAxios } from "../context/AxiosContext";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const axios = useAxios();
  return useQuery(['productos'], async () => {
    const { data: products } = await axios.get('products');
    return products.data.result;
  });
};

