import React, { useState } from "react";
import "../components/css/Services.css";
import { Row, Col, Card, Select, Input, DatePicker, Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import load from "../assets/images/gruzovik-1.png";
import truck from "../assets/images/gruzovik.png";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
} from "../assets/images/Service_images/Service_image";
import Data from "./Datas/ServiceData";
import AdData from "./Datas/AdData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Services = () => {
  const [show, setShow] = useState(false);

  const services = () => {
    setShow(!show);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 0,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 0,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="service">
      <Row gutter={20} style={{ margin: "-50px 20px" }}>
        <Col flex="1 1 800px">
          <Row gutter={2}>
            <Col span={24}>
              <Card bordered={true}>
                <Row>
                  <Col flex="1 1 400px">
                    <p>From</p>
                    <Select
                      showSearch
                      style={{
                        width: 280,
                      }}
                      placeholder="Enter a city, region, or country"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Russia",
                        },
                        {
                          value: "2",
                          label: "Kazakhstan",
                        },
                        {
                          value: "3",
                          label: "Belarus",
                        },
                        {
                          value: "4",
                          label: "Ukraine",
                        },
                        {
                          value: "5",
                          label: "Uzbekistan",
                        },
                        {
                          value: "6",
                          label: "Lithuaina",
                        },
                        {
                          value: "6",
                          label: "Kyrgyzstan",
                        },
                        {
                          value: "6",
                          label: "Armenia",
                        },
                        {
                          value: "6",
                          label: "Moldava",
                        },
                        {
                          value: "6",
                          label: "Latvia",
                        },
                      ]}
                    />
                    <Input
                      allowClear
                      style={{ width: "100px", marginLeft: "5px" }}
                      placeholder="raius, km"
                    />
                  </Col>
                  <Col flex="1 1 400px">
                    <p>To</p>
                    <Select
                      showSearch
                      style={{
                        width: 280,
                      }}
                      placeholder="Enter a city, region, or country"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Russia",
                        },
                        {
                          value: "2",
                          label: "Kazakhstan",
                        },
                        {
                          value: "3",
                          label: "Belarus",
                        },
                        {
                          value: "4",
                          label: "Ukraine",
                        },
                        {
                          value: "5",
                          label: "Uzbekistan",
                        },
                        {
                          value: "6",
                          label: "Lithuaina",
                        },
                        {
                          value: "6",
                          label: "Kyrgyzstan",
                        },
                        {
                          value: "6",
                          label: "Armenia",
                        },
                        {
                          value: "6",
                          label: "Moldava",
                        },
                        {
                          value: "6",
                          label: "Latvia",
                        },
                      ]}
                    />
                    <Input
                      allowClear
                      style={{ width: "100px", marginLeft: "5px" }}
                      placeholder="raius, km"
                    />
                  </Col>
                  <Col flex="1 1 100px">
                    <p>Date</p>
                    <DatePicker
                      style={{
                        width: "70%",
                      }}
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Col
                    flex="1 1 100px"
                    style={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <Col>
                      <Button className="btnloads" type="">
                        SEARCH LOADS
                      </Button>
                    </Col>
                    <Col>
                      <Button className="btntrucks" type="">
                        SEARCH TRUCKS
                      </Button>
                    </Col>
                  </Col>
                  <Col flex="0 1 200px">
                    <Button className="btndefault" type="">
                      CALCULATE DISTANCE
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Row className="trucks_box">
              <Col className="trucks_b" flex="1 1 400px">
                <Card
                  style={{ backgroundColor: "#F7FFF4" }}
                  className="addcard"
                  bordered={true}
                >
                  <div className="truckcard">
                    <div>
                      <h3>Add load for free</h3>
                      <p>and get offers from carriers</p>
                      <Button className="addbtn addbtn1">
                        <PlusCircleFilled style={{ fontSize: "14px" }} />
                        ADD LOAD
                      </Button>
                    </div>
                    <img className="truckimage" src={load} />
                  </div>
                </Card>
              </Col>
              <Col className="trucks_b" flex="1 1 400px">
                <Card
                  style={{ backgroundColor: "#FEF8E7" }}
                  className="addcard"
                  bordered={true}
                >
                  <div className="truckcard">
                    <div>
                      <h3>Add truck for free</h3>
                      <p>and receive offers from shippers</p>
                      <Button className="addbtn addbtn2">
                        <PlusCircleFilled style={{ fontSize: "14px" }} />
                        ADD TRUCK
                      </Button>
                    </div>
                    <img className="truckimage" src={truck} />
                  </div>
                </Card>
              </Col>
            </Row>
          </Row>

          {/* Services section */}

          <services className="services">
            <h2>Services</h2>
            <Row
              className="service_hide"
              gutter={20}
              style={{ marginTop: "20px" }}
            >
              <Col span={12}>
                <div className="card" bordered={true}>
                  <div className="card_title">
                    <h2>Distance calculator</h2>
                    <p>Route planning for freight transport</p>
                    <Button className="btnservice">CALCULATE A ROUTE</Button>
                  </div>
                  <img src={img3} />
                </div>
              </Col>
              <Col span={12}>
                <div className="card" bordered={true}>
                  <div className="card_title">
                    <h2>The Real carrier</h2>
                    <p>This label highlights carriers with their own</p>
                    <Button className="btnservice">MORE</Button>
                  </div>
                  <img src={img4} />
                </div>
              </Col>
            </Row>
            {show ? (
              <div>
                {Data.map((title) => {
                  return (
                    <Row
                      className="service_hide"
                      gutter={20}
                      style={{ marginTop: "20px" }}
                    >
                      <Col span={12}>
                        <div className="card" bordered={true}>
                          <div className="card_title">
                            <h2>{title.title}</h2>
                            <p>{title.desc}</p>
                            <Button className="btnservice">{title.btn}</Button>
                          </div>
                          <img src={title.img1} />
                        </div>
                      </Col>
                      <Col span={12}>
                        <div className="card" bordered={true}>
                          <div className="card_title">
                            <h2>{title.title2}</h2>
                            <p>{title.desc2}</p>
                            <Button className="btnservice">{title.btn2}</Button>
                          </div>
                          <img src={title.img2} />
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            ) : (
              <div>
                <Carousel
                  className="carousel"
                  responsive={responsive}
                  removeArrowOnDeviceType={["mobile"]}
                >
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Insurance</h2>
                      <p>
                        Cargo and liability insurance. Cashback for ATI.SU
                        participants
                      </p>
                      <Button className="btnservice">
                        CHOOSE AN INSURANCE
                      </Button>
                    </div>
                    <img src={img1}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Orders</h2>
                      <p>
                        Ship loads and accept orders quickly without calls or
                        negotiations
                      </p>
                      <Button className="btnservice">
                        HOW TO CREATE ORDER
                      </Button>
                    </div>
                    <img src={img2}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Active Carrier Search</h2>
                      <p>Use to ship your loads fast</p>
                      <Button className="btnservice">LEARN MORE</Button>
                    </div>
                    <img src={img3}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>GPS monitoring</h2>
                      <p>
                        Track transport and delivery status on the map for free
                      </p>
                      <Button className="btnservice">START USING</Button>
                    </div>
                    <img src={img4}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>ATI-Docs</h2>
                      <p>
                        Creation and exchange of legally relevant electronic
                        documents for freight exchange
                      </p>
                      <Button className="btnservice">CREATE A DOCUMENT</Button>
                    </div>
                    <img src={img5}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Verification</h2>
                      <p>
                        Compilation of verification tests for transportation.
                        Check trucks, drivers and firms in one place
                      </p>
                      <Button className="btnservice">
                        CHOOSE VERIFICATION
                      </Button>
                    </div>
                    <img src={img6}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>The Real carrier</h2>
                      <p>
                        This label highlights carriers with their own trucks
                        among the rest of the participants
                      </p>
                      <Button className="btnservice">MORE</Button>
                    </div>
                    <img src={img7}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Distance calculator</h2>
                      <p>Route planning for freight transport</p>
                      <Button className="btnservice">CALCULATE A ROUTE</Button>
                    </div>
                    <img src={img8}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Counterparty Verification</h2>
                      <p>
                        Detailed report and map of connections of Russian legal
                        entities and Individual Entrepreneurs
                      </p>
                      <Button className="btnservice">LEARN MORE</Button>
                    </div>
                    <img src={img9}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Traffic light+</h2>
                      <p>
                        Auto verification counterparties and participants of
                        ATI.SU
                      </p>
                      <Button className="btnservice">CHECK THE FIRM</Button>
                    </div>
                    <img src={img10}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Boards</h2>
                      <p>
                        Cloud service to automate operations with carriers and
                        customers
                      </p>
                      <Button className="btnservice">
                        HOW TO CREATE A BOARD
                      </Button>
                    </div>
                    <img src={img11}/>
                  </div>
                  <div className="card" bordered={true}>
                    <div className="card_title">
                      <h2>Freight Tendering</h2>
                      <p>
                        Find customers for transportation on a long term basis
                      </p>
                      <Button className="btnservice">FIND TENDER</Button>
                    </div>
                    <img src={img12}/>
                  </div>
                </Carousel>
              </div>
            )}

            <Row className="service_hide">
              <Col span={24}>
                <Button className="btnhide" onClick={services}>
                  {show ? "Hide" : "All services"}
                </Button>
              </Col>
            </Row>
          </services>

          {/* End Services section */}
        </Col>

        <Col flex="1 1 50px">
          <Row gutter={2}>
            <Col span={24}>
              <Card bordered={true}>
                <Button className="btnlink" type="link">
                  About ATI.SU
                </Button>
                <Button className="btnlink" type="link">
                  Prices and Licenses
                </Button>
                <Button className="btnlink" type="link">
                  FAQ
                </Button>
                <Button className="btnlink" type="link">
                  ATI.SU Participants Rating
                </Button>
                <Button className="btnlink" type="link">
                  Index ATI.SU
                </Button>
                <Button className="btnlink" type="link">
                  Average rates
                </Button>
              </Card>
            </Col>
          </Row>

          <Row className="advertisements" gutter={2}>
            <Col span={24}>
              <Card bordered={true}>
                <span>TRUCKMARKET</span>
                <h2>Rent and sale of vehicles and special machinery</h2>

                {AdData.map((title) => {
                  return (
                    <div className="ad_item">
                      <Col span={8}>
                        <img className="ad_image" src={title.img} />
                      </Col>
                      <Col span={16}>
                        <h4>{title.title}</h4>
                        <p>{title.desc}</p>
                        <h4>{title.price}</h4>
                      </Col>
                    </div>
                  );
                })}

                <Button className="adbtn">All advertisements</Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
