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
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (productId) {
      instanceApi.get(`/product/${productId}/`)
        .then((response) => {
          setProduct(response.data);
          setSelectedSize(response.data.size.length > 0 ? response.data.size[0].name : '');
          setSelectedColor(response.data.color.length > 0 ? response.data.color[0].hex_code : '');
   
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

  const addToCart = () => {
    const productToAdd = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    };
    dispatch({ type: "ADD_ITEM", payload: productToAdd });
    showMessageWithTimeout(`Продукт "${getLocalizedField(product, "title")}" добавлен в корзину.`);
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
          {/* <div dangerouslySetInnerHTML={{ __html: getLocalizedField(product, "full_description") }} /> */}
          <div className="color-swatches">
            <span>{t('color')}</span>
            <ul>
              {product.color.map((color) => (
                <li key={color.id} onClick={() => setSelectedColor(color.hex_code)}>
                  <a href="#!" style={{ backgroundColor: color.hex_code }}></a>
                </li>
              ))}
            </ul>
          </div>
          <div className="product-size">
            <span>{t('size')}</span>
            <select className="form-control" value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              {product.size.map((size) => (
                <option key={size.id} value={size.name}>{size.name}</option>
              ))}
            </select>
          </div>
          <div className="product-quantity">
            <span>{t('quantity')}</span>
            <div className="product-quantity-slider">
              <input
                id="product-quantity"
                type="number"
                value={product.quantity}
                name="product-quantity"
                onChange={(e) => setQuantity(Number(e.target.value))} min="0"
              />
            </div>
          </div>
          <div className="product-category">
            <span>{t('category')}</span>
            <ul>
              <li>
                <a href="#">{getLocalizedField(product.category, "name")}</a>
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
                      className="btn btn-main"
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
