
import { onSnapshot, addDoc, collection } from 'firebase/firestore';
import { db, getOrders } from '../../firebase/firebase.utils2';


export const START_ORDER = 'CREATE_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL';
export const PURCHASE_INIT = 'PURCHASE_INIT';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';
export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';

export const createOrderSuccess = (orderData) => {
  return {
    type: CREATE_ORDER_SUCCESS,
    orderData: orderData,
  };
};

export const createOrderFail = (error) => {
  return {
    type: CREATE_ORDER_FAIL,
    error: error,
  };
};

export const createOrderStart = () => {
  return {
    type: START_ORDER,
  };
};


export const createOrder = (orderData) => {
  return async (dispatch) => {
    dispatch(createOrderStart());

    try {
      const createdAt = new Date();
      const orderRef = await addDoc(collection(db, 'orders'), {
        createdAt: createdAt,
        ...orderData,
      });
      onSnapshot(orderRef, async (snapShot) => {
        dispatch(createOrderSuccess({ id: snapShot.id, ...snapShot.data() }));
      });
    } catch (error) {
      dispatch(createOrderFail(error));
    }
  };
};

export const purchaseInit = () => ({
  type: PURCHASE_INIT,
});

export const fetchOrderSuccess = (orders) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrderFail = (error) => {
  return {
    type: FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrderStart = () => {
  return {
    type: FETCH_ORDERS_START,
  };
};

export const fetchOrders = (userId) => {
  return async (dispatch) => {
    dispatch(fetchOrderStart());
    try {
      const fetchedOrders = await getOrders(userId);
      dispatch(fetchOrderSuccess(fetchedOrders));
    } catch (error) {
      dispatch(fetchOrderFail(error));
    }
  };
};