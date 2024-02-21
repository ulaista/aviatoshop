import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTrending } from "../../TrendyProductsContext";
import { useCart } from "../../CartContext";
import { Row, Col } from "react-bootstrap";
import { getLocalizedField } from "../../utils/localizedfield";
import Message from "../Message";
import serverUrl from "../../axiosConfig";

function TrendyProducts() {
  const { t } = useTranslation();
  const { cart, dispatch } = useCart();
  const { trending, error } = useTrending();
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);


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

  if (error) {
    return <div>Ошибка при загрузке продуктов: {error.message}</div>;
  }

  if (!trending) {
    return <div>Загрузка...</div>;
  }

  const getCartItem = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="title text-center">
            <h2>{t("clothes_in_trend")}</h2>
            {message && <Message variant="success" show={showMessage}>{message}</Message>}
          </div>
        </div>
      </div>
      <Row>
        {trending.map((product) => {
          const imageUrl = `${serverUrl}${product.main_photo}`;
          // const cartItem = isInCart(product);
          const hasSale = product.sale > 0;
          return (
            <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
              <div className="product-item">
                <a href="/product-single">
                  <div className="product-thumbi">
                   {hasSale && <span className="bage">{product.sale}% Off</span>}
                    <img
                      className="img-responsive"
                      src={imageUrl}
                      alt="product-img"
                    />
                  </div>
                </a>
                <div className="product-content">
                  <h4>
                    <a href="product-single">
                      {getLocalizedField(product, "title")}
                    </a>
                  </h4>
                  <p className="price">{product.price} ₼</p>
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
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default TrendyProducts;
