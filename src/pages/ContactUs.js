import React from "react";
import PageHeader from "../components/contactUsComponents/PageHeader";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader />

      <section className="page-wrapper">
        <div className="contact-section">
          <div className="container">
            <div className="row">
              <div className="contact-form col-md-6 ">
                <form id="contact-form" method="post" action="" role="form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder={t('full_name')}
                      className="form-control"
                      name="name"
                      id="name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      placeholder={t('email')}
                      className="form-control"
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      placeholder={t('object')}
                      className="form-control"
                      name="subject"
                      id="subject"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      rows="6"
                      placeholder={t('message')}
                      className="form-control"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>

                  <div id="mail-success" className="success">
                    Thank you. The Mailman is on His Way
                  </div>

                  <div id="mail-fail" className="error">
                    Sorry, don't know what happened. Try later
                  </div>

                  <div id="cf-submit">
                    <input
                      type="submit"
                      id="contact-submit"
                      className="btn btn-transparent"
                      value={t('send')}
                    />
                  </div>
                </form>
              </div>

              {/* <div className="contact-details col-md-6">
                <div className="google-map">
                  <div id="map"></div>
                </div>
                <ul className="contact-short-info">
                  <li>
                    <i className="tf-ion-ios-home"></i>
                    <span>{t('location')}</span>
                  </li>
                  <li>
                    <i className="tf-ion-android-phone-portrait"></i>
                    <span><a href="tel:+79118138879">+7-911-813-8879</a></span>
                  </li>
                  <li>
                    <i className="tf-ion-android-mail"></i>
                    <span>{t('email')}: knitloft@mail.ru</span>
                  </li>
                </ul>
                <div className="social-icon">
                  <ul>
                    <li>
                      <a
                        className="fb-icon"
                        href="https://www.facebook.com/themefisher"
                      >
                        <i className="tf-ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/themefisher">
                        <i className="tf-ion-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://themefisher.com/">
                        <i className="tf-ion-social-dribbble-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://themefisher.com/">
                        <i className="tf-ion-social-googleplus-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://themefisher.com/">
                        <i className="tf-ion-social-pinterest-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></script>
      <script type="text/javascript" src="plugins/google-map/gmap.js"></script>
    </div>
  );
}

export default ContactUs;
