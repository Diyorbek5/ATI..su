import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../components/css/Footer.css";
import { Button, Tooltip, Space, Select } from "antd";
import {
  docs,
  message,
  cargo,
  api,
  google,
  apple,
  rustore,
  appgallery,
  vk,
  odno,
  youtube,
  zen,
  telegram,
} from "../assets/images/footer_icons/footer_icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_head">
        <h5>TRANSPORTATION AUTOMATION</h5>
        <div className="footer_head_items">
          <Button type="link">
            <img style={{ width: "20px" }} src={docs} />
            ATI-Docs
          </Button>
          <Button type="link">
            <img src={message} />
            ATI Messenger
          </Button>
          <Button type="link">
            <img style={{ width: "20px" }} src={cargo} />
            Chains of cargoes
          </Button>
          <Button type="link">
            <img src={api} />
            ATI.SU API
          </Button>
        </div>
      </div>

      <div className="footer_body">
        <div className="footer_body_boxes">
          <div className="box">
            <h5>USEFUL</h5>
            <div className="links">
              <Button type="link">Distance calculator</Button>
            </div>
          </div>
          <div className="box">
            <h5>SECURITY</h5>
            <div className="links">
              <Button type="link">Verify partners, drivers and vehicles</Button>
              <Button type="link">Counterparty Verification</Button>
            </div>
          </div>
          <div className="box">
            <h5>CONTACTS AND RATES</h5>
            <div className="links">
              <Button type="link">Contact Information</Button>
              <Button type="link">Advertising on the website</Button>
              <Button type="link">Prices</Button>
            </div>
          </div>
          <div className="box">
            <h5>INFORMATION</h5>
            <div className="links">
              <Button type="link">Exclusive materials</Button>
              <Button type="link">Terms of use</Button>
              <Button type="link">Privacy policy</Button>
              <Button type="link">Posting rules</Button>
              <Button type="link">Site map</Button>
            </div>
          </div>
          <div className="box">
            <h5>HELP</h5>
            <div className="links">
              <Button style={{display:'flex',alignItems:'center'}} type="link">ATI.SU tutorial videos<img style={{ width:'20px',marginLeft:'10px' }} src={youtube} /></Button>
              <Button type="link">Useful shipping information</Button>
              <Button type="link">FAQ</Button>
              <Button type="link">Technical information</Button>
              <Button className="btn" type="default">
                Ask A Question
              </Button>
            </div>
          </div>
        </div>

        <Accordion className="accordion">
          <AccordionSummary
            style={{
              backgroundColor: "#E3E3E3",
              height:'50px'
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            TransitionProps={{ unmountOnExit: false }}
            id="panel1a-header"
          >
            <h5>USEFUL</h5>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#E3E3E3",
            }}
          >
            <Button type="link">Distance calculator</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            style={{
              backgroundColor: "#E3E3E3",
              height:'50px'
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            TransitionProps={{ unmountOnExit: false }}
            id="panel1a-header"
          >
            <h5>SECURITY</h5>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#E3E3E3",
            }}
          >
            <Button type="link">Verify partners, drivers and vehicles</Button>
            <Button type="link">Counterparty Verification</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            style={{
              backgroundColor: "#E3E3E3",
              height:'50px'
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            TransitionProps={{ unmountOnExit: false }}
            id="panel1a-header"
          >
            <h5>CONTACTS AND RATES</h5>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#E3E3E3",
            }}
          >
            <Button type="link">Contact Information</Button>
            <Button type="link">Advertising on the website</Button>
            <Button type="link">Prices</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            style={{
              backgroundColor: "#E3E3E3",
              height:'50px'
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            TransitionProps={{ unmountOnExit: false }}
            id="panel1a-header"
          >
            <h5>INFORMATION</h5>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#E3E3E3",
            }}
          >
            <Button type="link">Exclusive materials</Button>
            <Button type="link">Terms of use</Button>
            <Button type="link">Privacy policy</Button>
            <Button type="link">Posting rules</Button>
            <Button type="link">Site map</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            style={{
              backgroundColor: "#E3E3E3",
              height:'50px'
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            TransitionProps={{ unmountOnExit: false }}
            id="panel1a-header"
          >
            <h5>HELP</h5>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#E3E3E3",
            }}
          >
            <Button style={{marginLeft:'2px'}} type="link">
              ATI.SU tutorial videos <img style={{ width:'20px',marginLeft:'10px' }} src={youtube} />
            </Button>
            <Button type="link">Useful shipping information</Button>
            <Button type="link">FAQ</Button>
            <Button type="link">Technical information</Button>
          </AccordionDetails>
        </Accordion>

        <Button className="btn_hide" type="">
          Ask A Question
        </Button>

        <div className="footer_body_apps">
          <div className="mobile_apps">
            <h5>MOBILE APPLICATIONS</h5>
            <div className="apps">
              <img className="app" src={google} />
              <img className="app" src={apple} />
              <img className="app" src={rustore} />
              <img className="app" src={appgallery} />
            </div>
          </div>
          <div className="mobile_links">
            <Tooltip
              placement="topLeft"
              title="Join the official ATI group in VKontakte"
            >
              <img src={vk} />
            </Tooltip>
            <Tooltip
              placement="topLeft"
              title="Join the official ATI group in Odnoklassniki"
            >
              <img fill="green" src={odno} />
            </Tooltip>
            <Tooltip
              placement="topLeft"
              title="ATI channel with instructions for working with the service"
            >
              <img style={{ color: "" }} src={youtube} />
            </Tooltip>
            <Tooltip
              placement="topLeft"
              title="Expert materials and news about everything related to trucking on our Zen.Yandex"
            >
              <img style={{ color: "" }} src={zen} />
            </Tooltip>
            <Tooltip
              placement="topLeft"
              title="Be the first to learn about new features of ATI.SU and get the latest news from the world of logistics in Telegram"
            >
              <img style={{ color: "" }} src={telegram} />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="footer_end">
        <p>
          1998-2023 © "ATI.SU" is legally registered trademark.{" "}
          <a href="">About Copyright</a>
        </p>
        <Space wrap>
          <Select
            defaultValue="RU"
            style={{ width: 75 }}
            bordered={false}
            options={[
              { value: "RU", label: "RU" },
              { value: "ENG", label: "ENG" },
            ]}
          />
        </Space>
      </div>
    </div>
  );
};

export default Footer;
