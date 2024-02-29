import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../ProductsContext";
import { useCart } from "../../CartContext";
import { Row, Col } from "react-bootstrap";
import { getLocalizedField } from "../../utils/localizedfield";
import { Link } from "react-router-dom";
import Message from "../Message";
import instanceApi from "../../axiosConfig";
import { serverURL } from "../../axiosConfig";




function Product({ selectedCategory }) {
  const { t } = useTranslation();
  const { cart, dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);



  const showMessageWithTimeout = (message) => {
    setMessage(message);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500); 
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = '/products/';
        if (selectedCategory) {
          url = `/products/category/${selectedCategory}/`;
        }
        const response = await instanceApi.get(url);
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };
  
    fetchProducts();
  }, [selectedCategory]); 
  
  
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
          const imageUrl = `${serverURL}${product.main_photo}`;
          // const cartItem = isInCart(product);
        const hasSale = product.sale > 0;

        return (
          <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
            <div className="product-item">
              <Link to={`/product/${product.title_en}/`} onClick={() => window.scrollTo(0, 0)}>
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
                  <Link to={`/product/${product.title_en}/`} onClick={() => window.scrollTo(0, 0)}>
                    {getLocalizedField(product, "title")}
                    {message && <Message variant="success" show={showMessage}>{message}</Message>}
                  </Link>
                </h4>
             
                <p className="price">{product.price} ₼</p>
                {getCartItem(product.id) > 0 ? (
                    <div className="quantity-controls shop-quantity-controls">
                      <button
                        onClick={decreaseQuantity(product)}
                        className="btn btn-outline-secondary"
                      >
                        −
                      </button>
                      <span className="quan_item">
                        {" "}
                        {getCartItem(product.id)}{" "}
                      </span>
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
                      className="btn btn-main shop-btn-main"
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
