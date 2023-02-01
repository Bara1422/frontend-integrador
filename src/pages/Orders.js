
import { current } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyOrders } from "../components/MyOrders/MyOrders";
import { LayoutPage, Wrapper } from "../components/UI";
import { useAuth } from "../context/AuthContext";

import * as orderActions from '../redux/orders/order-actions';



const Orders = () => {
  const { currentUser, ordersFetch } = useAuth();
  let { orders, error } = useSelector(state => state.orders);
  //USar react query

  

  const dispatch = useDispatch();
  const fetchOrders = useCallback(async () => {
    dispatch(orderActions.fetchOrders(currentUser.uid));
  }, [dispatch, currentUser]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <LayoutPage>
      <Wrapper>
        <MyOrders orders={orders} />
      </Wrapper>
    </LayoutPage>
  );
};

export default Orders;