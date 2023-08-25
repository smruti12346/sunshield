import Image from "next/image";
import Link from "next/link";
export default function Footers() {
  return (
    <div>
      {/* footer section start here */}
      <footer className="footer-section">
        <div
          className="footer-top"
          style={{
            backgroundImage: "url(/assets/images/footer/bg-image.jpg)",
            backgroundPosition: "center bottom",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="bottom row justify-content-center">
              <div className="col-xl-5 col-lg-5 col-12 text-center ">
                <div className="bottom-item">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image
                        src="/assets/images/logo/sunlogo.png"
                        alt="footer-logo"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <p>
                    Discover the authentic flavors of India with Sunshield Exim.
                    We export exceptional products and top-notch customer
                    service. Let us be your trusted partner in bringing the
                    finest ingredients to your doorstep, ensuring satisfaction
                    every time you import with us!
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-6">
                <div className="bottom-item flt">
                  <h5 className="test-center">Quick Links</h5>
                  <ul
                    className="footer-menu"
                    style={{ display: "block" }}
                  >
                     <li>
                      <Link
                        href="/category/dal"
                        class="custom-btn1"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/spices"
                        class="custom-btn1"
                      >
                       About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/oil"
                        class="custom-btn1"
                      >
                     Certificate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/category/fruits"
                        class="custom-btn1"
                      >
                        Blog
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-3 col-3">
                <div className="bottom-item flt">
                  <h5 className="test-center">Products Categories</h5>
                  <div className="row">
                  <div className="col-xl-6 col-lg-6 col-6 ">
                  <ul
                  className="footer-menu"
                  style={{ display: "block" }}
                >

                <li>
                <Link
                  href="/category/dal"
                  class="custom-btn1"
                >
                  Dal{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/category/spices"
                  class="custom-btn1"
                >
               spices
                </Link>
              </li>
              <li>
                <Link
                  href="/category/oil"
                  class="custom-btn1"
                >
               oil
                </Link>
              </li>
              <li>
                <Link
                  href="/category/fruits"
                  class="custom-btn1"
                >
                fruits
                </Link>
              </li>
              <li>
                <Link
                  href="/category/fresh-vegetables"
                  class="custom-btn1"
                >
               Vegetables
                </Link>
              </li>
                  </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-6 ">
                  <ul
                  className="footer-menu"
                  style={{ display: "block" }}
                >

                <li>
                <Link
                class="custom-btn1"
                  href="/category/solar"
                >
                  Solar
                </Link>
              </li>
              <li>
  <Link 
  class="custom-btn1"
  href="/category/street-lights"> 
  Street Lights</Link>
</li>
<li>
<Link 
class="custom-btn1"
href="/category/solar-water-heater">
Solar Water Heater
</Link>
</li> 
<li>
  <Link 
  class="custom-btn1"
  href="/category/solar-water-pumps"> 
  Solar Water Pumps </Link>
</li>

<li>
<Link
class="custom-btn1" 
href="/category/hybrid-solar-powerplant">
Hybrid Solar Powerplant</Link>
</li>
                  </ul>
                  </div>
                  </div>
            
                </div>
              </div>
              
            </div>
            <div className="row footer-bottom">
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="bottom-item">
                  <h5>Address</h5>
                  <p>
                    Plot No:-340, 2nd floor K Mansion, Block K-5, Gautam Nagar,
                    Opp. Near BMC Office, Bhubaneshwar-751014,Odisha
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="bottom-item">
                  <h5>Connect with Us</h5>
                  <ul>
                    <li>
                      <i class="fa fa-envelope"></i>{" "}
                      <span>info@sunshieldexim.com</span>
                    </li>
                    <li>
                      <i class="fa fa-phone"></i> <span>98-985-985-98</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="bottom-item">
                  <h5>Reach Us</h5>
                  <ul class="right">
                    <li>
                      <Link
                        class="facebook"
                        href="#"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="twitter"
                        href="#"
                      >
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="linkedin"
                        href="#"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom1 ">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12">
                <span>
                  © 2023 <Link href="/">Sunshield Exim</Link> | All rights reserved.
                </span>
              </div>
              <ul className="col-xl-6 col-lg-6 col-12 foot-sign">
                <li>
                  <span>
                    Designed & Developed By <Link href="https://thetechnovate.com/" target="_blank">Technovate</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* footer section end here */}
      {/* scroll to top */}
      <Link
        href="#"
        className="scrollToTop"
      >
        <i className="fas fa-angle-up" />
      </Link>
      {/* scroll to top */}
    </div>
  );
}
