import React from "react";
import PageHeader from "../components/cartComponents/PageHeader";
import { useCart } from "../CartContext";
import { useTranslation } from "react-i18next";
import { getLocalizedField } from '../utils/localizedfield';
import { serverURL } from "../axiosConfig";
import axios from 'axios';


function Cart() {

  const { t } = useTranslation();
  const { cart, dispatch } = useCart();


  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const decreaseQuantity = (product) => () => {
    const item = cart.find((item) => item.id === product.id);
    if (item && item.quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: product.id });
    } else {
      dispatch({ type: "DECREASE_QUANTITY", payload: product.id });
    }
  };

  if (cart.length === 0) {
    return (
      <div>
        <PageHeader />
        <div class="page-wrapper">
          <div class="cart shopping">
            <div class="container">
              <h2>{t('cart_empty')}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <PageHeader />
      <div class="page-wrapper">
        <div class="cart shopping">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="block">
                  <div class="product-list">
                    {/* <form method=""> */}
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
                                <td>
                                  <button class="quantity-change" onClick={decreaseQuantity(item)}>-</button>
                                  {item.quantity}
                                  <button class="quantity-change" onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}>+</button>
                                </td>                                
                                <td class="">{item.price * item.quantity}{' '}₼</td>
                                <td class="">
                                  <button
                                    class="product-remove"
                                    onClick={() => removeFromCart(item.id)}
                                  >
                                    {t("delete")}
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    {/* </form> */}
                    <button class="btn btn-main pull-left" onClick={clearCart}>
                      {t('void_cart')}
                    </button>
                    <a href="delivery" class="btn btn-main pull-right">
                      {t('arrange')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
