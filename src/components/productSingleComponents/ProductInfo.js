import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import instanceApi from '../../axiosConfig';
import { useParams } from "react-router-dom";
import { useProducts } from "../../ProductsContext";
import { getLocalizedField } from "../../utils/localizedfield";
import { useCart } from "../../CartContext";
import Message from "../Message";


function ProductInfo({ productId }) {
  const { t } = useTranslation();
  const [product, setProduct] = useState(null);
  const { cart, dispatch } = useCart();
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (productId) {
      instanceApi.get(`/product/${productId}/`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке информации о продукте:", error);
        });
    }
  }, [productId]);

  const showMessageWithTimeout = (message) => {
    setMessage(message);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500); 
  };
  

  const isInCart = (product) => cart.find((item) => item.id === product.id);

  const addToCart = (product) => () => {
    if (!isInCart(product)) {
      dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
      showMessageWithTimeout(`Продукт "${getLocalizedField(product, "title")}" добавлен в корзину.`);
    }
  };

  const increaseQuantity = (product) => () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product.id });
    showMessageWithTimeout(`Количество "${getLocalizedField(product, "title")}" увеличено.`);
  };

  const decreaseQuantity = (product) => () => {
    const item = cart.find((item) => item.id === product.id);
    if (item && item.quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: product.id });
      showMessageWithTimeout(`Продукт "${getLocalizedField(product, "title")}" удален из корзины.`);
    } else {
      dispatch({ type: "DECREASE_QUANTITY", payload: product.id });
      showMessageWithTimeout(`Количество "${getLocalizedField(product, "title")}" уменьшено.`);
    }
  };
  
  const getCartItem = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  if (!product) {
    console.log(product)
    return <div>Загрузка...</div>;
  }

  return (
    <>
    <div>
    <div className="col-md-7">
        <div className="single-product-details">
          <h2>{getLocalizedField(product, "title")}</h2>
          <p className="product-price">{product.price} ₼</p>
          {message && <Message variant="success" show={showMessage}>{message}</Message>}

          <p className="product-description mt-20">
            {getLocalizedField(product, "short_description")}
          </p>
          <div dangerouslySetInnerHTML={{ __html: getLocalizedField(product, "full_description") }} />
          <div className="color-swatches">
            <span>{t('color')}</span>
            <ul>
              <li>
                <a href="#!" className="swatch-violet"></a>
              </li>
              <li>
                <a href="#!" className="swatch-black"></a>
              </li>
              <li>
                <a href="#!" className="swatch-cream"></a>
              </li>
            </ul>
          </div>
          <div className="product-size">
            <span>{t('size')}</span>
            <select className="form-control">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="product-quantity">
            <span>{t('quantity')}</span>
            <div className="product-quantity-slider">
              <input
                id="product-quantity"
                type="text"
                value="0"
                name="product-quantity"
              />
            </div>
          </div>
          <div className="product-category">
            <span>{t('category')}</span>
            <ul>
              <li>
                <a href="/product-single">{t('product')}</a>
              </li>
              <li>
                <a href="/product-single">Soap</a>
              </li>
            </ul>
          </div>
          {getCartItem(product.id) > 0 ? (
                    <div className="quantity-controls">
                      <button
                        onClick={decreaseQuantity(product)}
                        className="btn btn-outline-secondary"
                      >
                        −
                      </button>
                      <span> {getCartItem(product.id)} </span>
                      <button
                        onClick={increaseQuantity(product)}
                        className="btn btn-outline-secondary"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={addToCart(product)}
                      className="btn btn-main mt-20"
                    >
                      {t("add_cart")}
                    </button>
                  )}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductInfo;
