import React from 'react'

function Catagory() {
  return (
    <>
      

      {/* feature section start here */}
      <section id="feature" className="feature-section padding-tb">
        <div className="container">
          <div className="section-header" data-aos="fade-up" data-aos-duration={700}>
            <h2>Category</h2>
          </div>
          <div className="section-wrapper">
            <div className="post-item" data-aos="fade-left" data-aos-duration={700}>
              <div className="post-inner custom-btn">
                <div className="post-content ">
                  <h4><a href="#">Water Refine</a></h4>
                </div>
              </div>
            </div>
            <div className="post-item" data-aos="fade-up" data-aos-duration={700}>
              <div className="post-inner custom-btn">
                <div className="post-content">
                  <h4><a href="#">Solar System</a></h4>
                </div>
              </div>
            </div>
            <div className="post-item" data-aos="fade-down" data-aos-duration={700}>
              <div className="post-inner custom-btn">
                <div className="post-content">
                  <h4><a href="#">Eco System</a></h4>
                </div>
              </div>
            </div>
            <div className="post-item" data-aos="fade-right" data-aos-duration={700}>
              <div className="post-inner custom-btn">
                <div className="post-content">
                  <h4><a href="#">Recycling</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature section ending here */}

    </>
  )
}

export default Catagory
