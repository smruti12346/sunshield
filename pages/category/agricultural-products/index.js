import Sidebar from '@/components/Sidebar'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductSideBar from '@/components/ProductSideBar'

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
                <li class="active">Agricultural Products/</li>
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
<h2 className='text-center mt-5 mb-4'>Agricultural Products</h2>
<p className='text-justify '>Agricultural production is not only fundamental to improving nutrition, but is also the main source of income for many. Increases in crop production are key to ending hunger, as well as economic and social development.Global crop production has changed dramatically in recent decades. 

 </p>
 <p className='text-justify'>The amount of food we grow has increased rapidly as a result of two drivers: the amount of land we use for agriculture has expanded, but the largest driver has been a rapid rise in crop yields.</p>
</div>
<div className="col-md-12">
   
    



<div className="container">
<div className="row">
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Dal</h3>
<img src="/assets/images/campaign/dal.webp" alt="dal" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/dal">Explore Products</Link>
</div>
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Spices</h3>
<img src="/assets/images/campaign/ssr.webp" alt="spices" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/spices">Explore Products</Link>
</div>

<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Fresh Fruits</h3>
<img src="/assets/images/campaign/28.webp" alt="dal" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/fruits">Explore Products</Link>
</div>

</div>
<div className="row mt-3">
<div className="col-md-4">
<h3 className='text-center' style={{fontSize:'20px'}}>Fresh Vegetables</h3>
<img src="/assets/images/campaign/44.webp" alt="dal" />
<Link className='custom-btn nav-btn p-btn' href="/subcategory/fresh-vegetables">Explore Products</Link>
</div>
</div>
</div>




</div>





</div>
</div>
<div className="col-lg-3 col-12 sticky-widget">
<div className="sidebar-widget">
 <ProductSideBar/>
</div>
</div>
</div>
</div>
 
  
    
    </React.Fragment>
  )
}

export default index
// <div class="container">
// <div class="row">
// <div class="col-md-6">
// <ul>
//  	<li>Superior Quality</li>
//  	<li>Uncompromising Standards</li>
//  	<li>Bulk Ordering</li>
//  	<li>Timely Deliveries</li>
// </ul>
// </div>
// <div class="col-md-6">
// <ul>
//  	<li>Swift Logistics</li>
//  	<li>Freshness Guarantee</li>
//  	<li>Premium Taste</li>
//  	<li>Guaranteed Satisfaction</li>
// </ul>
// </div>
// </div>
// </div>