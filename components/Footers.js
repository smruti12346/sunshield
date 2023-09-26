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
                        href="/"
                        class="custom-btn1"
                      >
                        Home
                      </Link>
                    </li>
                  <li>
                      <Link
                        href="/about"
                        class="custom-btn1"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        class="custom-btn1"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                    <Link
                      href="/contact"
                      class="custom-btn1"
                    >
                      Contact Us
                    </Link>
                  </li> 
                    <li>
                      <Link
                        href="/certifications"
                        class="custom-btn1"
                      >
                        Certifications
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-3 col-3 col-md-12">
                <div className="bottom-item flt">
                  <h5 className="test-center" >Range of Products</h5>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <ul
                        className="footer-menu"
                        style={{ display: "block" }}
                      >
                      <li>
                          <Link
                          href="/category/food-products"
                            class="custom-btn1"
                          >
                            Food Products
                          </Link>
                        </li>
                        <li>
                      <Link
                        href="/category/marine-products"
                        class="custom-btn1"
                      >
                        Marine Products{" "}
                      </Link>
                    </li>
                    <li>
                          <Link
                          href="/subcategory/handicrafts"
                            class="custom-btn1"
                          >
                            Handicrafts Products
                          </Link>
                        </li>
                        <li>
                        <Link
                        href="/category/stone-and-ceramics"
                          class="custom-btn1"
                        >
                        Stone And Ceramics 
                        </Link>
                      </li>
                      <li>
                      <Link
                      href="/category/engineering-products"
                        class="custom-btn1"
                      >
                        Engineering Products
                      </Link>
                    </li>
                    <li>
                    <Link
                    href="/category/packaging-products"
                      class="custom-btn1"
                    >
                    Packaging  Products
                    </Link>
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
                      <i class="fa fa-phone"></i> <span>9777132375</span>
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
                  © 2023 Sunshield Exim | All rights reserved.
                </span>
              </div>
              <ul className="col-xl-6 col-lg-6 col-12 foot-sign">
                <li>
                  <span className="ff" >
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
