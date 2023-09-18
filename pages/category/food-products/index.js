import Sidebar from '@/components/Sidebar'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function index() {
  return (
    <React.Fragment>
      <section class="inner-header bg-green ab-img1">
        <div class="container-fluid p-0">
          <Image
            alt="profile-image"
            src="/assets/images/header/profile.jpg"
            class="img-fullwidth"
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
                    <i class="fa fa-home"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">Home</Link> /{" "}
                </li>
                <li class="active"> Category / </li>
                <li class="active">Food Products/</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 sticky-widget ">
            <div className="row">
              <div className="col-md-12">
                <h2 className='text-center mt-5 mb-4'>Food Products</h2>
                <p>We are your gateway to a delicious world of premium food products. We take great
                delight in sourcing and exporting various food items that satisfy the sophisticated
                palates of food lovers worldwide. Every product we export reflects our commitment to
                providing great quality and flavor.</p>

              </div>
            </div>
            <div className="col-md-12">



              <div className="container mb-5">
              <div className="row">
              <div className="col-md-12">
              <h3 className='text-center mt-5 mb-5'> Fresh Fruits</h3></div>
              </div>
                <div className="row">
                  <div className="col-md-5">
                    <img className="imgg" src="/assets/images/shope/1.webp" alt="fruits" width={400} height={200} />
                  </div>
                  <div className="col-md-7">
                    <p className='p-para'>Sourced from renowned growers worldwide, our premium fruits are carefully selected to deliver unmatched quality and flavor.  We can take flexible bulk quantity orders to meet your business requirements. The reliable and streamlined shipments ensure that the fruits arrive in optimal condition, ready to impress your buyers.</p>
                    <ul>

<li>

Premium quality fresh fruits sourced globally
</li>

<li>

Bulk quantity orders available for export

</li>

<li>

Efficient and reliable shipments

</li>

<li>

International export expertise

</li>

</ul>

                  </div>
                  <div className="col-md-6">
                  
                  </div>
                </div>

              </div>
              
              

              <div className="container-fluid">
                <div className="row">
                  
                  <div className="col-md-3 ">
                    <div className=" boxes">
                      <img className='imgf' src="/assets/images/shope/26.webp" alt="" />
                      <h4 className='text-center tit'>Mangoes</h4></div>


                  </div>
                  <div className="col-md-3 ">
                    <div className=" boxes"><img className='imgf' src="/assets/images/shope/25.webp" alt="" />
                      <h4 className='text-center tit'>Water Melon</h4></div>


                  </div>
                  <div className="col-md-3 ">
                    <div className=" boxes"><img className='imgf' src="/assets/images/shope/banana1-1.webp" alt="" />
                      <h4 className='text-center tit'>Banana</h4></div>


                  </div>
                  <div className="col-md-3 ">
                    <div className=" boxes"><img className='imgf' src="/assets/images/shope/27.webp" alt="" />
                      <h4 className='text-center tit'>Coconuts</h4>
                    </div>

                  </div>
                </div>
              </div>
              <div className="container mt-5 mb-5">
              <div className="row">
              <div className="col-md-12">
              <h3 className='text-center mt-5 mb-5'> Fresh Vegetables</h3></div>
              </div>
                <div className="row">
                
                  <div className="col-md-5">
                    <img className="imgg" src="/assets/images/shope/vegetable.jpg" alt="fruits" width={400} height={200} />
                  </div>
                  <div className="col-md-7">
                  <p className='p-para'>Discover the finest selection of premium fresh vegetables sourced from best producers. Our vegetables are hand-picked to ensure peak freshness and superior flavor. Whether you require bulk quantities for your restaurant or grocery store, our fast and convenient shipments will meet your business needs. Trust in the reliable logistics.</p>
                    <ul>

<li>

Premium quality fresh vegetables
</li>

<li>

Advanced freshness technologies for extended shelf life

</li>

<li>

Fast and convenient shipments

</li>

<li>

Bulk quantity orders available

</li>

</ul>

                  </div>
                </div>

              </div>
              <div className="container-fluid">
              <div className="row">
                
                <div className="col-md-3 ">
                  <div className=" boxes">
                    <img className='imgf' src="/assets/images/shope/49.webp" alt="" />
                    <h4 className='text-center tit'>Pumpkin</h4></div>


                </div>
                <div className="col-md-3 ">
                  <div className=" boxes"><img className='imgf' src="/assets/images/shope/50.webp" alt="" />
                    <h4 className='text-center tit'>Carrots</h4></div>


                </div>
                <div className="col-md-3 ">
                  <div className=" boxes"><img className='imgf' src="/assets/images/shope/corn.webp" alt="" />
                    <h4 className='text-center tit'>Corn</h4></div>


                </div>
                <div className="col-md-3 ">
                  <div className=" boxes"><img className='imgf' src="/assets/images/shope/52.webp" alt="" />
                    <h4 className='text-center tit'>Egg Plants</h4>
                  </div>

                </div>
              </div>
            </div>
            <div className="container mt-5 mb-5">
            <div className="row">
            <div className="col-md-12">
            <h3 className='text-center mt-5 mb-5'> Grocery</h3></div>
            </div>
              <div className="row">
              
                <div className="col-md-5">
                  <img className="imgg" src="/assets/images/shope/dal.jpg" alt="fruits" width={400} height={200} />
                </div>
                <div className="col-md-7">
                <p className='p-para'>We provide a hand-picked selection of premium grocery items thoroughly tested for freshness, flavor, and nutritional content. We are committed to giving our clients the best options out there. </p>
                    <ul>

<li>

Fresh Farm produce
</li>

<li>

Organic and natural options

</li>

<li>

Quality Control

</li>

<li>

Seamless ordering and delivery process

</li>

</ul>

                </div>
              </div>

            </div>
            <div className="container-fluid">
            <div className="row">
              
              <div className="col-md-3 ">
                <div className=" boxes">
                  <img className='imgf' src="/assets/images/shope/3.webp" alt="" />
                  <h4 className='text-center tit'>Variety Of Dal</h4></div>


              </div>
              <div className="col-md-3 ">
                <div className=" boxes"><img className='imgf' src="/assets/images/shope/12.webp" alt="" />
                  <h4 className='text-center tit'>Variety Of Pulses</h4></div>


              </div>
              <div className="col-md-3 ">
                <div className=" boxes"><img className='imgf' src="/assets/images/shope/19.webp" alt="" />
                  <h4 className='text-center tit'>Variety Of Flours</h4></div>


              </div>
              <div className="col-md-3 ">
                <div className=" boxes"><img className='imgf' src="/assets/images/shope/l.webp" alt="" />
                  <h4 className='text-center tit'>LemonGrass Oil</h4>
                </div>

              </div>
            </div>
          </div>
          <div className="container mt-5 mb-5">
          <div className="row">
          <div className="col-md-12">
          <h3 className='text-center mt-5 mb-5'> Spices</h3></div>
          </div>
            <div className="row">
            
              <div className="col-md-5">
                <img className="imgg" src="/assets/images/shope/sp.jpg" alt="fruits" width={400} height={200} />
              </div>
              <div className="col-md-7">
              <p className='p-para'>Order premium quality spices for unmatched flavor. With a rich culinary heritage,  India is a premier source of exquisite spices. We provide bulk quantities of these superior spices at the best prices. Experience authentic taste with the finest selection of spices.</p>
              <ul>

<li>

Advanced freshness technologies used
</li>

<li>

Bulk quantity orders

</li>

<li>

Fast and convenient shipments

</li>

<li>

International export expertise

</li>

</ul>

              </div>
            </div>

          </div>
          <div className="container-fluid">
          <div className="row">
            
            <div className="col-md-3 ">
              <div className=" boxes">
                <img className='imgf' src="/assets/images/shope/41.webp" alt="" />
                <h4 className='text-center tit'>Garam Masala</h4></div>


            </div>
            <div className="col-md-3 ">
              <div className=" boxes"><img className='imgf' src="/assets/images/shope/40.webp" alt="" />
                <h4 className='text-center tit'>Fenugreek</h4></div>


            </div>
            <div className="col-md-3 ">
              <div className=" boxes"><img className='imgf' src="/assets/images/shope/39.webp" alt="" />
                <h4 className='text-center tit'>Cardamom/Illayichi</h4></div>


            </div>
            <div className="col-md-3 ">
              <div className=" boxes"><img className='imgf' src="/assets/images/shope/38.webp" alt="" />
                <h4 className='text-center tit'>Cinnamon</h4>
              </div>

            </div>
          </div>
        </div>
            </div>

          </div>

        </div>
      </div>



    </React.Fragment>
  )
}

export default index
// <div className="col-lg-3 col-12 sticky-widget">
// <div className="sidebar-widget">
//   <Sidebar/>
// </div>
// </div>