import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { MyContext } from "../../Context/context";
import "./Payment.css";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
export default function PaypalComponent() {
  const { totalPrice } = useContext(MyContext);
  const MyCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: `${totalPrice}`,
          },
        },
      ],
    });
  };
  const MyOnApprove = (data, actions) => {
    console.log(data);
    return actions.order.capture();
  };
  return (
    <div>
      <PayPalButton
        createOrder={(data, actions) => MyCreateOrder(data, actions)}
        onApprove={(data, actions) => MyOnApprove(data, actions)}
      />
    </div>
  );
}
