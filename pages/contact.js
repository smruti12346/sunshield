import React from "react";
import Link from "next/link";
import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <section class="inner-header bg-green">
        <div class="container-fluid p-0">
          <Image
            src="/assets/images/header/profile.jpg"
            class="img-fullwidth"
            width={1200}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div class="section-content">
          <div class="row">
            <div class="col-sm-12">
              <ol class="breadcrumb white mt-10 text-center">
                <li>
                  <Link href="/">
                    <i class="fa fa-home"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">Home</Link> /{" "}
                </li>
                <li class="active"> Contact Us /</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-us padding-tb">
        <div class="container">
          <div class="row no-gutters section-wrapper">
            <div class="col-lg-4">
              <div class="row no-gutters">
                <div class="col-sm-12">
                  <div class="main-addres">
                    <div class="contact-title">
                      <h4 style={{ color: "#fff" }}>Main Office Address</h4>
                    </div>
                    <div class="contact-body">
                      <ul>
                        <li>
                          <h6>Location :</h6>
                          <p>
                            Plot No:-340, 2nd floor K Mansion, Block K-5, Gautam
                            Nagar, Opp. Near BMC Office,
                            Bhubaneshwar-751014,Odisha
                          </p>
                        </li>
                        <li>
                          <h6>Phone Number :</h6>
                          <p>+98-985-985-98</p>
                        </li>
                        <li>
                          <h6>Email Address :</h6>
                          <a href="#">info@sunshieldexim.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="contact-area">
                <div class="contact-title">
                  <h4>Send Us a Message</h4>
                </div>
                <div
                  id="respond"
                  class="comment-respond"
                >
                  <div class="add-comment">
                    <form
                      action="#"
                      method="post"
                      id="commentform"
                      class="comment-form"
                    >
                      <input
                        name="name"
                        type="text"
                        value=""
                        placeholder="Name"
                      />
                      <input
                        name="email"
                        type="text"
                        value=""
                        placeholder="Email"
                      />
                      <input
                        name="url"
                        type="text"
                        value=""
                        placeholder="Subject"
                      />
                      <textarea
                        id="comment-reply"
                        name="comment"
                        rows="9"
                        placeholder="Type Here Your Comment"
                      ></textarea>
                      <p class="comment-form-cookies-consent">
                        <input
                          id="wp-comment-cookies-consent"
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          value="yes"
                        />
                        <label for="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time.
                        </label>
                      </p>
                      <button type="submit">
                        <div class="custom-btn">
                          <span>Submet Message</span>
                          <i class="fas fa-angle-double-right"></i>
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
