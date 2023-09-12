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
                <li class="active">Engineering Products/</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
<div className="container">
<div className="row">
<div className="col-md-9 sticky-widget ">
<div className="row">
<div className="col-md-12">
<h2 className='text-center mt-5 mb-4'>Engineering Products</h2>
With a focus on high-quality engineering solutions, we offer high-quality solar products. The timely and reliable shipments supported by pricing- guarantee a smooth import process. Count on our dedicated customer support to provide guidance and assistance throughout.
</div>
<div className="row mt-5">
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Electric Lights</h3>
<img src="/assets/images/campaign/Electrical Lights.png" alt="" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/electric-lights">Explore Products</Link>
</div>
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Solar Power plants</h3>
<img src="/assets/images/campaign/Hybrid Solar Powerplant.png" alt="" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/hybrid-solar-powerplant">Explore Products</Link>
</div>

<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Solar Street Lights</h3>
<img src="/assets/images/campaign/Solar Lights.png" alt="" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/street-lights">Explore Products</Link>
</div>

</div>
<div className="row mt-4">
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Solar Water Heaters</h3>
<img src="/assets/images/campaign/Solar Water Heater.png" alt="dal" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/solar-water-heater">Explore Products</Link>
</div>
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Solar Water Pumps</h3>
<img src="/assets/images/campaign/Solar Water Pumps.png" alt="spices" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/solar-water-pumps">Explore Products</Link>
</div>



</div>

</div>
</div>
<div className="col-lg-3 col-12 sticky-widget">
<div className="sidebar-widget">
  <Sidebar/>
</div>
</div>
</div>
</div>
 
  
    
    </React.Fragment>
  )
}

export default index
