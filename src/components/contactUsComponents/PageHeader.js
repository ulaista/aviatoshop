import React from "react";
import { useTranslation } from "react-i18next";

function PageHeader() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">{t('contact')}</h1>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">{t('main')}</a>
                  </li>
                  <li className="active">{t('contact')}</li>
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