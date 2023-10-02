import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function gallery() {
  return (
    <React.Fragment>
    <section class="inner-header bg-green">
    <div class="container-fluid p-0">
      <Image
        alt="profile image"
        src="/assets/images/header/profile.jpg"
        class="img-fullwidth ab-img"
        width={1200}
        height={300}
        style={{ width: "100%", height: "auto" }}
      />
    </div>

    <div class="section-content">
      <div class="row1">
        <div class="col-sm-121">
          <ol class="breadcrumb white mt-10 text-center">
            <li>
              <Link href="/">
                <i class="fa fa-home"></i>&nbsp;
              </Link>
            </li>
            <li>
              <Link href="/"> &nbsp;Home</Link> /{" "}
            </li>
            <li class="active"> &nbsp;Gallery/</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
    <div className="container section-header1">
        <h2 className="heading1">Gallery  </h2>
        <div className="gallery row">
          <div className="gallery-item col-md-4">
            <img className="gallery-image" src="/assets/images/banner/sunshieldexim Gallery-01.jpg" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
          </div>
          <div className="gallery-item col-md-4">
            <img className="gallery-image" src="/assets/images/banner/sunshieldexim Gallery-02.jpg" alt="sunset behind San Francisco city skyline" />
          </div>
          <div className="gallery-item col-md-4">
            <img className="gallery-image" src="/assets/images/banner/sunshieldexim Gallery-03.jpg" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
          </div>
          <div className="gallery-item col-md-4">
            <img className="gallery-image" src="/assets/images/banner/sunshieldexim Gallery-04.jpg" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
          </div>
          <div className="gallery-item col-md-4">
            <img className="gallery-image" src="/assets/images/banner/sunshieldexim Gallery-05.jpg" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
          </div>
          <div className="gallery-item col-md-4">
            <img className="gallery-image" src="/assets/images/banner/sunshieldexim Gallery-06.jpg" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default gallery