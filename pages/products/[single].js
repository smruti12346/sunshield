import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { api_url } from "@/Auth";
import { url } from "@/Auth";
import FormDialog from "@/components/FormDialog";
import { useState } from "react";
import Link from "next/link";
export const getServerSideProps = async (slug) => {
  const res = await fetch(`${api_url}/pages?slug=${slug.query.single}`);
  const data = await res.json();
  return {
    props: { data },
  };
};

const Single = ({ data }) => {
  const [incr, setIncr] = useState(0);
  const handleQuote = (event) => {
    event.preventDefault();
    setIncr(incr + 1);
  };
  return (
    <>
      <FormDialog
        name={data[0].title.rendered}
        inc={incr}
      />
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
                <li class="active"> Products / </li>
                <li class="active"> {data[0].title.rendered}/</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="shop-single padding-tb">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-12 sticky-widget">
              <div class="product-details">
                <div class="row align-items-center">
                  <div class="col-md-6 col-12">
                    <div class="product-thumb">
                      <div class="slider-for">
                        <div class="thumb">
                          <Image
                            id="myimage"
                            width={500}
                            height={500}
                            src={`${url}/${data[0].acf["product_image"]}`}
                            alt="shopZoom"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="post-content">
                      <h4>{data[0].title.rendered}</h4>
                      <h5>Description</h5>
                      <p>
                        Energistia an deliver atactica metrcs after avsionary
                        Apropria trnsition enterpris an sources applications
                        emerging psd template communities.
                      </p>
                      <form>
                        <button
                          type="submit"
                          onClick={(event) => handleQuote(event)}
                        >
                          Get a Quote
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="review">
                <ul class="review-nav">
                  <li
                    class="desc"
                    data-target="description-show"
                  >
                    Description
                  </li>
                  {/* <li
                    class="rev active"
                    data-target="review-content-show"
                  >
                    Reviews 4
                  </li> */}
                </ul>
                <div class="description-content description-content-show">
                  <div class="description">
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 sticky-widget">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Single;
