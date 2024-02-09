import React from "react";
import PageHeader from "../components/shopComponents/PageHeader";
import Categories from "../components/shopComponents/Categories";
import Product from "../components/shopComponents/Product";
import { Row, Col } from "react-bootstrap";


function ShopPage() {
  return (
    <div>
      <PageHeader />
      <section className="products section">
        <div className="container">
          <Row>
            <Col md={3}>
              <Categories />
            </Col>
            <Col md={9}>
              <Product />
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default ShopPage;
