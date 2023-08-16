import Image from "next/image";
import React from "react";
import Link from "next/link";
function AboutUs() {
  return (
    <React.Fragment>
      {/* Our project section start here */}
      <section
        className="project-section padding-tb"
        style={{
          // backgroundImage: "url(assets/images/project/bg-image1.jpg)",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            className="section-header"
            data-aos="fade-up"
            data-aos-duration={700}
          >
            <h2>About Us</h2>
            <p>
              We are your trusted partner in the realm of fine cuisine and its
              derivatives!
              <br /> Indulge in the exquisite flavors of perfection with
              Sunshield Exim, where satisfaction knows no limits..
            </p>
          </div>
          <div className="section-wrapper">
            <div className="post-item">
              <div
                className="post-thumb"
                data-aos="fade-right"
                data-aos-duration={700}
              >
                <a href="#">
                  <Image
                    src="/assets/images/project/022.webp"
                    alt="project"
                    width={500}
                    height={500}
                  />
                </a>
              </div>
              <div
                className="post-content"
                data-aos="fade-left"
                data-aos-duration={700}
              >
                <h4>
                  <Link href="/about">
                    We Bring The Essence Of Distant Lands Keeping All The
                    Freshness Intact!
                  </Link>
                </h4>
                <p>
                  At Sunshield Exim, we recognize the significance of procuring
                  top-notch ingredients for importers and food enterprises
                  worldwide. We have fostered robust alliances with local
                  farmers and suppliers who share our commitment to outstanding
                  taste and sustainable methodologies.</p>
                  <p>Our team diligently ensures that each product adheres to the utmost standards,
                  assuring freshness, flavor, and authenticity.
                </p>
                <Link
                  href="/about"
                  className="custom-btn"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AboutUs;
