import React from "react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../ProductsContext";
import { useCart } from "../../CartContext";
import { Row, Col } from "react-bootstrap";
import { getLocalizedField } from "../../utils/localizedfield";
import { Link } from "react-router-dom";

function Product() {
  const { t } = useTranslation();
  const { cart, dispatch } = useCart();
  const photos = "http://localhost:8000/photos";
  const { products, error } = useProducts();

  const isInCart = (product) => cart.find((item) => item.id === product.id);

  const addToCart = (product) => () => {
    if (!isInCart(product)) {
      dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
    }
  };

  const increaseQuantity = (product) => () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product.id });
  };

  const decreaseQuantity = (product) => () => {
    const item = cart.find((item) => item.id === product.id);
    if (item && item.quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: product.id });
    } else {
      dispatch({ type: "DECREASE_QUANTITY", payload: product.id });
    }
  };

  if (error) {
    return <div>Ошибка при загрузке продуктов: {error.message}</div>;
  }

  if (!products) {
    return <div>Загрузка...</div>;
  }

  const getCartItem = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <Row>
      {products.map((product) => {
        const imageUrl = `${photos}${product.main_photo}`;
        // const cartItem = isInCart(product);
        const hasSale = product.sale > 0;

        return (
          <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
            <div className="product-item">
              <Link to={`/product/${product.id}/`}>
                <div className="product-thumbi">
                  {hasSale && <span className="bage">{product.sale}% Off</span>}
                  <img
                    className="img-responsive"
                    src={imageUrl}
                    alt="product-img"
                  />
                </div>
                </Link>
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
  );
}

export default Product;
