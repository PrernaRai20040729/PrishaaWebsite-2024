import "./Banner.scss";
import BannerImg from "../../../assets/banner dress.jpg";
const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <p>END  OF  SEASON</p>
                <h1>SALE</h1>
                <p>
                    UPTO 
                    60% 
                    OFF
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>

            </div>
              <img className="banner-img" src={BannerImg} alt=""/>
            

            </div>
        </div>
    );
};

export default Banner;
