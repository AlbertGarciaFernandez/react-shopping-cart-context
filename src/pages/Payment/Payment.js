import React from "react";
import PaymentForm from "../../components/Forms/PaymentForm";
import OrderSummary from "../../components/OrderSummary";
import withLayout from "../../hoc/withLayout";

function Payment({ cartItems }) {
  return (
    <div className="row">
      <PaymentForm />
      <OrderSummary className="col col-4" cartItems={cartItems} />
    </div>
  );
}

export default withLayout(Payment);
