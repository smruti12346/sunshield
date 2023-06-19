import React from 'react'

function AboutUs() {
  return (
    <>
 

      {/* Our project section start here */}
      <section className="project-section padding-tb" style={{backgroundImage: 'url(assets/images/project/bg-image.jpg)', backgroundSize: 'cover', overflow: 'hidden'}}>
        <div className="container">
          <div className="section-header" data-aos="fade-up" data-aos-duration={700}>
            <h2>About Us</h2>
            <p>Since 2003 Tectxon Manufacturing Services Have Manufactured Auto Metal Parts Anding Qssemble Creative Themes Autos Have Parts Services Have Manufacturedw </p>
          </div>
          <div className="section-wrapper">
            <div className="post-item">
              <div className="post-thumb" data-aos="fade-right" data-aos-duration={700}>
                <a href="#"><img src="assets/images/project/01.jpg" alt="project" /></a>
              </div>
              <div className="post-content" data-aos="fade-left" data-aos-duration={700}>
                <h4><a href="#">You Have the Power Today to Change That’s How we’d Like the World to be</a></h4>
                <p>Since 2003 Tectxon Manufacturing Services Have Manufactured 
                  Auto Metal Parts Anding Qssemble Creative Themes Autos Have 
                  Parts Services Have Manufactured</p>
                <p>Since 2003 Tectxon Manufacturing Services Have Manufactured 
                  Auto Metal Parts Anding Qssemble Creative Themes Autos Have 
                  Parts Services Have Manufactured</p>
                <a href="#" className="custom-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </>
  )
}

export default AboutUs
