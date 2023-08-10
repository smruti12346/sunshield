import Feature from "@/components/Feature";
import Support from "@/components/Support";
import Testimonial from "@/components/Testimonial";
import Volunteer from "@/components/Volunteer";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <>
      
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
                <li class="active"> About Us /</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section
        className="project-section padding-tb"
        style={{
          backgroundImage: "url(assets/images/project/bg-image1.jpg)",
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
              Sunshield Exim, where satisfaction knows no limits.
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
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature />
      <Support />
      <Testimonial />
    </>
  );
};

export default About;
