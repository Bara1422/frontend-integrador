import { FormSectionStyled } from "./CheckoutFormElements";
import useForm from '../../hooks/useForm';
import { FormStyled, Input, Spinner } from '../UI';
import { CardSummary } from '../CardSummary/CardSummary';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { formatPrice } from "../../utils/formatPrice";




export const CheckoutForm = () => {
  const { initPoint, createOrder } = useCreateOrder();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading } = useAuth();
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

  const itemReduce = item.flatMap((product) => (<li>{product.title} <b>x{product.quantity}</b></li>));
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

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!formState.isValid || subTotal === 0) {
      console.log('Completar todos los datos');
      return;
    }
    await createOrder(authData.userId, formState.inputs.domicilio.value, formState.inputs.localidad.value, item, subTotal);
    COSTOENVIO = 0;
    onOpen();
  };

  const handlerCart = (e) => {
    dispatch(cartActions.clearCart());
    navigate('/mis-ordenes');
  };

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
            <Button colorScheme='green' onClick={() => [window.open(initPoint), onClose()][handlerCart()]}>
              Pagar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal >

      {loading && <Spinner />}
    </FormStyled >

  );
};;