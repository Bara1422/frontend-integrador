import { Spinner } from "@chakra-ui/react";

import { useEffect } from "react";
import { MyOrders } from "../components/MyOrders/MyOrders";
import { LayoutPage, Wrapper } from "../components/UI";
import { useAuth } from "../context/AuthContext";
import { useOrdersById } from "../hooks/useCategories";
import { useNavigate } from "react-router-dom";
import { authData } from "../utils/authData";
import OrdersBackground from '../assets/img/pc-escritorio.jpg';

const Orders = () => {
  const { currentUser, authCheckState } = useAuth();
  const { data: ordersId, isLoading } = useOrdersById();

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
    <LayoutPage img={OrdersBackground}>
      <Wrapper>
        {isLoading ? (<Spinner></Spinner>) : (
          <MyOrders orders={ordersId} />
        )}
      </Wrapper>
    </LayoutPage>
  );
};

export default Orders;