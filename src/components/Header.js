import React from "react";
import "../css/header.css";
import "../scss/templates/_navigation.scss";
import "../scss/style.scss";
import product1 from "../images/shop/cart/cart-1.jpg"
import product2 from "../images/shop/cart/cart-2.jpg"

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
                <a href="/">
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
								className="tf-ion-android-cart"></i>Корзина</a>
						<div className="dropdown-menu cart-dropdown">

							<div className="media">
								<a className="pull-left" href="#!">
									<img className="media-object" src={product1} alt="image" />
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
									<img className="media-object" src={product2} alt="image" />
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
								<li><a href="/cart" className="btn btn-small">Корзина</a></li>
								<li><a href="/delivery" className="btn btn-small btn-solid-border">Доставка</a></li>
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
                <li class="commonSelect">
                  <select class="form-control">
                    <option>RU</option>
                    <option>AZ</option>
                  </select>
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
