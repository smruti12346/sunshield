import React from "react";
import Image from "next/image";
function WhychooseUs() {
  return (
    <>
      {/* feature section start here */}
      <section
        className="feature-section style-two padding-tb"
        style={{
          backgroundImage: "url(assets/images/feature/bg-image.jpg)",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            className="section-header"
            data-aos="fade-up"
            data-aos-duration={700}
          >
            <h2>
              <span>Why</span> Choose<span> Us</span>
            </h2>
          </div>
          <div className="section-wrapper row">
            <div className="col-lg-6 col-12">
              <div
                className="post-thumb"
                data-aos="fade-right"
                data-aos-duration={700}
              >
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/feature/png/05.jpg"
                  alt="feature"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div
                className="post-item"
                data-aos="fade-left"
                data-aos-duration={700}
              >
                <div className="post-inner">
                  <div className="post-thumb">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/feature/png/01.png"
                      alt="feature"
                    />
                  </div>
                  <div className="post-content">
                    <h4>Premium Quality</h4>
                    <p>
                      Discover our premium-quality products that meet and exceed
                      international standards.We adhere to rigorous quality
                      control procedures ensuring our products surpass the
                      highest industry benchmarks.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="post-item"
                data-aos="fade-left"
                data-aos-duration={700}
              >
                <div className="post-inner">
                  <div className="post-thumb">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/feature/png/02.png"
                      alt="feature"
                    />
                  </div>
                  <div className="post-content">
                    <h4>Vast Product Portfolio</h4>
                    <p>
                      Explore an extensive array of products covering fragrant
                      spices, succulent fruits, farm-fresh vegetables and
                      seafood delicacies. Get exceptional quality and taste that
                      transcends geographical boundaries.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="post-item"
                data-aos="fade-left"
                data-aos-duration={700}
              >
                <div className="post-inner">
                  <div className="post-thumb">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/feature/png/03.png"
                      alt="feature"
                    />
                  </div>
                  <div className="post-content">
                    <h4>Efficient Cargo Logistics</h4>
                    <p>
                      We strategically set competitive rates to meet diverse
                      international customer needs. Our expertise in cargo
                      logistics ensures efficient transportation and timely
                      delivery. Achieve global market success with effective
                      pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature section ending here */}
    </>
  );
}

export default WhychooseUs;
