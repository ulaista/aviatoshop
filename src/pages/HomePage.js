import React from "react";
import Slider from "../components/homeComponents/Slider";
import ProductCategory from "../components/homeComponents/ProductCategory";
import TrendyProducts from "../components/homeComponents/TrendyProducts";
import Product from "../components/shopComponents/Product";
import VievUsInst from "../components/shopComponents/VievUsInst";

function HomePage() {
  return (
    <div>
      <Slider />
      <ProductCategory />
      <section className="products section bg-gray">
        <div className="container">
          <TrendyProducts />
          <Product />
        </div>
      </section>
      <VievUsInst />
    </div>
  );
}

export default HomePage;
