import React from "react";

import OrderSummary from "../../components/OrderSummary";
import withLayout from "../../hoc/withLayout";

function Confirmation({ cartItems }) {
  return (
    <div className="row">
      OrderSummary
      <OrderSummary className="col col-4" cartItems={cartItems} />
    </div>
  );
}

export default withLayout(Confirmation);
