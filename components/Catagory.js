import Link from "next/link";
import React from "react";

function Catagory() {
  return (
    <>
      {/* feature section start here */}
      <section
        id="feature"
        className="feature-section padding-tb"
      >
        <div className="container">
          <div
            className="section-header"
            data-aos="fade-up"
            data-aos-duration={700}
          >
            <h2>Category</h2>
          </div>
          <div className="section-wrapper">
          <div
              className="post-item"
              data-aos="fade-left"
              data-aos-duration={700}
            >
              <div className="post-inner custom-btn">
                <div className="post-content ">
                  <h4>
                    <Link href={`/category/agricultural-products`}>Agricultural Products</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="post-item"
              data-aos="fade-left"
              data-aos-duration={700}
            >
              <div className="post-inner custom-btn">
                <div className="post-content ">
                  <h4>
                    <Link href={`/category/engineering-products`}>Engineering Products</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="post-item"
              data-aos="fade-left"
              data-aos-duration={700}
            >
              <div className="post-inner custom-btn">
                <div className="post-content ">
                  <h4>
                    <Link href={`/category/food-products`}>Food Product</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="post-item"
              data-aos="fade-up"
              data-aos-duration={700}
            >
              <div className="post-inner custom-btn">
                <div className="post-content">
                  <h4>
                    <Link href="/category/fruits">Handicraft Product</Link>
                  </h4>
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

export default Catagory;
