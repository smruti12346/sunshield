import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    innerHeight: "600px",
  };

  return (
    <section
      id="banner"
      className="banner style-3"
    >
      <div className="banner-area">
        <Slider {...settings}>
          <div
            className="b_slide_1"
            style={{ height: "600px" }}
          >
            <div className="slider-content">
              <div
                className="container"
                style={{ paddingTop: "80px" }}
              >
                <div className="banner-content banner-content-new">
                  <div className="banner-heading">
                    <h2>Connecting Diverse Markets With</h2>
                    <h2>
                      Convenient Export <span>Services!</span>
                    </h2>
                  </div>
                  <p>
                    Attention global importers! Sunshield Exim proudly serves as
                    your trusted sourcing partner
                  </p>
                  <Link
                    href="/products"
                    className="custom-btn"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="b_slide_2"
            style={{ height: "600px" }}
          >
            <div className="slider-content">
              <div
                className="container"
                style={{ paddingTop: "80px" }}
              >
                <div className="banner-content banner-content-new">
                  <div className="banner-heading">
                    <h2>Expand Possibilities </h2>
                    <h2>
                      With <span>Global</span> Trade Partner
                    </h2>
                  </div>
                  <p>
                    dedicated to forging strong partnerships in the realm of
                    global trade. From spices and fruits to vegetables and
                    seafood
                  </p>
                  <Link
                    href="/products"
                    className="custom-btn"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="b_slide_3"
            style={{ height: "600px" }}
          >
            <div className="slider-content">
              <div
                className="container"
                style={{ paddingTop: "80px" }}
              >
                <div className="banner-content banner-content-new">
                  <div className="banner-heading">
                    <h2>Forging Pathways For </h2>
                    <h2>
                      Importers Across The <span>Globe</span>
                    </h2>
                  </div>
                  <p>
                    our selection ensures unparalleled quality and taste. Rest
                    assured for a seamless import experience!
                  </p>
                  <Link
                    href="/products"
                    className="custom-btn"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Banner;
