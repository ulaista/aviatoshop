import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../css/header.css";
import "../scss/templates/_navigation.scss";
import "../scss/style.scss";
// import product1 from "../images/shop/cart/cart-1.jpg";
// import product2 from "../images/shop/cart/cart-2.jpg";
import useLocalStorage from '../hooks/use-localstorage';
import i18n from '../i18n';

function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ru');

  const handleLenguageChange = () => {
      if (language === 'ru') {
          i18n.changeLanguage('az');
          setLanguage('az');
      } else if (language === 'az') {
          i18n.changeLanguage('ru');
          setLanguage('ru');
      }
  };
  const selectRef = useRef(null);

  useEffect(() => {
    const check_lang = language === 'ru' ? 'ru' : 'az';
    if (selectRef.current) {
      selectRef.current.value = check_lang;
    }
  }, [language]);

  return (
    <div>
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="contact-number">
                <i className="tf-ion-ios-telephone"></i>
                <span><a href="tel:+79118138879">+7-911-813-8879</a></span>
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
                      fontFamily="Roboto, sans-serif"
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
                  <a
                    href="/cart"
                    // className="dropdown-toggle"
                    // data-toggle="dropdown"
                    // data-hover="dropdown"
                  >
                    <i className="tf-ion-android-cart"></i>{t('cart')}
                  </a>
                </li>

                <li className="dropdown search dropdown-slide">
                  <a
                    href="#!"
                    // className="dropdown-toggle"
                    // data-toggle="dropdown"
                    // data-hover="dropdown"
                  >
                    <i className="tf-ion-ios-search-strong"></i> {t('search')}
                  </a>
                  <ul className="dropdown-menu search-dropdown">
                    <li>
                      <form action="post">
                        <input
                          type="search"
                          className="form-control"
                          placeholder={t('search')}
                        ></input>
                      </form>
                    </li>
                  </ul>
                </li>
                <li class="commonSelect">
                  <select id="sel" ref={selectRef} class="form-control" onChange={handleLenguageChange}>
                    <option value='ru'>RU</option>
                    <option value='az'>AZ</option>
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
