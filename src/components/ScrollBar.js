import React from "react";

function ScrollBar() {
  return (
    <div>
      <div className="hero-slider">
        <div
          className="slider-item th-fullpage hero-area"
          style="background-image: url(images/slider/slider-1.jpg);"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-center">
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  PRODUCTS
                </p>
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  The beauty of nature <br></br> is hidden in details.
                </h1>
                <a
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".8"
                  className="btn"
                  href="shop.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item th-fullpage hero-area"
          style="background-image: url(images/slider/slider-3.jpg);"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-left">
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  PRODUCTS
                </p>
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  The beauty of nature <br></br> is hidden in details.
                </h1>
                <a
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".8"
                  className="btn"
                  href="shop.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item th-fullpage hero-area"
          style="background-image: url(images/slider/slider-2.jpg);"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 text-right">
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  PRODUCTS
                </p>
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  The beauty of nature <br></br> is hidden in details.
                </h1>
                <a
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".8"
                  className="btn"
                  href="shop.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollBar;
