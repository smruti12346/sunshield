import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = (props) => {
  return (
    <div>
      <section class="inner-header bg-green">
        <div class="container-fluid p-0">
          <Image
          alt="banner"
            src="/assets/images/banner/bgg011.jpg"
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
                <li class="active"> {props.name} /</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
