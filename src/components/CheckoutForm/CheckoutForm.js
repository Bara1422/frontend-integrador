import { FormSectionStyled } from "./CheckoutFormElements";
import useForm from '../../hooks/useForm';
import { FormStyled, Input, Spinner } from '../UI';
import { CardSummary } from '../CardSummary/CardSummary';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from 'react-query';
import * as orderActions from '../../redux/orders/order-actions';
import * as cartActions from '../../redux/cart/cart-actions';
import { useAuth } from "../../context/AuthContext";
import { useCreateOrder } from "../../hooks/useCreateOrder";
import {
  useDisclosure, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button
} from '@chakra-ui/react';
import { useState } from "react";
import { useAxios } from "../../context/AxiosContext";
import { useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";




export const CheckoutForm = () => {
  const { initPoint, createOrder, ola } = useCreateOrder();

  const { isOpen, onOpen, onClose } = useDisclosure();

  /*  const axios = useAxios(); */
  /*   const [mutate, { isLoading, error, data }] = useMutation(async () => {
      const { data } = await axios.post('/orders');
      return data;
    }); */



  //TODO: no usar el Selector, utlizar el hook useAuth() creamos en el AuthContext
  const { currentUser, loading } = useAuth();
  console.log(currentUser);

  const stringData = localStorage.getItem('authData');
  const authData = JSON.parse(stringData);
  const { cartItems } = useSelector(state => state.cart);
  const item = cartItems.map((product) => {
    return {
      title: product.name,
      quantity: product.quantity,
      unitPrice: product.price,
      productId: product.id
    };
  });
  console.log(item);
  const itemReduce = item.flatMap((product) => (<li>{product.title} <b>x{product.quantity}</b></li>));

  const { purchased } = useSelector(state => state.orders);
  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let COSTOENVIO = 250;

  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: '',
        isValid: false,
      },
      localidad: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  console.log(...cartItems);
  console.log(authData);

  // Utilizar react-query mutation para realizar el PÔST a la api de node
  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!formState.isValid || subTotal === 0) {
      console.log('Completar todos los datos');
      return;
    }
    /*   const stringData = localStorage.getItem('authData');
      console.log(stringData);
      const authData = JSON.parse(stringData);
      console.log(authData); */
    /*  const orderData = {
       userId: authData.userId,
       shippingDetails: {
         domicilio: formState.inputs.domicilio.value,
         localidad: formState.inputs.localidad.value,
       },
       items: [...cartItems],
       shippingPrice: COSTOENVIO,
       subTotal: subTotal,
       total: COSTOENVIO + subTotal,
       states: 'pending',
     }; */
    onOpen();
    await createOrder(authData.userId, formState.inputs.domicilio.value, formState.inputs.localidad.value, item, subTotal);
    /* try {
      const createOrderData = await createOrder();
      setInitPoint(createOrderData.init_point);
    } catch (error) {
      console.error(error);
    }
    onOpen(); */
    // console.log(orderData);
    console.log();
    console.log(initPoint);
    console.log(ola);
    //Esto es ESTADO del servidor, aca deberiamos usar la mutation

    //Este se mantiene xq es estado del cliente
    // dispatch(cartActions.clearCart());
    COSTOENVIO = 0;
  };
  console.log(initPoint);
  if (purchased) {
    //Estado del servidor!
    dispatch(orderActions.purchaseInit());

    //Esto no va mas!!
    /**
     * Tenes en cuenta que la respuesta de la mutation va a ser un objeto que contiene el orderId y el init_point a mercadopago, con esa info debriamos crear un boton con el init-point, del rediderct se encarga la respuesta de mercadopago
     * MODIFICAR EL FLOW!!!!!!!!!
     * Deberiamos realizar uin paso las, al momento de confirmar la datade envio, en ese punto se debe enviar la info al back, luego con la respuesta generar el boton de pago
     */
    navigate('/mis-ordenes');
  }

  return (
    <FormStyled onSubmit={handlerSubmit}>
      <FormSectionStyled>
        <Input
          id='domicilio'
          label='Domicilio'
          type='text'
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Campo Obligatorio'
        />
        <Input
          id='localidad'
          label='Localidad'
          type='text'
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Campo Obligatorio'
        />
      </FormSectionStyled>

      <CardSummary
        isValid={!formState.isValid || subTotal === 0}
        subTotal={subTotal} envio={COSTOENVIO}
        handlerSubmit={handlerSubmit}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='3x1'>
            Verifica que los datos sean correctos
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize='2x1'><b>Direccion:</b> {formState.inputs.domicilio.value}</Text>
            <Text fontSize='2x1'><b>Localidad:</b> {formState.inputs.localidad.value} </Text>
            <Text fontSize='2x1'><b>Productos:</b> {itemReduce} </Text>
            <Text fontSize='2x1'><b>Subtotal:</b> {formatPrice(subTotal)}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='green' onClick={() => [window.open(initPoint), onClose()]}>
              Pagar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal >

      {loading && <Spinner />}
      {/* {status === 'loading' && <p>Cargando...</p>}
      {status === 'error' && <p>Error: {error.message}</p>}
      {status === 'success' && <p>Orden creada exitosamente</p>} */}
    </FormStyled >

  );
};;