import React from "react";
import PageHeader from "../components/productSingleComponents/PageHeader";
import Slider from "../components/productSingleComponents/Slider";
import ProductInfo from "../components/productSingleComponents/ProductInfo";
import Details from "../components/productSingleComponents/Details";
import Product from "../components/shopComponents/Product";

function ProductSingle() {
  return (
    <div>
      <section className="single-product">
        <div className="container">
          <div className="row mt-20">
            <PageHeader />
            <Slider />
            <ProductInfo />
          </div>
          <Details />
          <div className="title text-center">
            <h2>Related Products</h2>
          </div>
          <Product />
        </div>
      </section>
    </div>
  );
}

export default ProductSingle;
