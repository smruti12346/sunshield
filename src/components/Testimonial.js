import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [
        {
          breakpoint: 1024, // screens larger than 1024px
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768, // screens between 768px and 1024px
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480, // screens smaller than 768px
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
  


  return (
    <>
    
      {/* testimonial section start here */}
      <section className="testimonial-section padding-tb" style={{backgroundImage: 'url(assets/images/testimonial/bg-image.jpg)', backgroundSize: 'cover'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up" data-aos-duration={700}>
            <h2>Our Testimonials</h2>
            <h2><span>Client’s Feedback Latest Reviews From My Clients</span></h2>
          </div>
          <div className="testimonial-slider" data-aos="fade-up" data-aos-duration={700}>
            <Slider {...settings}>
              <div className="testimonial-box">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-header">
                      <div className="post-thumb">
                        <div className="round-shape" />
                        <img src="assets/images/testimonial/01.png" alt="testimonial" />
                      </div>
                      <div className="post-content">
                        <h5>Shaprin taba</h5>
                        <p>CEO of Heallty</p>
                      </div>
                      <div className="sponsor-thumb">
                        <img src="assets/images/testimonial/icon1.png" alt="testimonial" />
                      </div>
                    </div>
                    <div className="post-body">
                      <p>Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Thoun Covaen Theme Anyin Vauer</p>
                      <ul>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-header">
                      <div className="post-thumb">
                        <div className="round-shape" />
                        <img src="assets/images/testimonial/02.png" alt="testimonial" />
                      </div>
                      <div className="post-content">
                        <h5>Umme Hafsa</h5>
                        <p>CEO of Natural</p>
                      </div>
                      <div className="sponsor-thumb">
                        <img src="assets/images/testimonial/icon2.png" alt="testimonial" />
                      </div>
                    </div>
                    <div className="post-body">
                      <p>Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Thoun Covaen Theme Anyin Vauer</p>
                      <ul>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-header">
                      <div className="post-thumb">
                        <div className="round-shape" />
                        <img src="assets/images/testimonial/03.png" alt="testimonial" />
                      </div>
                      <div className="post-content">
                        <h5>John Doe</h5>
                        <p>CEO of XYZ</p>
                      </div>
                      <div className="sponsor-thumb">
                        <img src="assets/images/testimonial/icon3.png" alt="testimonial" />
                      </div>
                    </div>
                    <div className="post-body">
                      <p>Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Thoun Covaen Theme Anyin Vauer</p>
                      <ul>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-header">
                      <div className="post-thumb">
                        <div className="round-shape" />
                        <img src="assets/images/testimonial/02.png" alt="testimonial" />
                      </div>
                      <div className="post-content">
                        <h5>Umme Hafsa</h5>
                        <p>CEO of Natural</p>
                      </div>
                      <div className="sponsor-thumb">
                        <img src="assets/images/testimonial/icon2.png" alt="testimonial" />
                      </div>
                    </div>
                    <div className="post-body">
                      <p>Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Thoun Covaen Theme Anyin Vauer</p>
                      <ul>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-header">
                      <div className="post-thumb">
                        <div className="round-shape" />
                        <img src="assets/images/testimonial/02.png" alt="testimonial" />
                      </div>
                      <div className="post-content">
                        <h5>Umme Hafsa</h5>
                        <p>CEO of Natural</p>
                      </div>
                      <div className="sponsor-thumb">
                        <img src="assets/images/testimonial/icon2.png" alt="testimonial" />
                      </div>
                    </div>
                    <div className="post-body">
                      <p>Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Thoun Covaen Theme Anyin Vauer</p>
                      <ul>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-header">
                      <div className="post-thumb">
                        <div className="round-shape" />
                        <img src="assets/images/testimonial/02.png" alt="testimonial" />
                      </div>
                      <div className="post-content">
                        <h5>Umme Hafsa</h5>
                        <p>CEO of Natural</p>
                      </div>
                      <div className="sponsor-thumb">
                        <img src="assets/images/testimonial/icon2.png" alt="testimonial" />
                      </div>
                    </div>
                    <div className="post-body">
                      <p>Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Thoun Covaen Theme Anyin Vauer</p>
                      <ul>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-header">
                      <div className="post-thumb">
                        <div className="round-shape" />
                        <img src="assets/images/testimonial/02.png" alt="testimonial" />
                      </div>
                      <div className="post-content">
                        <h5>Umme Hafsa</h5>
                        <p>CEO of Natural</p>
                      </div>
                      <div className="sponsor-thumb">
                        <img src="assets/images/testimonial/icon2.png" alt="testimonial" />
                      </div>
                    </div>
                    <div className="post-body">
                      <p>Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Thoun Covaen Theme Anyin Vauer</p>
                      <ul>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-header">
                      <div className="post-thumb">
                        <div className="round-shape" />
                        <img src="assets/images/testimonial/02.png" alt="testimonial" />
                      </div>
                      <div className="post-content">
                        <h5>Umme Hafsa</h5>
                        <p>CEO of Natural</p>
                      </div>
                      <div className="sponsor-thumb">
                        <img src="assets/images/testimonial/icon2.png" alt="testimonial" />
                      </div>
                    </div>
                    <div className="post-body">
                      <p>Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Thoun Covaen Theme Anyin Vauer</p>
                      <ul>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                        <li><i className="far fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* testimonial section end here */}
    </>
  );
}

export default Testimonial;
