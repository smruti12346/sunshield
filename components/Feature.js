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
                    src="/assets/images/feature/png/pr.png"
                    width={400}
                    height={400}
                    alt="feature"
                  />
                </div>
                <div class="post-content">
                  <h4>Premium Quality</h4>
                  <p>
                  Discover our premium-quality products that meet and exceed international standards.We adhere to rigorous quality control procedures ensuring our products surpass the highest industry benchmarks.
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
                    src="/assets/images/feature/png/Vast Product Portfolio-01.png"
                    width={400}
                    height={400}
                    alt="feature"
                  />
                </div>
                <div class="post-content">
                  <h4>Vast Product Portfolio</h4>
                  <p>
                  Explore an extensive array of products covering fragrant spices, succulent fruits, farm-fresh vegetables and seafood delicacies. Get exceptional quality and taste that transcends geographical boundaries.
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
                    src="/assets/images/feature/png/Efficient Cargo Logistics-01.png"
                    width={400}
                    height={400}
                    alt="feature"
                  />
                </div>
                <div class="post-content">
                  <h4>Efficient Cargo Logistics</h4>
                  <p>
                  We strategically set competitive rates to meet diverse international customer needs. Our expertise in cargo logistics ensures efficient transportation and timely delivery. Achieve global market success with effective pricing.
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
                    src="/assets/images/feature/png/Sustainability Focus-01.png"
                    width={400}
                    height={400}
                    alt="feature"
                  />
                </div>
                <div class="post-content">
                  <h4>Sustainability Focus</h4>
                  <p>
                  We prioritize sustainability, evident in our sourcing and packaging choices. By selecting us, you align with a company that values the well-being of the planet. Let&apos;s create a positive global impact.
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
