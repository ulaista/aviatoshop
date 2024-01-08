import React from "react";

function ProductInfo() {
  return (
    <div>
      <div className="col-md-7">
        <div className="single-product-details">
          <h2>Eclipse Crossbody</h2>
          <p className="product-price">$300</p>

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
            <span>color:</span>
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
            <span>Size:</span>
            <select className="form-control">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="product-quantity">
            <span>Quantity:</span>
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
            <span>Categories:</span>
            <ul>
              <li>
                <a href="product-single.html">Products</a>
              </li>
              <li>
                <a href="product-single.html">Soap</a>
              </li>
            </ul>
          </div>
          <a href="cart.html" className="btn btn-main mt-20">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
