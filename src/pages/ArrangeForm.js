import React, { useState, useEffect } from 'react'; 
import { useCart } from "../CartContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import instanceApi from '../axiosConfig';
import PageHeader from "../components/arrangeFormComponents/PageHeader";
import { getLocalizedField } from '../utils/localizedfield';
import { serverURL } from "../axiosConfig";

function CheckoutPage() {
  const { cart, dispatch } = useCart();
  const { t } = useTranslation();
  const navigate = useNavigate(); 


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [customerInfo, setCustomerInfo] = useState({
    fullname: '',
    phone_number: '',
    message: '',
    address: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productDetailsText = cart.map(item =>
      `Product ID: ${item.id}, Quantity: ${item.quantity}, Size: ${item.selectedSize}, Color: ${item.selectedColor}`
    ).join('; ');

    const finalMessage = `${customerInfo.message}\n\nDetails of ordered products:\n${productDetailsText}`;


    const products = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity; // Сохраняем ID продукта как ключ и количество как значение
      return acc;
    }, {});

    const submissionData = {
      fullname: customerInfo.fullname,
      phone_number: customerInfo.phone_number,
      message: finalMessage,
      address: customerInfo.address,
      products, // Отправляем объект с продуктами
    };

    instanceApi.post('/checkout/', submissionData)
      .then(response => {
        console.log("Order submitted successfully", response.data);
        setIsSubmitted(true); // Update submission status
        dispatch({ type: "CLEAR_CART" }); // Очистите корзину через dispatch
        setTimeout(() => {
          navigate('/'); // Redirect after 3 seconds
        }, 3000);
      })
      .catch(error => {
        console.error("There was an error submitting the order", error);
        // Error handling
      });
  };
  if (isSubmitted) {
    return (
      <>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f4f8',
      color: '#4BB543',
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      animation: 'fadeIn 2s'
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16" style={{ marginBottom: '20px', color: '#4BB543' }}>
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.525 7.465a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.99-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
      Successfully sent
    </div>
    </>
    );
  } else {
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
                      name="fullname"
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
                      // value={cart.map(item => `${item.title} (Размер: ${item.selectedSize}, Цвет: ${item.selectedColor}, Кол-во: ${item.quantity})`).join(', ')}
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
}

export default CheckoutPage;
