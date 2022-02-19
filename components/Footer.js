import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import fetcher from "../helpers/fetcher";
import Link from "next/link";

import {
  FacebookFilled,
  YoutubeFilled,
  InstagramFilled,
} from "@ant-design/icons";

class Footer extends Component {
  render() {
    const { companyInfo } = this.props;

    if (!companyInfo) {
      return null;
    }

    const { name, office_address, factory_address, phone, email } = companyInfo;

    return (
      <Layout.Footer className="footer">
        <Row>
          <Col xs={24} md={16} className="info">
            <h2 className="main-title text-white">{name}</h2>
            <div className="footer__info">
              <div className="footer__label">Địa chỉ VP:</div>
              <div className="footer__value">{office_address}</div>
            </div>
            <div className="footer__info">
              <div className="footer__label">Xưởng sản xuất:</div>
              <div className="footer__value">{factory_address}</div>
            </div>
            <div className="footer__info">
              <div className="footer__label">Tel:</div>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className="footer__info">
              <div className="footer__label">Email:</div>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </Col>
          <Col xs={24} md={8} className="follow">
            <h2 className="main-title text-white">Follow us</h2>
            <div className="follow__social">
              <a
                className="facebook"
                href="https://www.facebook.com/ShomeInterior/"
              >
                <FacebookFilled className="follow__social__icon" />
              </a>
              {/* <a
                className="tiktok"
                href="https://www.facebook.com/ShomeInterior/"
              >
                <img
                  className="follow__social__icon"
                  src={"/images/tiktok.svg"}
                />
              </a> */}
              {/* <a className="youtube" href="https://www.facebook.com/noithatgold">
                <YoutubeFilled className="follow__social__icon" />
              </a>
              <a className="instagram" href="https://www.facebook.com/noithatgold">
                <InstagramFilled className="follow__social__icon" />
              </a> */}
            </div>
          </Col>
        </Row>
      </Layout.Footer>
    );
  }
}

export default Footer;
