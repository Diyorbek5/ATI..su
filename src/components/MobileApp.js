import React from "react";
import "../components/css/Mobile.css";
import { Row, Col, Card, Button } from "antd";
import {
  GoogleOutlined,
  AppleOutlined,
  CopyOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import {
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  link8,
  link9,
  link10,
  link11,
  link12,
} from "../assets/images/link_icons/links";
import mobile from "../assets/images/android_iphone.png";
import mobileimg1 from "../assets/images/mobileimg1.svg";
import mobileimg2 from "../assets/images/mobileimg2.svg";

const MobileApp = () => {
  return (
    <div className="mobile">
      <Row gutter={20} style={{ margin: "-50px 20px" }}>
        <Col flex="1 1 800px">
          <Card className="mobile_card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="applications">
                <h1>Mobile applications</h1>
                <div className="apps">
                  <Col
                    style={{ display: "flex", alignItems: "flex-start" }}
                    span={24}
                  >
                    <img src={mobileimg1} />
                    <div>
                      <h2>ATI Loads and Transport</h2>
                      <p>
                        Find and add loads, send offers, view company ratings
                      </p>
                      <div>
                        <Button className="app_btn">
                          <GoogleOutlined />
                          GOOGLE PLAY
                        </Button>
                        <Button className="app_btn">
                          <AppleOutlined />
                          APP STORE
                        </Button>
                        <Button className="app_btn">
                          <ShopOutlined />
                          APP GALLERY
                        </Button>
                        <Button className="app_btn">
                          <CopyOutlined />
                          RUSTORE
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginTop: "20px",
                    }}
                    span={24}
                  >
                    <img src={mobileimg2} />
                    <div>
                      <h2>ATI Driver</h2>
                      <p>Track transport on the map in real time</p>
                      <div>
                        <Button className="app_btn">
                          <GoogleOutlined />
                          GOOGLE PLAY
                        </Button>
                        <Button className="app_btn">
                          <CopyOutlined />
                          RUSTORE
                        </Button>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
              <img className="mobile_img" src={mobile} />
            </div>
          </Card>
        </Col>
        <Col flex="1 1 50px">
          <Card className="partners_card">
            <h2>ATI.SU Partners</h2>
            <div className="link_btn">
              <Button type="link">
                <img src={link9} />
                Bridge Capital
              </Button>
              <Button type="link">
                <img src={link6} />
                Potok.Digital
              </Button>
              <Button type="link">
                <img src={link7} />
                TruckRadar
              </Button>
              <Button type="link">
                <img src={link8} />
                PapaFinance
              </Button>
            </div>
            <p>Services for logistics specialists</p>
            <div className="link_btn">
              <Button type="link">
                <img src={link9} />
                4logist
              </Button>
              <Button type="link">
                <img src={link6} />
                TransTrade
              </Button>
              <Button type="link">
                <img src={link7} />
                Logister
              </Button>
              <Button type="link">
                <img src={link8} />
                Klarkk
              </Button>
            </div>
            <p>Verification Services</p>
            <div className="link_btn">
              <Button type="link">
                <img src={link9} />
                Movizor
              </Button>
              <Button type="link">
                <img src={link9} />
                Kontur.Focus
              </Button>
              <Button type="link">
                <img src={link11} />
                Reputation
              </Button>
            </div>
            <p>Banks for business</p>
            <div className="link_btn">
              <Button type="link">
                <img src={link12} />
                Bank «Tochka»
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MobileApp;
