import Image from "next/image";
import Link from "next/link";
const Blog = () => {
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
                <li class="active"> Blog /</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="blog-page padding-tb">
        <div class="container p-md-0">
          <div class="section-wrapper">
            <div class="col-lg-12 sticky-widget">
              <div class="blog">
                <div class="section-wrapper">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div class="post-item">
                        <div class="post-inner">
                          <div class="post-thumb">
                            <a href="#">
                              <Image
                                src="/assets/images/blog/03.jpg"
                                alt="blog"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div class="post-content d-flex flex-wrap">
                            <ul class="meta-post d-sm-block d-flex flex-wrap justify-content-between align-items-center">
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/share.png"
                                    width={500}
                                    height={500}
                                    alt="blog"
                                  />
                                </a>
                                <ul class="social-media-list">
                                  <li>
                                    <a
                                      href="#"
                                      class="facebook"
                                    >
                                      <i class="fab fa-facebook-f"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="twitter"
                                    >
                                      <i class="fab fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="linkedin"
                                    >
                                      <i class="fab fa-linkedin-in"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="google"
                                    >
                                      <i class="fab fa-google-plus-g"></i>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/comment.png"
                                    width={500}
                                    height={500}
                                    alt="icon"
                                  />
                                </a>
                                <p>15</p>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/love.png"
                                    width={500}
                                    height={500}
                                    alt="icon"
                                  />
                                </a>
                                <p>12</p>
                              </li>
                            </ul>
                            <div class="content-part">
                              <div class="entry-header">
                                <div class="entry-meta d-flex flex-wrap justify-content-start">
                                  <p class="byline">
                                    Admin : <a href="#"> Mazedul Islam </a>
                                  </p>
                                  <p class="posted-on">
                                    Posted on : <a href="#">14 April 2019</a>
                                  </p>
                                </div>
                                <h3>
                                  <a href="#">
                                    Actuaze Ectain World Strain Blog Tegc Wide
                                    World Strateic Teamplate
                                  </a>
                                </h3>
                              </div>
                              <div class="entry-content">
                                <p>
                                  Qntate Supple Chan Though Marke Poston Bestng
                                  Practces Chain Throuh Marke Postonn Bestn
                                  Prctces eractve Fashon Fashion Economically
                                  And Sound Qources For
                                </p>
                                <a
                                  href="#"
                                  class="custom-btn"
                                >
                                  Read More{" "}
                                  <i class="fas fa-angle-double-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div class="post-item">
                        <div class="post-inner">
                          <div class="post-thumb">
                            <a href="#">
                              <Image
                                src="/assets/images/blog/03.jpg"
                                alt="blog"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div class="post-content d-flex flex-wrap">
                            <ul class="meta-post d-sm-block d-flex flex-wrap justify-content-between align-items-center">
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/share.png"
                                    width={25}
                                    height={25}
                                    alt="blog"
                                  />
                                </a>
                                <ul class="social-media-list">
                                  <li>
                                    <a
                                      href="#"
                                      class="facebook"
                                    >
                                      <i class="fab fa-facebook-f"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="twitter"
                                    >
                                      <i class="fab fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="linkedin"
                                    >
                                      <i class="fab fa-linkedin-in"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="google"
                                    >
                                      <i class="fab fa-google-plus-g"></i>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/comment.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>15</p>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/love.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>12</p>
                              </li>
                            </ul>
                            <div class="content-part">
                              <div class="entry-header">
                                <div class="entry-meta d-flex flex-wrap justify-content-start">
                                  <p class="byline">
                                    Admin : <a href="#"> Mazedul Islam </a>
                                  </p>
                                  <p class="posted-on">
                                    Posted on : <a href="#">14 April 2019</a>
                                  </p>
                                </div>
                                <h3>
                                  <a href="#">
                                    Actuaze Ectain World Strain Blog Tegc Wide
                                    World Strateic Teamplate
                                  </a>
                                </h3>
                              </div>
                              <div class="entry-content">
                                <p>
                                  Qntate Supple Chan Though Marke Poston Bestng
                                  Practces Chain Throuh Marke Postonn Bestn
                                  Prctces eractve Fashon Fashion Economically
                                  And Sound Qources For
                                </p>
                                <a
                                  href="#"
                                  class="custom-btn"
                                >
                                  Read More{" "}
                                  <i class="fas fa-angle-double-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div class="post-item">
                        <div class="post-inner">
                          <div class="post-thumb">
                            <a href="#">
                              <Image
                                src="/assets/images/blog/03.jpg"
                                alt="blog"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div class="post-content d-flex flex-wrap">
                            <ul class="meta-post d-sm-block d-flex flex-wrap justify-content-between align-items-center">
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/share.png"
                                    width={25}
                                    height={25}
                                    alt="blog"
                                  />
                                </a>
                                <ul class="social-media-list">
                                  <li>
                                    <a
                                      href="#"
                                      class="facebook"
                                    >
                                      <i class="fab fa-facebook-f"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="twitter"
                                    >
                                      <i class="fab fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="linkedin"
                                    >
                                      <i class="fab fa-linkedin-in"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="google"
                                    >
                                      <i class="fab fa-google-plus-g"></i>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/comment.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>15</p>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/love.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>12</p>
                              </li>
                            </ul>
                            <div class="content-part">
                              <div class="entry-header">
                                <div class="entry-meta d-flex flex-wrap justify-content-start">
                                  <p class="byline">
                                    Admin : <a href="#"> Mazedul Islam </a>
                                  </p>
                                  <p class="posted-on">
                                    Posted on : <a href="#">14 April 2019</a>
                                  </p>
                                </div>
                                <h3>
                                  <a href="#">
                                    Actuaze Ectain World Strain Blog Tegc Wide
                                    World Strateic Teamplate
                                  </a>
                                </h3>
                              </div>
                              <div class="entry-content">
                                <p>
                                  Qntate Supple Chan Though Marke Poston Bestng
                                  Practces Chain Throuh Marke Postonn Bestn
                                  Prctces eractve Fashon Fashion Economically
                                  And Sound Qources For
                                </p>
                                <a
                                  href="#"
                                  class="custom-btn"
                                >
                                  Read More{" "}
                                  <i class="fas fa-angle-double-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div class="post-item">
                        <div class="post-inner">
                          <div class="post-thumb">
                            <a href="#">
                              <Image
                                src="/assets/images/blog/03.jpg"
                                alt="blog"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div class="post-content d-flex flex-wrap">
                            <ul class="meta-post d-sm-block d-flex flex-wrap justify-content-between align-items-center">
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/share.png"
                                    width={25}
                                    height={25}
                                    alt="blog"
                                  />
                                </a>
                                <ul class="social-media-list">
                                  <li>
                                    <a
                                      href="#"
                                      class="facebook"
                                    >
                                      <i class="fab fa-facebook-f"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="twitter"
                                    >
                                      <i class="fab fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="linkedin"
                                    >
                                      <i class="fab fa-linkedin-in"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="google"
                                    >
                                      <i class="fab fa-google-plus-g"></i>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/comment.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>15</p>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/love.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>12</p>
                              </li>
                            </ul>
                            <div class="content-part">
                              <div class="entry-header">
                                <div class="entry-meta d-flex flex-wrap justify-content-start">
                                  <p class="byline">
                                    Admin : <a href="#"> Mazedul Islam </a>
                                  </p>
                                  <p class="posted-on">
                                    Posted on : <a href="#">14 April 2019</a>
                                  </p>
                                </div>
                                <h3>
                                  <a href="#">
                                    Actuaze Ectain World Strain Blog Tegc Wide
                                    World Strateic Teamplate
                                  </a>
                                </h3>
                              </div>
                              <div class="entry-content">
                                <p>
                                  Qntate Supple Chan Though Marke Poston Bestng
                                  Practces Chain Throuh Marke Postonn Bestn
                                  Prctces eractve Fashon Fashion Economically
                                  And Sound Qources For
                                </p>
                                <a
                                  href="#"
                                  class="custom-btn"
                                >
                                  Read More{" "}
                                  <i class="fas fa-angle-double-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div class="post-item">
                        <div class="post-inner">
                          <div class="post-thumb">
                            <a href="#">
                              <Image
                                src="/assets/images/blog/03.jpg"
                                alt="blog"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div class="post-content d-flex flex-wrap">
                            <ul class="meta-post d-sm-block d-flex flex-wrap justify-content-between align-items-center">
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/share.png"
                                    width={25}
                                    height={25}
                                    alt="blog"
                                  />
                                </a>
                                <ul class="social-media-list">
                                  <li>
                                    <a
                                      href="#"
                                      class="facebook"
                                    >
                                      <i class="fab fa-facebook-f"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="twitter"
                                    >
                                      <i class="fab fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="linkedin"
                                    >
                                      <i class="fab fa-linkedin-in"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="google"
                                    >
                                      <i class="fab fa-google-plus-g"></i>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/comment.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>15</p>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/love.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>12</p>
                              </li>
                            </ul>
                            <div class="content-part">
                              <div class="entry-header">
                                <div class="entry-meta d-flex flex-wrap justify-content-start">
                                  <p class="byline">
                                    Admin : <a href="#"> Mazedul Islam </a>
                                  </p>
                                  <p class="posted-on">
                                    Posted on : <a href="#">14 April 2019</a>
                                  </p>
                                </div>
                                <h3>
                                  <a href="#">
                                    Actuaze Ectain World Strain Blog Tegc Wide
                                    World Strateic Teamplate
                                  </a>
                                </h3>
                              </div>
                              <div class="entry-content">
                                <p>
                                  Qntate Supple Chan Though Marke Poston Bestng
                                  Practces Chain Throuh Marke Postonn Bestn
                                  Prctces eractve Fashon Fashion Economically
                                  And Sound Qources For
                                </p>
                                <a
                                  href="#"
                                  class="custom-btn"
                                >
                                  Read More{" "}
                                  <i class="fas fa-angle-double-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div class="post-item">
                        <div class="post-inner">
                          <div class="post-thumb">
                            <a href="#">
                              <Image
                                src="/assets/images/blog/03.jpg"
                                alt="blog"
                                width={500}
                                height={500}
                              />
                            </a>
                          </div>
                          <div class="post-content d-flex flex-wrap">
                            <ul class="meta-post d-sm-block d-flex flex-wrap justify-content-between align-items-center">
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/share.png"
                                    width={25}
                                    height={25}
                                    alt="blog"
                                  />
                                </a>
                                <ul class="social-media-list">
                                  <li>
                                    <a
                                      href="#"
                                      class="facebook"
                                    >
                                      <i class="fab fa-facebook-f"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="twitter"
                                    >
                                      <i class="fab fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="linkedin"
                                    >
                                      <i class="fab fa-linkedin-in"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      class="google"
                                    >
                                      <i class="fab fa-google-plus-g"></i>
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/comment.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>15</p>
                              </li>
                              <li>
                                <a href="#">
                                  <Image
                                    src="/assets/images/blog/icon/love.png"
                                    width={25}
                                    height={25}
                                    alt="icon"
                                  />
                                </a>
                                <p>12</p>
                              </li>
                            </ul>
                            <div class="content-part">
                              <div class="entry-header">
                                <div class="entry-meta d-flex flex-wrap justify-content-start">
                                  <p class="byline">
                                    Admin : <a href="#"> Mazedul Islam </a>
                                  </p>
                                  <p class="posted-on">
                                    Posted on : <a href="#">14 April 2019</a>
                                  </p>
                                </div>
                                <h3>
                                  <a href="#">
                                    Actuaze Ectain World Strain Blog Tegc Wide
                                    World Strateic Teamplate
                                  </a>
                                </h3>
                              </div>
                              <div class="entry-content">
                                <p>
                                  Qntate Supple Chan Though Marke Poston Bestng
                                  Practces Chain Throuh Marke Postonn Bestn
                                  Prctces eractve Fashon Fashion Economically
                                  And Sound Qources For
                                </p>
                                <a
                                  href="#"
                                  class="custom-btn"
                                >
                                  Read More{" "}
                                  <i class="fas fa-angle-double-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Blog;
