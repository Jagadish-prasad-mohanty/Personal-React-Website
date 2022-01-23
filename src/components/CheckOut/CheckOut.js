import React, { useState } from "react";
import classes from "./CheckOut.module.css";
import GooglePayButton from "@google-pay/button-react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import OrderPreview from "./OrderPreview";
import { resetCart } from "../../store/actions/cartAction";
function CheckOut() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [successCheckOut, setSuccessCheckOut] = useState(false);
  const dispatch=useDispatch();
  return (
    <div>
      {successCheckOut && (
        <OrderPreview
          closeModal={() => {
            setSuccessCheckOut(false);
          }}
        />
      )}
      <h1>CheckOut </h1>
      <hr style={{ margin: "1rem auto" }} />
      <h4>
        Your Total Amount is : -/<span>{totalAmount}</span>
      </h4>
      <div className={classes.CheckOutDiv}>
        <div className={classes.CheckOutBtn}>
          <h2>Proceed with Google Pay</h2>
          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: `${totalAmount}`,
                currencyCode: "USD",
                countryCode: "US",
              },
              shippingAddressRequired: true,
              callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("Success", paymentRequest);
            }}
            onPaymentAuthorized={(paymentData) => {
              console.log("Payment Authorised Success", paymentData);
              return { transactionState: "SUCCESS" };
            }}
            onPaymentDataChanged={(paymentData) => {
              console.log("On Payment Data Changed", paymentData);
              return {};
            }}
            existingPaymentMethodRequired="false"
            buttonColor="black"
            buttonType="Buy"
          />
        </div>
        <div className={classes.CheckOutBtn}>
          <h2>You can choose COD also</h2>
          <div className={classes.button}>
            <Button
              btnName="Fake CheckOut"
              onclick={() => {
                setSuccessCheckOut(true);
                
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
