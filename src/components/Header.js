import React from "react";
import "../css/header.css";
import "../scss/templates/_navigation.scss";
import "../scss/style.scss";

function Header() {
  return (
    <div>
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="contact-number">
                <i className="tf-ion-ios-telephone"></i>
                <span>+7-911-813-8879</span>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="logo text-center">
                <a href="index.html">
                  <svg
                    width="135px"
                    height="29px"
                    viewBox="0 0 155 29"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      fontSize="28"
                      fontFamily="AustinBold, Austin"
                      fontWeight="bold"
                    >
                      <g
                        id="Group"
                        transform="translate(-108.000000, -297.000000)"
                        fill="#000000"
                      >
                        <text id="AVIATO">
                          <tspan x="108.94" y="325">
                            KNIT LOFT
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4" id="searchBar">
              <ul className="top-menu text-right list-inline">
                <li className="dropdown cart-nav dropdown-slide">
						<a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
								className="tf-ion-android-cart"></i>Cart</a>
						<div className="dropdown-menu cart-dropdown">

							<div className="media">
								<a className="pull-left" href="#!">
									<img className="media-object" src="images/shop/cart/cart-1.jpg" alt="image" />
								</a>
								<div className="media-body">
									<h4 className="media-heading"><a href="#!">Ladies Bag</a></h4>
									<div className="cart-price">
										<span>1 x</span>
										<span>1250.00</span>
									</div>
									<h5><strong>$1200</strong></h5>
								</div>
								<a href="#!" className="remove"><i className="tf-ion-close"></i></a>
							</div>
							<div className="media">
								<a className="pull-left" href="#!">
									<img className="media-object" src="images/shop/cart/cart-2.jpg" alt="image" />
								</a>
								<div className="media-body">
									<h4 className="media-heading"><a href="#!">Ladies Bag</a></h4>
									<div className="cart-price">
										<span>1 x</span>
										<span>1250.00</span>
									</div>
									<h5><strong>$1200</strong></h5>
								</div>
								<a href="#!" className="remove"><i className="tf-ion-close"></i></a>
							</div>

							<div className="cart-summary">
								<span>Total</span>
								<span className="total-price">$1799.00</span>
							</div>
							<ul className="text-center cart-buttons">
								<li><a href="cart.html" className="btn btn-small">View Cart</a></li>
								<li><a href="checkout.html" className="btn btn-small btn-solid-border">Checkout</a></li>
							</ul>
						</div>

					</li>

                <li className="dropdown search dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <i className="tf-ion-ios-search-strong"></i> Поиск
                  </a>
                  <ul className="dropdown-menu search-dropdown">
                    <li>
                      <form action="post">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                        ></input>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
