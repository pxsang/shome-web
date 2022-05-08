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

    const {
      name,
      office_address,
      factory_address,
      showroom_address,
      phone,
      email,
    } = companyInfo;

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
            {showroom_address && (
              <div className="footer__info">
                <div className="footer__label">Showroom:</div>
                <div className="footer__value">{showroom_address}</div>
              </div>
            )}
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
                target="_blank"
                href="https://www.facebook.com/ShomeInterior/"
              >
                <FacebookFilled className="follow__social__icon" />
              </a>
              <a
                className="tiktok"
                target="_blank"
                href="https://www.tiktok.com/@shomeinterior"
              >
                <img
                  className="follow__social__icon"
                  src={"/images/tiktok-white.png"}
                />
              </a>
              <a
                className="youtube"
                target="_blank"
                href="https://www.youtube.com/channel/UCtWNNy1EecFZofjFO3h8gGQ"
              >
                <YoutubeFilled className="follow__social__icon" />
              </a>
              {/* <a className="instagram" href="https://www.facebook.com/noithatgold">
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
