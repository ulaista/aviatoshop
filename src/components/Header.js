import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/header.css";
import "../scss/templates/_navigation.scss";
import "../scss/style.scss";
// import product1 from "../images/shop/cart/cart-1.jpg";
// import product2 from "../images/shop/cart/cart-2.jpg";
import useLocalStorage from "../hooks/use-localstorage";
import i18n from "../i18n";
import instanceApi from "../axiosConfig";
import { getLocalizedField } from "../utils/localizedfield";
import { useNavigate } from 'react-router-dom';



// function SearchModal({ show, onHide, results }) {
//   return (
//     <div className={show ? "modal display-block" : "modal display-none"}>
//       <div className="modal-content">
//         <span className="close-button" onClick={onHide}>&times;</span>
//         <h2>Результаты поиска</h2>
//         {results.map((item, index) => (
//           <div key={index}>{item.title_ru}</div> // Предполагается, что результат содержит поле name
//         ))}
//       </div>
//     </div>
//   );
// }

function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ru");
  const [searchQuery, setSearchQuery] = useState("");
  // const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook


  const handleLenguageChange = () => {
    if (language === "ru") {
      i18n.changeLanguage("az");
      setLanguage("az");
    } else if (language === "az") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    }
  };
  const selectRef = useRef(null);

  useEffect(() => {
    const check_lang = language === "ru" ? "ru" : "az";
    if (selectRef.current) {
      selectRef.current.value = check_lang;
    }
  }, [language]);

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   instanceApi
  //     .get(`/products/search/?q=${encodeURIComponent(searchQuery)}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setSearchResults(response.data); // Предполагается, что API возвращает массив результатов
  //       // setShowModal(true); // Открываем модальное окно с результатами
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при выполнении поиска:", error);
  //     });
  // };

  // // const handleSearchInputChange = (event) => {
  // //   setSearchQuery(event.target.value);
  // // };

  // // Функция для обработки изменений в поисковой строке
  // const handleSearchInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  //   if (event.target.value.length > 0) {
  //     setIsDropdownVisible(true); // Показать выпадающий список при наличии ввода
  //   } else {
  //     setIsDropdownVisible(false); // Скрыть выпадающий список, если строка поиска пуста
  //   }
  // };
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      instanceApi
        .get(`/products/search/?q=${encodeURIComponent(query)}`)
        .then((response) => {
          setSearchResults(response.data);
          setIsDropdownVisible(true);
        })
        .catch((error) => {
          console.error("Ошибка при выполнении поиска:", error);
          setIsDropdownVisible(false);
        });
    } else {
      setIsDropdownVisible(false);
    }
  };

  const handleDropdownItemClick = (item) => {
    setSearchQuery(getLocalizedField(item, "title", language)); // Обновление поисковой строки выбранным значением
    setIsDropdownVisible(false); // Скрытие выпадающего списка
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchQuery) {
      event.preventDefault();
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Use navigate to redirect
    }
  };

  return (
    <div>
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="contact-number">
                <i className="tf-ion-ios-telephone"></i>
                <span>
                  <a href="tel:+79118138879">+7-911-813-8879</a>
                </span>
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
                    <i className="tf-ion-android-cart"></i>
                    {t("cart")}
                  </a>
                </li>

                <li className="dropdown search dropdown-slide">
                 <a href="#!">
                    <i className="tf-ion-ios-search-strong"></i> {t("search")}
                  </a> 
                  <ul className="dropdown-menu search-dropdown">
                    <li>
                      <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="search"
                        className="form-control"
                        placeholder={t("search")}
                        onChange={handleSearchInputChange}
                        onKeyDown={handleKeyPress} // Add this line
                        value={searchQuery}
                      />
                    </form>
                    {isDropdownVisible && (
                      <div className="search-results-dropdown">
                        {searchResults.map((item, index) => (
                          <div
                            key={index}
                            className="search-item"
                            onClick={() => handleDropdownItemClick(item)}
                          >
                            {getLocalizedField(item, "title", language)}
                          </div>
                        ))}
                      </div>
                    )}
                    </li>
                  </ul>
                </li>

                <li class="commonSelect">
                  <select
                    id="sel"
                    ref={selectRef}
                    class="form-control"
                    onChange={handleLenguageChange}
                  >
                    <option value="ru">RU</option>
                    <option value="az">AZ</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <SearchModal show={showModal} onHide={() => setShowModal(false)} results={searchResults} /> */}
    </div>
  );
}

export default Header;
