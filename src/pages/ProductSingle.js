import React, { useEffect, useState } from "react";
import PageHeader from "../components/productSingleComponents/PageHeader";
import Slider from "../components/productSingleComponents/Slider";
import ProductInfo from "../components/productSingleComponents/ProductInfo";
import Details from "../components/productSingleComponents/Details";
import Product from "../components/shopComponents/Product";
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';

// import { CartProvider } from "../CartContext";
import { getProductIdByProductName } from "../utils/getProductIdByProductName";


function ProductSingle() {
  const { t } = useTranslation();
  const { productName } = useParams();
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    console.log(`Product name from URL: ${productName}`); // Добавьте для проверки
    if (productName) {
      getProductIdByProductName(productName)
        .then(id => {
          setProductId(id);
        })
        .catch(error => {
          console.error(error);
          // Обработка ошибки, например, перенаправление на страницу 404
        });
    }
  }, [productName]);

  if (!productId) {
    return <div>Loading...</div>; // Или любой другой индикатор загрузки
  }

  return (
    <div>
      <section className="single-product">
        <div className="container">
          <div className="row mt-20">
            <PageHeader />
            <Slider />
            <ProductInfo productId={productId} />
          </div>
          <Details />
          <div className="title text-center">
            <h2>{t('related')}</h2>
          </div>
          <Product />
        </div>
      </section>
    </div>
  );
}

export default ProductSingle;
