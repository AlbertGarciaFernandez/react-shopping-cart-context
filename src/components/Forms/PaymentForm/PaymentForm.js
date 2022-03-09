import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";
import formHeader from "../../../hoc/formHeader";

import Input from "../../Input";

import Button from "../../Button";

import paymentSchema from "./payment-schema";
import { ACTIONS } from "../../../context/state-reducer";
import { StateContext } from "../../../context/state-context";

function PaymentForm() {
  const value = useContext(StateContext);
  const { dispatch, payment } = value;
  const [hasSubmitted, setHasSubmitted] = useState(false);
  // const [check, setCheck] = useState(false);

  const formik = useFormik({
    initialValues: {
      clientPaymentForm: payment.paymentType,
      clientCardholderName: payment.cardholderName,
      clientCardNumber: payment.cardNumber,
      clientCardExpiryDate: payment.cardExpiryDate,
      clientCardCvvCode: payment.cvvCode,
      clientConsent: true,
    },
    validationSchema: paymentSchema,
    onSubmit: () => {
      setTimeout(() => {
        dispatch({
          type: ACTIONS.ADD_PAYMENT,
          payload: {
            paymentType: "creditCardPay",
            cardholderName: formik.values.clientCardholderName,
            cardNumber: formik.values.clientCardNumber,
            cardExpiryDate: formik.values.clientCardExpiryDate,
            cvvCode: formik.values.clientCardCvvCode,
            conditions: "false",
          },
        });
        setHasSubmitted(true);
      }, 500);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div
          className="d-flex justify-content-between"
          aria-labelledby="select-card"
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor="creditCardPay"
            className="d-flex align-items-center border rounded p-2 "
          >
            <Input
              type="radio"
              name="clientPaymentForm"
              value={formik.values.clientPaymentForm}
              id="cardPay"
              className="mr-2"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.clientPaymentForm}
              errorMessage={formik.errors.clientPaymentForm}
            />
            Credit/Debit Card
          </label>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor="paypal"
            className="d-flex align-items-center border rounded p-2 w-25"
          >
            <Input
              type="radio"
              name="clientPaymentForm"
              value={formik.values.clientPaymentForm}
              id="paypal"
              className="mr-2"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.clientPaymentForm}
              errorMessage={formik.errors.clientPaymentForm}
            />
          </label>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor="applePay"
            className="d-flex align-items-center border rounded p-2 w-25"
          >
            <Input
              type="radio"
              name="clientPaymentForm"
              value={formik.values.clientPaymentForm}
              id="applePay"
              className="mr-2"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.clientPaymentForm}
              errorMessage={formik.errors.clientPaymentForm}
            />
          </label>
        </div>
        <div className="d-flex">
          <div className="w-50">
            \
            <Input
              type="text"
              label="Your Cardholder name*"
              id="clientCardholderName"
              value={formik.values.clientCardholderName}
              placeholder="Insert cardHolder full-name"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.clientCardholderName}
              errorMessage={formik.errors.clientCardholderName}
            />
            <Input
              type="text"
              label="Card number*"
              id="clientCardNumber"
              value={formik.values.clientCardNumber}
              placeholder="Insert card number full-name"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.clientCardNumber}
              errorMessage={formik.errors.clientCardNumber}
            />
            <div className="d-flex">
              <Input
                type="text"
                label="Card expiry date*"
                id="clientCardExpiryDate"
                value={formik.values.clientCardExpiryDate}
                placeholder="mm/yy"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.clientCardExpiryDate}
                errorMessage={formik.errors.clientCardExpiryDate}
              />
              <Input
                type="text"
                label="Card CVV code*"
                id="clientCardCvvCode"
                value={formik.values.clientCardCvvCode}
                placeholder="cvv"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.clientCardCvvCode}
                errorMessage={formik.errors.clientCardCvvCode}
              />
              <img alt="" />
            </div>
          </div>
        </div>

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <div className="d-flex justify-content-between">
          <Link className="btn btn-primary px-5" to="/checkout/step-2">
            Back to Billing
          </Link>
          <Button
            submitButton
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Complete purchase"}
          </Button>
        </div>
      </form>
      {hasSubmitted && <Redirect to="/checkout/order-summary" />}
    </>
  );
}

export default formHeader(PaymentForm);
