import React from "react";
import "../scss/templates/_navigation.scss";
import "../scss/home.scss";
import "../scss/_common.scss";

function NavigationBar() {
  return (
    <section className="menu">
      <nav className="navbar navigation">
        <div className="container">
          <div className="navbar-header">
            <h2 className="menu-title">МЕНЮ</h2>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div id="navbar" className="navbar-collapse collapse text-center">
            <ul className="nav navbar-nav">
              <li className="dropdown ">
                <a href="/">Главная</a>
              </li>

              <li className="dropdown ">
                <a href="/shop">МАГАЗИН</a>
              </li>

              {/* <li class="dropdown dropdown-slide">
                <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                  role="button" aria-haspopup="true" aria-expanded="false">Страницы <span
                    class="tf-ion-ios-arrow-down"></span></a>
                <div class="dropdown-menu">
                  <div class="row">

                    
                    <div class="col-lg-6 col-md-6 mb-sm-3">
                      <ul>
                        <li class="dropdown-header">Страницы</li>
                        <li role="separator" class="divider"></li>
                        <li><a href="/contact">КОНТАКТЫ</a></li>
                        <li><a href="/about-as">О НАС</a></li>
                        <li><a href="/faq">FAQ</a></li>
                      </ul>
                    </div>

                  </div>
                </div>
					    </li> */}
              
              <li className="dropdown ">
                <a href="/delivery">Доставка</a>
              </li>

              <li className="dropdown ">
                <a href="/contact">КОНТАКТЫ</a>
              </li>

              <li className="dropdown ">
                <a href="/about-as">О НАС</a>
              </li>

              <li className="dropdown ">
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavigationBar;
