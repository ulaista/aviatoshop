import React from "react";

function PageHeader() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <ol className="breadcrumb">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/shop">Магазин</a>
            </li>
            <li className="active">Продукт</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
