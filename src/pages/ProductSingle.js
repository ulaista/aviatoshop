import React from "react";
import PageHeader from "../components/productSingleComponents/PageHeader";
import Slider from "../components/productSingleComponents/Slider";
import ProductInfo from "../components/productSingleComponents/ProductInfo";
import Details from "../components/productSingleComponents/Details";
import Product from "../components/shopComponents/Product";
import { useTranslation } from "react-i18next";
import { useParams } from 'react-router-dom';

// import { CartProvider } from "../CartContext";

function ProductSingle() {
  const { t } = useTranslation();
  const { id } = useParams();

  return (
    <div>
      <section className="single-product">
        <div className="container">
          <div className="row mt-20">
            <PageHeader />
            <Slider />
            <ProductInfo productId={id} />
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
