import React from "react";

function PageHeader() {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">Магазин</h1>
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Главная</a>
                  </li>
                  <li className="active">Магазин</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageHeader;