import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <footer className="footer section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="social-media">
                <li>
                  <a href="https://www.facebook.com/themefisher">
                    <i className="tf-ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/themefisher">
                    <i className="tf-ion-social-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/themefisher">
                    <i className="tf-ion-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/themefisher/">
                    <i className="tf-ion-social-pinterest"></i>
                  </a>
                </li>
              </ul>
              <ul className="footer-menu text-uppercase">
                <li>
                  <a href="contact">{t('contact')}</a>
                </li>
                <li>
                  <a href="shop">{t('shop')}</a>
                </li>
                <li>
                  <a href="contact">{t('polit')}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
