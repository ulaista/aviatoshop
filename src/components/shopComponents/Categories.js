import React from "react";
import { useTranslation } from "react-i18next";

function Categories() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="col-md-3">
        <div className="widget">
          <h4 className="widget-title">{t('short_by')}</h4>
          <form method="post" action="#">
            <select className="form-control">
              <option>{t('man')}</option>
              <option>{t('women')}</option>
              <option>{t('accessories')}</option>
              <option>{t('shoes')}</option>
            </select>
          </form>
        </div>
        <div className="widget product-category">
          <h4 className="widget-title">{t('category')}</h4>
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
                    {t('shoes')}
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
                      <a href="#!">{t("brand_&_twist")}</a>
                    </li>
                    <li>
                      <a href="#!">{t('shoe_color')}</a>
                    </li>
                    <li>
                      <a href="#!">{t('shoe_color')}</a>
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
                    {t('duty_wear')}
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
                      <a href="#!">{t("brand_&_twist")}</a>
                    </li>
                    <li>
                      <a href="#!">{t('shoe_color')}</a>
                    </li>
                    <li>
                      <a href="#!">{t('shoe_color')}</a>
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
                    {t('workout_shoes')}
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
                      <a href="#!">{t("brand_&_twist")}</a>
                    </li>
                    <li>
                      <a href="#!">{t('shoe_color')}</a>
                    </li>
                    <li>
                      <a href="#!">{t("gladian_shoes")}</a>
                    </li>
                    <li>
                      <a href="#!">{t("swis_shoes")}</a>
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
