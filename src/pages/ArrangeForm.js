import React, { useState } from 'react';
import { useCart } from "../CartContext";
import { useTranslation } from "react-i18next";
import instanceApi from '../axiosConfig';
import PageHeader from "../components/arrangeFormComponents/PageHeader";
import { getLocalizedField } from '../utils/localizedfield';
import { serverURL } from "../axiosConfig";

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
    <>
    <PageHeader/>
    <section className="page-wrapper">
        <div className="contact-section">
          <div className="container">
            <div className="row">
              <div className="contact-form col-md-6 ">
                <form id="contact-form" method="post" action="" role="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="full_name"
                      id="name"
                      placeholder={t('full_name')}
                      value={customerInfo.fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="phone"
                      className="form-control"
                      id="email"
                      name="phone_number"
                      placeholder={t('phone_number')}
                      value={customerInfo.phone_number}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="address"
                      placeholder={t('address')}
                      value={customerInfo.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      rows="6"
                      placeholder={t('message')}
                      className="form-control"
                      name="message"
                      id="message"
                      value={customerInfo.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div id="mail-success" className="success">
                    Thank you. The Mailman is on His Way
                  </div>

                  <div id="mail-fail" className="error">
                    Sorry, don't know what happened. Try later
                  </div>

                  <div id="cf-submit">
                    <button
                      type="submit"
                      id="contact-submit"
                      className="btn btn-transparent"
                    >{t('send')}</button>
                  </div>
                </form>
              </div>
              <div className="contact-form col-md-6 ">

              <table class="table">
              <thead>
                <tr>
                  <th class="">{t('name_of_product')}</th>
                  <th class="">{t('item_quantity')}</th>
                  <th class="">{t('total_price')}</th>
                </tr>
              </thead>
              <tbody>
              {cart.map((item) => {
                const imageUrl = `${serverURL}${item.main_photo}`;
                return (
                    <tr class="" key={item.id}>
                      <td class="">
                        <div class="product-info">
                          <img width="80" src={imageUrl} alt="" />
                          <a href="#!">{getLocalizedField(item, "title")}</a>
                        </div>
                      </td>    
                      <td>{item.quantity}</td>                           
                      <td class="">{item.price * item.quantity}{' '}₼</td>
                    </tr>
                  );
                })}
              </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckoutPage;
