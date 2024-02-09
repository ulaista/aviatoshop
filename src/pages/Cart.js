import React from "react";
import PageHeader from "../components/cartComponents/PageHeader";
import { useCart } from "../CartContext";
import { useTranslation } from "react-i18next";
import { getLocalizedField } from '../utils/localizedfield';


function Cart() {

  const { t } = useTranslation();
  const { cart, dispatch } = useCart();
  const photos = "http://localhost:8000/photos";

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

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
                    <form method="post">
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
                            const imageUrl = `${photos}${item.main_photo}`;
                            return (
                              <tr class="" key={item.id}>
                                <td class="">
                                  <div class="product-info">
                                    <img width="80" src={imageUrl} alt="" />
                                    <a href="#!">{getLocalizedField(item, "title")}</a>
                                  </div>
                                </td>
                                <td class="">{item.quantity}</td>
                                <td class="">${item.price * item.quantity}</td>
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
                    </form>
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
