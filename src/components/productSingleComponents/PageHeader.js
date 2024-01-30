import React from "react";
import { useTranslation } from "react-i18next";

function PageHeader() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <ol className="breadcrumb">
            <li>
              <a href="/">{t('main')}</a>
            </li>
            <li>
              <a href="/shop">{t('shop')}</a>
            </li>
            <li className="active">{t('product')}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
