import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000, 
  };

  return (
    <section id="banner" className="banner style-3">
      <div className="banner-area">
        <Slider {...settings}>
          <div className="b_slide_1">
            <div className="slider-content">
              <div className="container">
                <div className="banner-content">
                  <div className="banner-heading">
                    <h2>Let's...Go</h2>
                    <h2>With <span>Eco Green</span> to get</h2>
                    <h2>Our <span>Global Clean</span></h2>
                  </div>
                  <p>Energstce Sndicate Compete Comunes Aftering Bledng Edge Conten Interactively awesome theme Reconceptualze</p>
                  <a href="#" className="custom-btn">Donate Now <i className="fas fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="b_slide_2">
            <div className="slider-content">
              <div className="container">
                <div className="banner-content">
                  <div className="banner-heading">
                    <h2>Let's...Go</h2>
                    <h2>With <span>Eco Green</span> to get</h2>
                    <h2>Our <span>Global Clean</span></h2>
                  </div>
                  <p>Energstce Sndicate Compete Comunes Aftering Bledng Edge Conten Interactively awesome theme Reconceptualze</p>
                  <a href="#" className="custom-btn">Donate Now <i className="fas fa-heart"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="b_slide_3">
            <div className="slider-content">
              <div className="container">
                <div className="banner-content">
                  <div className="banner-heading">
                    <h2>Let's...Go</h2>
                    <h2>With <span>Eco Green</span> to get</h2>
                    <h2>Our <span>Global Clean</span></h2>
                  </div>
                  <p>Energstce Sndicate Compete Comunes Aftering Bledng Edge Conten Interactively awesome theme Reconceptualze</p>
                  <a href="#" className="custom-btn">Donate Now <i className="fas fa-heart"></i></a>
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