import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      {/* footer section start here */}
      <footer className="footer-section">
        <div
          className="footer-top"
          style={{
            backgroundImage: "url(assets/images/footer/bg-image.jpg)",
            backgroundPosition: "center bottom",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="top">
              <div className="post-item">
                <div className="post-thumb">
                  <Image
                    src="/assets/images/footer/icon/01.png"
                    alt="footer"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="post-content">
                  <h6>Give us a Call</h6>
                  <p>98-985-985-98</p>
                </div>
              </div>
              <div className="post-item">
                <div className="post-thumb">
                  <Image
                    src="/assets/images/footer/icon/02.png"
                    alt="footer"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="post-content">
                  <h6>Send us a Message</h6>
                  <p>info@sunshieldexim.com </p>
                </div>
              </div>
              <div className="post-item">
                <div className="post-thumb">
                  <Image
                    src="/assets/images/footer/icon/03.png"
                    alt="footer"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="post-content">
                  <h6>Visit our Location</h6>
                  <p>
                    Plot No:-340, 2nd floor K Mansion, Block K-5, Gautam Nagar,
                    Opp. Near BMC Office, Bhubaneshwar-751014,Odisha
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom row justify-content-center">
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="bottom-item">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image
                        src="/assets/images/logo/logo.webp"
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
                  <Link
                    href="#"
                    className="custom-btn"
                  >
                    Read More <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="bottom-item">
                  <h4>Quick Links</h4>
                  <ul
                    className="footer-menu"
                    style={{ display: "block" }}
                  >
                    <li>
                      <Link href="#">Home</Link>
                    </li>
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li>
                      <Link href="#">Product</Link>
                    </li>
                    <li>
                      <Link href="#"> Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-12">
                <div className="bottom-item">
                  <h4>Reach Us</h4>
                  <ul
                    className="footer-menu"
                    style={{ display: "block" }}
                  >
                    <li>
                      <Link href="#">Privary</Link>
                    </li>
                    <li>
                      <Link href="#">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link href="#">Support</Link>
                    </li>
                    <li>
                      <Link href="#"> Blogs</Link>
                    </li>
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
                <span>
                  © 2023 <Link href="/">Sunshield</Link> Design by{" "}
                  <Link href="#">The Technovate.</Link>
                </span>
              </div>
              <ul className="right">
                <li>
                  <Link
                    className="facebook"
                    href="#"
                  >
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <span>Facebook</span>
                </li>
                <li>
                  <Link
                    className="twitter"
                    href="#"
                  >
                    <i className="fab fa-twitter" />
                  </Link>
                  <span>Twitter</span>
                </li>
                <li>
                  <Link
                    className="linkedin"
                    href="#"
                  >
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <span>Linkedin</span>
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
