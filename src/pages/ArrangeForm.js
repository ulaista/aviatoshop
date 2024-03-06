import React, { useState } from 'react';
import { useCart } from "../CartContext";
import { useTranslation } from "react-i18next";
import instanceApi from '../axiosConfig';

function CheckoutPage() {
  const { cart } = useCart();
  const { t } = useTranslation();
  const [customerInfo, setCustomerInfo] = useState({
    fullname: '',
    phone_number: '',
    message: '',
    address: '',
  });

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const products = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    
    const submissionData = {
      ...customerInfo,
      products,
    };
  
    instanceApi.post('/checkout/', submissionData)
      .then(response => {
        console.log("Order submitted successfully", response.data);
        // Actions after successful submission, e.g., clearing the cart or redirecting the user
      })
      .catch(error => {
        console.error("There was an error submitting the order", error);
        // Error handling, e.g., displaying a message to the user
      });
  };

  return (
    <div className="checkout-page">
      <h2>{t('checkout')}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder={t('fullname')}
          value={customerInfo.fullname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone_number"
          placeholder={t('phone_number')}
          value={customerInfo.phone_number}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder={t('message')}
          value={customerInfo.message}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder={t('address')}
          value={customerInfo.address}
          onChange={handleChange}
          required
        />
        <button type="submit">{t('submit_order')}</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
