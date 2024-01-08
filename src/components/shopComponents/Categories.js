import React from "react";

function Categories() {
  return (
    <div>
      <div className="col-md-3">
        <div className="widget">
          <h4 className="widget-title">Short By</h4>
          <form method="post" action="#">
            <select className="form-control">
              <option>Man</option>
              <option>Women</option>
              <option>Accessories</option>
              <option>Shoes</option>
            </select>
          </form>
        </div>
        <div className="widget product-category">
          <h4 className="widget-title">Categories</h4>
          <div
            className="panel-group commonAccordion"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Shoes
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#!">Brand & Twist</a>
                    </li>
                    <li>
                      <a href="#!">Shoe Color</a>
                    </li>
                    <li>
                      <a href="#!">Shoe Color</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Duty Wear
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#!">Brand & Twist</a>
                    </li>
                    <li>
                      <a href="#!">Shoe Color</a>
                    </li>
                    <li>
                      <a href="#!">Shoe Color</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    WorkOut Shoes
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#!">Brand & Twist</a>
                    </li>
                    <li>
                      <a href="#!">Shoe Color</a>
                    </li>
                    <li>
                      <a href="#!">Gladian Shoes</a>
                    </li>
                    <li>
                      <a href="#!">Swis Shoes</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
