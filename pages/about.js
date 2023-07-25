import Feature from "@/components/Feature";
import Support from "@/components/Support";
import Testimonial from "@/components/Testimonial";
import Volunteer from "@/components/Volunteer";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <>
      {/* <section class="page-header">
        <div class="page-header-area">
          <div class="container">
            <div class="page-header-content">
              <div class="page-header-title">
                <h2>About</h2>
                <h2>
                  <span>Welcome to Sunshield</span>
                </h2>
              </div>
              <ul class="breadcamp">
                <li>
                  <a href="#">
                    <i class="fas fa-home"></i> Home
                  </a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>
                  <a class="active">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
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
      <section>
        <div className="container mt-5 mb-5">
          <div className="section-wrapper">
            <div className="post-item">
              <div
                className="post-content"
                data-aos="fade-left"
                data-aos-duration={700}
              >
                <h4 className="text-center mb-2">
                  <a
                    href="#"
                    className="text-center mb-2"
                  >
                    We Bring The Essence Of Distant Lands To Your Plate, Keeping
                    All The Freshness Intact!
                  </a>
                </h4>
                <p className="text-center px-5">
                  At Sunshield Exim, we understand the importance of sourcing
                  the highest quality ingredients for importers and food
                  businesses around the globe. We have built strong
                  relationships with local farmers and suppliers who share our
                  passion for exceptional taste and sustainable practices. Our
                  dedicated team ensures that every product meets the highest
                  parameters guaranteeing freshness, flavor, and authenticity.
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
