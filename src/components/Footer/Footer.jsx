import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
<div className="footer-content">
    <div className="col">
        <div className="title">About</div>
            <div className="text">
                add text about
            </div>
        
        </div>
    <div className="col"><div className="title">Contact</div>
    <div className="c-item">
        <FaLocationArrow/>
        <div className="text">
                address
            </div>
    </div>
    <div className="c-item">
        <FaEnvelope/>
        <div className="text">
                Mail: prishaa@gmail.com
            </div>
    </div>
    <div className="c-item">
        <FaMobileAlt/>
        <div className="text">
                Phone:8964365780
            </div>
    </div>
    </div>
    <div className="col"><div className="title">Categories</div>
    <span className="text">Lehengas</span>
    <span className="text">Gowns</span>
    <span className="text">Fusion Wear</span>
    <span className="text">Sarees</span>
    <span className="text">Bridal Collections</span>
                
            
    </div>
    <div className="col"><div className="title">Pages</div>
    <span className="text">Home</span>
    <span className="text">About</span>
    <span className="text">Privacy Policy</span>
    <span className="text">Returns</span>
    <span className="text">Terms & Conditions</span>
    <span className="text">Contact Us</span>
    </div>
</div>
<div className="bottom-bar">
    <div className="bottom-bar-content">
        <div className="text">
        PRISHAA 2024 CREATED BY PRISHAA E-COMMERCE
        </div>
        </div>
    <img src={Payment} className="image"/>
    
</div>
    </footer>;
};

export default Footer;
