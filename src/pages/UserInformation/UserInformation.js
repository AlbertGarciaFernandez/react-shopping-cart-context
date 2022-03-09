import React from "react";
import AccountForm from "../../components/Forms/AccountForm";
import OrderSummary from "../../components/OrderSummary";
import withLayout from "../../hoc/withLayout";

function UserInformation({ cartItems }) {
  return (
    <div className="row">
      <AccountForm />
      <OrderSummary className="col col-4" cartItems={cartItems} />
    </div>
  );
}

export default withLayout(UserInformation);
