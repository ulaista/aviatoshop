import React from "react";
import { useTranslation } from "react-i18next";

function VievUsInst() {
  const { t } =useTranslation();
  return (
    <div>
      <section className="section instagram-feed">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>{t('posts')}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* <div className="instagram-slider" id="instafeed" data-accessToken="IGQVJYeUk4YWNIY1h4OWZANeS1wRHZARdjJ5QmdueXN2RFR6NF9iYUtfcGp1NmpxZA3RTbnU1MXpDNVBHTzZAMOFlxcGlkVHBKdjhqSnUybERhNWdQSE5hVmtXT013MEhOQVJJRGJBRURn"></div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VievUsInst;
