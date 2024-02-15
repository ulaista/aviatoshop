import React from "react";
import { useTranslation } from "react-i18next";
import { useProducts } from "../../ProductsContext";
import { useCart } from "../../CartContext";
import { Row, Col } from "react-bootstrap";
import { getLocalizedField } from '../../utils/localizedfield';

function Product() {
  const { t } = useTranslation();
  const { dispatch } = useCart();
  const photos = "http://185.154.193.112/photos";
  const { products, error } = useProducts();

  if (error) {
    return <div>Ошибка при загрузке продуктов: {error.message}</div>;
  }

  if (!products) {
    return <div>Загрузка...</div>;
  }
  const addToCart = (product) => () => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  return (
    <Row> 
      {products.map((product) => {
        const imageUrl = `${photos}${product.main_photo}`;
        return (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}> 
            <div className="product-item">
              <a href="/product-single">
                <div className="product-thumb">
                  <span className="bage">Sale</span>
                  <img className="img-responsive" src={imageUrl} alt="product-img" />
                </div>
              </a>
              <div className="product-content">
                <h4>
                  <a href="product-single">{getLocalizedField(product, "title")}</a>
                </h4>
                <p className="price">{product.price}</p>
                <button
                  onClick={addToCart(product)}
                  className="btn btn-main mt-20"
                >
                  {t("add_cart")}
                </button>
              </div>
            </div>
          </Col>
          );
          })}
        </Row>
  );
}

export default Product;
