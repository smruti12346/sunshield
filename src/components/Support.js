import React from 'react'

function Support() {
  return (
    <>
   

      {/* support section start here */}
      <section className="support-section style-2 padding-tb" style={{backgroundImage: 'url(assets/images/support/bg-image-2.jpg)', backgroundSize: 'cover'}}>
        <div className="container">
          <div className="section-header style-2" data-aos="fade-up" data-aos-duration={700}>
            <h2>We use the Support of More Than</h2>
            <h2><span>1 Million Activists to Clean the air and Safe Rivers</span></h2>
          </div>
          <div className="section-wrapper">
            <div className="post-item" data-aos="fade-left" data-aos-duration={700}>
              <div className="post-inner">
                <h3><span className="counter">78</span>%</h3>
                <h4>of Population</h4>
                <p>of your project gift directly funds vital conservation action</p>
              </div>
            </div>
            <div className="post-item" data-aos="fade-up" data-aos-duration={700}>
              <div className="post-inner">
                <h3><span className="counter">96</span>%</h3>
                <h4>of the lakes in America</h4>
                <p>of your project gift directly funds vital conservation action</p>
              </div>
            </div>
            <div className="post-item" data-aos="fade-right" data-aos-duration={700}>
              <div className="post-inner">
                <h3><span className="counter">967</span></h3>
                <h4>of Pesticides</h4>
                <p>of your project gift directly funds vital conservation action</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* support section ending */}

    </>
  )
}

export default Support
