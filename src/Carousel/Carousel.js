import React from "react";
import Slider from "react-slick";
import womenImage from "../images/women.jpeg";
import menImage from "../images/men.jpg";
import kidsImage from "../images/kids.jpg";
import { Link } from "react-router-dom";
import "./Carousel.scss";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="carousel">
          <div>
            <Link to="/women">
              <img src={womenImage} alt="" width="100%" />
            </Link>
          </div>
          <div className="WoMeKi">
            <div className="flex">
              <Link to="/women">
                <img src={womenImage} alt="" width="100%" height="200px" />
              </Link>
            </div>
            <Link to="/men">
              <img src={menImage} alt="" width="100%" height="200px" />
            </Link>
            <Link to="/kids">
              <img src={kidsImage} alt="" width="100%" height="200px" />
            </Link>
          </div>
        </div>

        <div>
          <div>
            <Link to="/men">
              <img src={menImage} alt="" width="100%" />
            </Link>
          </div>

          <div className="WoMeKi">
            <Link to="/women">
              <img src={womenImage} alt="" width="300px" height="200px" />
            </Link>

            <div>
              <Link to="/men">
                <img src={menImage} alt="" width="300px" height="200px" />
              </Link>
            </div>
            <Link to="/kids">
              <img src={kidsImage} alt="" width="300px" height="200px" />
            </Link>
          </div>
        </div>

        <div>
          <div>
            <Link to="/kids">
              <img src={kidsImage} alt="" width="100%" />
            </Link>
          </div>

          <div className="WoMeKi">
            <Link to="/women">
              <img src={womenImage} alt="" width="300px" height="200px" />
            </Link>
            <Link to="/men">
              <img src={menImage} alt="" width="300px" height="200px" />
            </Link>

            <div>
              <Link to="/kids">
                <img src={kidsImage} alt="" width="300px" height="200px" />
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
