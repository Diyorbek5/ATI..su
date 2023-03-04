import { Affix, Row, Col, Statistic } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import "../components/css/Header.css";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
} from "../assets/images/Header_images/Header_image";
import { useState } from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <Affix offsetTop={0}>
        <div className="stickynav">
          <div className="load">
            <a className="a_hide" href="#">
              Your Loads
            </a>
            <a href="#">
              <PlusCircleFilled style={{ fontSize: "14px" }} /> Add load
            </a>
          </div>
          <div className="truck">
            <a className="a_hide" href="#">
              Your Trucks
            </a>
            <a href="#">
              <PlusCircleFilled style={{ fontSize: "14px" }} /> Add truck
            </a>
          </div>
          <div className="tender">
            <a className="a_hide" href="#">
              Orders
            </a>
            <a className="a_hide" href="#">
              Your platforms
            </a>
            <a className="a_hide" href="#">
              Catalogs
            </a>
            <a href="#">
              <PlusCircleFilled style={{ fontSize: "14px" }} /> Add tender
            </a>
          </div>
        </div>
      </Affix>

      <header className="header">
        <Row style={{ padding: "0 20px",boxSizing:'border-box' }}>
          <Col span={14}>
            <h1>
              Freight exchange and the largest ecosystem of services for
              transport logistics in Russia and the CIS
            </h1>
            <h3>
              We help to find loads, trusted freight carriers and save money by
              automation of processes
            </h3>
          </Col>
          <Col className="image_box" span={10}>
            <a>
              <img src={image1} className="image1" />
            </a>
            <a>
              <img src={image2} className="image2" />
            </a>
            <a>
              <img src={image3} className="image3" />
            </a>
            <a>
              <img src={image4} className="image4" />
            </a>
            <a>
              <img src={image5} className="image5" />
            </a>
          </Col>
        </Row>
        <Row className="statistic_box" style={{ padding: "0 20px" }}>
          <Col span={3} className="statistic">
            <a>
              <div className="statistic-item">
                <h2>
                  1372<span>Index ATI.SU</span>
                </h2>
              </div>
              <span className="span_hide">+ 2.2% per week</span>
            </a>
          </Col>
          <Col span={3} className="statistic">
            <a>
              <div className="statistic-item">
                <h2>
                  254 163<span>loads</span>
                </h2>
              </div>
              <span className="span_hide">+ 201 086 today</span>
            </a>
          </Col>
          <Col span={3} className="statistic">
            <a>
              <div className="statistic-item">
                <h2>
                  70 060 <span>trucks</span>
                </h2>
              </div>
              <span className="span_hide">+ 21 989 today</span>
            </a>
          </Col>
          <Col span={4} className="statistic">
            <a>
              <div className="statistic-item">
                <h2>
                  330 434 <span>participants</span>
                </h2>
              </div>
              <span className="span_hide">+ 810 today</span>
            </a>
          </Col>
          <Col span={3} className="statistic">
            <a>
              <div className="statistic-item">
                <h2>
                  181<span>tenders</span>
                </h2>
              </div>
              <span className="span_hide">+ 75 per week</span>
            </a>
          </Col>
        </Row>
      </header>
    </nav>
  );
};

export default Header;
