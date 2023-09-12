import React from "react";

function Support() {
  return (
    <>
      {/* support section start here */}
      <section
        className="support-section style-2 padding-tb"
        style={{
          backgroundImage: "url(assets/images/support/pattern.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div
            className="section-header style-2"
            data-aos="fade-up"
            data-aos-duration={700}
          >
            <h1 className="text-black mb-3">
              Here Comes The Much Needed Global Solution!
            </h1>
            <h4 className="text-black">
              <span>
                We serve as a bridge, connecting providers with consumers,
                enabling direct access to high-quality products and enhancing
                supply chains. Through our best approach, we facilitate seamless
                connections, bridging the gap and fostering efficient trade
                worldwide.
              </span>
            </h4>
          </div>
          <div className="section-wrapper">
            <div
              className="post-item"
              data-aos="fade-left"
              data-aos-duration={700}
            >
              <div className="post-inner">
                <h4>
                  <span className="counter">Streamlined Distribution</span>
                </h4>
                <p>
                  Direct export channels connect exporters to consumers,
                  eliminating intermediaries for a seamless experience.
                </p>
              </div>
            </div>
            <div
              className="post-item"
              data-aos="fade-up"
              data-aos-duration={700}
            >
              <div className="post-inner">
                <h4>
                  <span className="counter">Transparent Communication</span>
                </h4>
                <p>
                  Consumers can directly get in touch with us to gain insights
                  into product origins for informed purchasing decisions.
                </p>
              </div>
            </div>
            <div
              className="post-item"
              data-aos="fade-right"
              data-aos-duration={700}
            >
              <div className="post-inner">
                <h4>
                  <span className="counter">Quality Assurance</span>
                </h4>
                <p>
                  Exported products undergo rigorous checks, ensuring
                  international standard quality from source to doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* support section ending */}
    </>
  );
}

export default Support;
