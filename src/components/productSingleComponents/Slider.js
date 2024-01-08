import React, { useEffect } from "react";
import product1 from "../../images/shop/single-products/product-1.jpg";
import product2 from "../../images/shop/single-products/product-2.jpg";
import product3 from "../../images/shop/single-products/product-3.jpg";
import product4 from "../../images/shop/single-products/product-4.jpg";
import product5 from "../../images/shop/single-products/product-5.jpg";
import product6 from "../../images/shop/single-products/product-6.jpg";

import "../../plugins/bootstrap/css/bootstrap.min.css";
import "../../plugins/bootstrap/js/bootstrap.min.js";

function Slider() {
  return (
    <div>
      <div className="col-md-5">
        <div className="single-product-slider">
          <div
            id="carousel-custom"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-outer">
              <div className="carousel-inner ">
                <div className="item active">
                  <img src={product1} alt="" data-zoom-image={product1} />
                </div>
                <div className="item">
                  <img src={product2} alt="" data-zoom-image={product2} />
                </div>

                <div className="item">
                  <img src={product3} alt="" data-zoom-image={product3} />
                </div>
                <div className="item">
                  <img src={product4} alt="" data-zoom-image={product4} />
                </div>
                <div className="item">
                  <img src={product5} alt="" data-zoom-image={product5} />
                </div>
                <div className="item">
                  <img src={product6} alt="" data-zoom-image={product6} />
                </div>
              </div>

              <a
                className="left carousel-control"
                href="#carousel-custom"
                data-slide="prev"
              >
                <i className="tf-ion-ios-arrow-left"></i>
              </a>
              <a
                className="right carousel-control"
                href="#carousel-custom"
                data-slide="next"
              >
                <i className="tf-ion-ios-arrow-right"></i>
              </a>
            </div>

            <ol className="carousel-indicators mCustomScrollbar meartlab">
              <li
                data-target="#carousel-custom"
                data-slide-to="0"
                className="active"
              >
                <img src={product1} alt="" />
              </li>
              <li data-target="#carousel-custom" data-slide-to="1">
                <img src={product2} alt="" />
              </li>
              <li data-target="#carousel-custom" data-slide-to="2">
                <img src={product3} alt="" />
              </li>
              <li data-target="#carousel-custom" data-slide-to="3">
                <img src={product4} alt="" />
              </li>
              <li data-target="#carousel-custom" data-slide-to="4">
                <img src={product5} alt="" />
              </li>
              <li data-target="#carousel-custom" data-slide-to="5">
                <img src={product6} alt="" />
              </li>
              <li data-target="#carousel-custom" data-slide-to="6">
                <img src={product6} alt="" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
