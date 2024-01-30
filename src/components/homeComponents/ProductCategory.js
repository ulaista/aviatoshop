import React from "react";
import category1 from "../../images/shop/category/6.jpg";
import category2 from "../../images/shop/category/7.jpg";
import category3 from "../../images/shop/category/4.jpg";
import { useTranslation } from "react-i18next";

function ProductCategory() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="product-category section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="category-box">
                <a href="#!">
                  <img src={category1} alt="category1" />
                  <div className="content">
                    <h2>
                      {" "}
                      {t('category_content1')}
                    </h2>
                  </div>
                </a>
              </div>
              <div className="category-box">
                <a href="#!">
                  <img src={category2} alt="category2" />
                  <div className="content">
                    <h1>
                      <br />
                      {t('category_content2_1')}
                      <br />
                    </h1>
                    <h2>
                      {" "}
                      {t('category_content2_2')}
                    </h2>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-box category-box-2">
                <a href="#!">
                  <img src={category3} alt="category3" />
                  <div className="content">
                    <h1>
                        {t('category_content3_1')}
                      <br />
                    </h1>
                    <h2>
                      {" "}
                      {t('category_content3_2')}
                    </h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCategory;
