import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { MyOrders } from "../components/MyOrders/MyOrders";
import { LayoutPage, Wrapper } from "../components/UI";
import { useOrdersById } from "../hooks/useCategories";

const Orders = () => {
  const ordersId = useOrdersById();
  const { isLoading } = useQuery(['orderss']);
  console.log(ordersId);

  return (
    <LayoutPage>
      <Wrapper>
        {isLoading ? (<Spinner></Spinner>) : (
          <MyOrders orders={ordersId.data} />
        )}
      </Wrapper>
    </LayoutPage>
  );
};

export default Orders;