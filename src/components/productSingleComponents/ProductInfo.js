import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import instanceApi from '../../axiosConfig';
import { useParams } from "react-router-dom";
import { useProducts } from "../../ProductsContext";



function ProductInfo({ productId }) {
  const { t } = useTranslation();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      instanceApi.get(`/product/${productId}/`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке информации о продукте:", error);
        });
    }
  }, [productId]);

  if (!product) {
    console.log(product)
    return <div>Загрузка...</div>;
  }

  return (
    <>
    <div>
    <div className="col-md-7">
        <div className="single-product-details">
          {/* <h2>{getLocalizedField(product, "title")}</h2> */}
          <p className="product-price">{product.price} ₼</p>

          <p className="product-description mt-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a
            consequatur beatae nostrum, earum consequuntur? Eveniet consequatur
            ipsum dicta recusandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            velit, sunt temporibus, nulla accusamus similique sapiente tempora,
            at atque cumque assumenda minus asperiores est esse sequi dolore
            magnam. Debitis, explicabo.
          </p>
          <div className="color-swatches">
            <span>{t('color')}</span>
            <ul>
              <li>
                <a href="#!" className="swatch-violet"></a>
              </li>
              <li>
                <a href="#!" className="swatch-black"></a>
              </li>
              <li>
                <a href="#!" className="swatch-cream"></a>
              </li>
            </ul>
          </div>
          <div className="product-size">
            <span>{t('size')}</span>
            <select className="form-control">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="product-quantity">
            <span>{t('quantity')}</span>
            <div className="product-quantity-slider">
              <input
                id="product-quantity"
                type="text"
                value="0"
                name="product-quantity"
              />
            </div>
          </div>
          <div className="product-category">
            <span>{t('category')}</span>
            <ul>
              <li>
                <a href="/product-single">{t('product')}</a>
              </li>
              <li>
                <a href="/product-single">Soap</a>
              </li>
            </ul>
          </div>
          <a href="/cart" className="btn btn-main mt-20">
            {t('add_cart')}
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductInfo;
