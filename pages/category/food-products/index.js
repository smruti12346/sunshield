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
<div className="col-md-9 sticky-widget ">
<div className="row">
<div className="col-md-12">
<h2 className='text-center mt-5 mb-4'>Food Products</h2>
<p>Our journey begins with a commitment to ethical beekeeping practices and sustainable sourcing. We partner with local beekeepers who share our passion for preserving the environment by growing organic products. </p>

</div>
</div>
<div className="col-md-12">
   
    



<div className="container">
<div className="row">
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Honey</h3>
<img src="/assets/images/campaign/honey.webp" alt="dal" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/honey">Explore Products</Link>
</div>
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Marine Items</h3>
<img src="/assets/images/campaign/marine.webp" alt="spices" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/marine-items">Explore Products</Link>
</div>

<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Oils</h3>
<img src="/assets/images/campaign/oil.webp" alt="dal" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/oil">Explore Products</Link>
</div>

</div>
<div className="row mt-3">
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Other Food Items</h3>
<img src="/assets/images/campaign/other.webp" alt="dal" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/other-food-items">Explore Products</Link>
</div>
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
