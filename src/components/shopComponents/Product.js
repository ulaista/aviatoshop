import React, { Component } from "react";
import product1 from "../../images/shop/products/product-1.jpg";
import { useTranslation } from "react-i18next";

 function Product(){
  // render() {
    const { t } = useTranslation();
    return (
      <div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="/product-single">
              {/* <div className="product-thumb"> */}
                <span className="bage">Sale</span>

                <img
                  className="img-responsive"
                  src={product1}
                  alt="product-img"
                />
              {/* </div> */}
            </a>
            <div className="product-content">
              <h4>
                <a href="product-single">{t('product_name')}</a>
              </h4>
              <p className="price">10500 руб.</p>
            </div>
          </div>
        </div>
      </div>
    );
  // }
}

export default Product;
