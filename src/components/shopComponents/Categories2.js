import React from "react";
import { useTranslation } from "react-i18next";
// import { Accordion, Card, Button } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Categories() {
  const { t } = useTranslation();

  return (
    <div className="col-md-3">
      {/* <div className="widget">
        <h4 className="widget-title">{t("short_by")}</h4>
        <form method="post" action="#">
          <select className="form-control">
            <option>{t("man")}</option>
            <option>{t("women")}</option>
            <option>{t("accessories")}</option>
            <option>{t("shoes")}</option>
          </select>
        </form>
      </div> */}
      <div className="widget product-category">
        <h4 className="widget-title">{t("category")}</h4>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {t("shoes")}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>
                    <a href="#!">{t("brand_&_twist")}</a>
                  </li>
                  <li>
                    <a href="#!">{t("shoe_color")}</a>
                  </li>
                  <li>
                    <a href="#!">{t("shoe_color")}</a>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                {t("duty_wear")}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>
                    <a href="#!">{t("brand_&_twist")}</a>
                  </li>
                  <li>
                    <a href="#!">{t("shoe_color")}</a>
                  </li>
                  <li>
                    <a href="#!">{t("shoe_color")}</a>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                {t("workout_shoes")}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul>
                  <li>
                    <a href="#!">{t("brand_&_twist")}</a>
                  </li>
                  <li>
                    <a href="#!">{t("shoe_color")}</a>
                  </li>
                  <li>
                    <a href="#!">{t("gladian_shoes")}</a>
                  </li>
                  <li>
                    <a href="#!">{t("swis_shoes")}</a>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default Categories;
