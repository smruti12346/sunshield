import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div>
      <section class="feature-section padding-tb">
        <div class="container">
          <div
            class="section-header"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h2>Why Choose Us</h2>
            {/* <h2>
              <span>People working with us since 1987!!</span>
            </h2> */}
          </div>
          <div class="section-wrapper">
            <div
              class="post-item"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <div class="post-inner feature-item">
                <div class="post-thumb">
                  <Image
                    src="/assets/images/feature/png/01.png"
                    width={400}
                    height={400}
                    alt="feature"
                  />
                </div>
                <div class="post-content">
                  <h4>Premium Quality</h4>
                  <p>
                    Get premium-quality products that meet international
                    standards. Our rigorous quality control procedures ensure
                    that each product is carefully inspected and meets the
                    highest industry benchmarks.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="post-item"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div class="post-inner feature-item">
                <div class="post-thumb">
                  <Image
                    src="/assets/images/feature/png/02.png"
                    width={400}
                    height={400}
                    alt="feature"
                  />
                </div>
                <div class="post-content">
                  <h4>Wide Range of Products</h4>
                  <p>
                    Choose from a diverse range of products, including aromatic
                    spices, fresh and juicy fruits, farm-fresh vegetables,
                    environmentally friendly solar products, and delectable sea
                    foods.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="post-item"
              data-aos="fade-down"
              data-aos-duration="700"
            >
              <div class="post-inner feature-item">
                <div class="post-thumb">
                  <Image
                    src="/assets/images/feature/png/03.png"
                    width={400}
                    height={400}
                    alt="feature"
                  />
                </div>
                <div class="post-content">
                  <h4>Sustainability Focus</h4>
                  <p>
                    We believe in sustainable and responsible practices. Our
                    commitment to it is reflected in the sourcing methods and
                    packaging choices. By choosing us, you are supporting a
                    company that values the planet.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="post-item"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div class="post-inner feature-item">
                <div class="post-thumb">
                  <Image
                    src="/assets/images/feature/png/04.png"
                    width={400}
                    height={400}
                    alt="feature"
                  />
                </div>
                <div class="post-content">
                  <h4>Recycling</h4>
                  <p>
                    Cabors Levera Othns Andn That Quas Bwdh Thos Covae Theme Any
                    Value Cordnte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
