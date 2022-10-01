import { OrderResume } from "../components/MyOrders/OrderResume";
import { CheckoutContainerStyled } from "./CheckoutElements";

const Resume = () => {
  return (
    <CheckoutContainerStyled>
      <OrderResume />
    </CheckoutContainerStyled>
  );
};

export default Resume;