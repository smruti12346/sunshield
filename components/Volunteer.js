import Image from "next/image";
import React from "react";

const Volunteer = () => {
  return (
    <div>
      <section
        class="volunteer padding-tb"
        style={{
          backgroundImage: "url(assets/css/images/volunteer-bg.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div
            class="section-header"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h2>Meet Our Volunteer</h2>
            <h2>
              <span>2000+ Volunteer People working with us since 1987!!</span>
            </h2>
          </div>
          <div
            class="section-wrapper"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div class="volunteer-slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="post-item">
                    <div class="post-inner">
                      <div class="post-thumb">
                        <a href="#">
                          <Image
                            src="/assets/images/volunteer/01.jpg"
                            alt="volunteer"
                            width={400}
                            height={400}
                          />
                        </a>
                      </div>
                      <div class="post-content">
                        <div class="post-header">
                          <h4>
                            <a href="#">Lubna Khanna</a>
                          </h4>
                          <p>Founder & CEO</p>
                        </div>
                        <div class="post-body">
                          <p>
                            Drama Arche Premiu Nicheng Marke Them Profes Maxime
                            Front Ending
                          </p>
                          <ul class="icon-style-list">
                            <li>
                              <i class="fas fa-phone-square"></i>+880 1234 567
                              890
                            </li>
                            <li>
                              <i class="fas fa-envelope"></i>
                              williamkhanna@gmail.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="post-item">
                    <div class="post-inner">
                      <div class="post-thumb">
                        <a href="#">
                          <Image
                            src="/assets/images/volunteer/02.jpg"
                            alt="volunteer"
                            width={400}
                            height={400}
                          />
                        </a>
                      </div>
                      <div class="post-content">
                        <div class="post-header">
                          <h4>
                            <a href="#">William Khanna</a>
                          </h4>
                          <p>Founder & CEO</p>
                        </div>
                        <div class="post-body">
                          <p>
                            Drama Arche Premiu Nicheng Marke Them Profes Maxime
                            Front Ending
                          </p>
                          <ul class="icon-style-list">
                            <li>
                              <i class="fas fa-phone-square"></i>+880 1234 567
                              890
                            </li>
                            <li>
                              <i class="fas fa-envelope"></i>
                              williamkhanna@gmail.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="post-item">
                    <div class="post-inner">
                      <div class="post-thumb">
                        <a href="#">
                          <Image
                            src="/assets/images/volunteer/03.jpg"
                            alt="volunteer"
                            width={400}
                            height={400}
                          />
                        </a>
                      </div>
                      <div class="post-content">
                        <div class="post-header">
                          <h4>
                            <a href="#">Tom Lathin</a>
                          </h4>
                          <p>Founder & CEO</p>
                        </div>
                        <div class="post-body">
                          <p>
                            Drama Arche Premiu Nicheng Marke Them Profes Maxime
                            Front Ending
                          </p>
                          <ul class="icon-style-list">
                            <li>
                              <i class="fas fa-phone-square"></i>+880 1234 567
                              890
                            </li>
                            <li>
                              <i class="fas fa-envelope"></i>
                              williamkhanna@gmail.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="volunteer-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
