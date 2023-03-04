import React, { useState } from "react";
import "../components/css/Navbar.css";
import { Button, Select, Space } from "antd";
import { logo } from "../assets/images/Header_images/Header_image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
     <div style={{display:'flex',alignItems:'center'}}>
     <div className="nav-logo">
        <a href="#" className="logo">
          <img src={logo} />
          <h1>ati.su</h1>
        </a>
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a>Loads</a>
        <a>Transport</a>
        <a>Carriers</a>
        <a>Platforms</a>
        <a>Tenders</a>
        <a>Verifications</a>
        <a>ATI-Docs</a>
        <a>Time Slots</a>
        <a>Truckmarket</a>
        <a>Rating</a>
      </div>
     </div>

      <div className="register">
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
        <Button type="" className="register_btn register_btn1">
          LOGIN
        </Button>
        <Button type="" className="register_btn register_btn2">
          REGISTRATION
        </Button>
        <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      </div>

     
    </div>
  );
};

export default Navbar;
