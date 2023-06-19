import React from 'react'

function Footer() {
  return (
    <>

      <div>
        {/* footer section start here */}
        <footer className="footer-section">
          <div className="footer-top" style={{backgroundImage: 'url(assets/images/footer/bg-image.jpg)', backgroundPosition: 'center bottom', overflow: 'hidden'}}>
            <div className="container">
              <div className="top">
                <div className="post-item" data-aos="fade-right" data-aos-duration={700}>
                  <div className="post-thumb">
                    <img src="assets/images/footer/icon/01.png" alt="footer" />
                  </div>
                  <div className="post-content">
                    <h6>Give us a Call</h6>
                    <p>962-478-123-4567</p>
                  </div>
                </div>
                <div className="post-item" data-aos="fade-up" data-aos-duration={700}>
                  <div className="post-thumb">
                    <img src="assets/images/footer/icon/02.png" alt="footer" />
                  </div>
                  <div className="post-content">
                    <h6>Send us a Message</h6>
                    <p>envishare@gmail.com</p>
                  </div>
                </div>
                <div className="post-item" data-aos="fade-left" data-aos-duration={700}>
                  <div className="post-thumb">
                    <img src="assets/images/footer/icon/03.png" alt="footer" />
                  </div>
                  <div className="post-content">
                    <h6>Visit our Location</h6>
                    <p>07 Suitland Street 120 USA</p>
                  </div>
                </div>
              </div>
              <div className="bottom row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-12" data-aos="fade-right" data-aos-duration={700}>
                  <div className="bottom-item">
                    <div className="footer-logo">
                      <a href="index.html"><img src="assets/images/logo/01.png" alt="footer-logo" /></a>
                    </div>
                    <p>Monotnec deplos copertve chanvae anding crorate Qhanin Unique Qnderwhe Premum Converenc With 
                      Uheing Mutmeda Nquel Undehele Mandinge theme Qhanin Unique Qnderwhe Premum Converenc With Environment &amp; Ecology Theme. </p>
                    <a href="#" className="custom-btn">Read More <i className="fas fa-angle-double-right" /></a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-12" data-aos="fade-up" data-aos-duration={700}>
                  <div className="bottom-item">
                    <h4>Quick Links</h4>
                    <ul className="footer-menu">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Shop</a></li>
                      <li><a href="#"> Infrastructure</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-12" data-aos="fade-left" data-aos-duration={700}>
                  <div className="bottom-item">
                    <h4>Reach Us</h4>
                    <ul className="footer-menu">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Shop</a></li>
                      <li><a href="#"> Infrastructure</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="section-wrapper">
                <div className="left">
                  <span>© 2019 <a href="index.html">EnviShare</a> Design by <a href="#">Labartisan.</a></span>
                </div>
                <ul className="right">
                  <li>
                    <a className="facebook" href="#"><i className="fab fa-facebook-f" /></a>
                    <span>Facebook</span>
                  </li>
                  <li>
                    <a className="google" href="#"><i className="fab fa-google-plus-g" /></a>
                    <span>Google Plus</span>
                  </li>
                  <li>
                    <a className="twitter" href="#"><i className="fab fa-twitter" /></a>
                    <span>Twitter</span>
                  </li>
                  <li>
                    <a className="pinterest" href="#"><i className="fab fa-pinterest-p" /></a>
                    <span>Pinterest</span>
                  </li>
                  <li>
                    <a className="linkedin" href="#"><i className="fab fa-linkedin-in" /></a>
                    <span>Linkedin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* footer section end here */}
        {/* scroll to top */}
        <a href="#" className="scrollToTop"><i className="fas fa-angle-up" /></a>
        {/* scroll to top */}
      </div>

    </>
  )
}

export default Footer
