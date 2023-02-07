import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { MyOrders } from "../components/MyOrders/MyOrders";
import { LayoutPage, Wrapper } from "../components/UI";
import { useAuth } from "../context/AuthContext";
import { useOrdersById } from "../hooks/useCategories";
import { useNavigate } from "react-router-dom";
import { authData } from "../utils/authData";

const Orders = () => {
  const { currentUser, authCheckState } = useAuth();
  const { data: ordersId, isLoading, refetch } = useOrdersById();

  const navigate = useNavigate();
  console.log(ordersId);
  console.log(currentUser, authData);

  useEffect(() => {
    if (!currentUser && !authData) {
      navigate('/login');
    }
  }, [navigate, currentUser]);

  useEffect(() => {
    authCheckState();
  }, [authCheckState]);

  return (
    <LayoutPage>
      <Wrapper>
        {isLoading ? (<Spinner></Spinner>) : (
          <MyOrders orders={ordersId} />
        )}
      </Wrapper>
    </LayoutPage>
  );
};

export default Orders;