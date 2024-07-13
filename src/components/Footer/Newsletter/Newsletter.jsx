import React from "react";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    

} from "react-icons/fa";

import "./Newsletter.scss";

const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">
                Sign up for latest updates and exciting offers
                </span>
                <div className="form">
                    <input typr="text" placeholder="Email Address"/>
                    <button>Subscribe</button>
                </div>
                <div className="text">Your informations will be used in accordance with our privacy policy</div>
                <div className="social-icons">
                    <div className="icons">
                        <FaFacebookF size={14}/>
                        </div>    
                        <div className="icons">
                        <FaTwitter size={14}/>
                        </div>
                        <div className="icons">
                        <FaInstagram size={14}/>
                        
                    </div>
                </div>


                

        </div>
    </div>;
};

export default Newsletter;
