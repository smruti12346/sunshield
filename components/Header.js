// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";


// const Header = () => {
//   const [menu, setMenu] = useState(false);
//   const handleMenu = () => {
//     setMenu(!menu);
//   };
//   const handleClose = () => {
//     setMenu(false);
//   };
//   const toggleMenu = () => {
//     setMenu(!menu);
//   };
//   return (
//     <React.Fragment>
//       <div className="mobile-menu">
//         <nav className="mobile-header primary-menu d-xl-none">
//           <div className="header-logo">
//             <Link
//               href="/"
//               onClick={handleClose}
//             >
//               <Image
//                 src="/assets/images/logo/sunlogo.png"
//                 alt="logo"
//                 width={60}
//                 height={60}
//               />
//             </Link>
//           </div>
//           <div
//             className={`header-bar ${menu ? "close" : ""}`}
//             onClick={handleMenu}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </nav>
//         <nav className={`menu ${menu ? "open" : ""}`}>
//           <div className="mobile-menu-area d-xl-none">
//             <div
//               className="mobile-menu-area-inner"
//               id="scrollbar"
//             >
//               <div className="mobile-search">
//                 {/* <input
//                   type="text"
//                   placeholder="Search Here........."
//                 />
//                 <button type="submit">
//                   <i className="fas fa-search"></i>
//                 </button> */}
//               </div>
//               <ul className="m-menu">
//                 <li>
//                   <Link
//                     onClick={handleClose}
//                     href="/"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={handleClose}
//                     href="/about"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                   onClick={toggleMenu}
//                     href="/products"
//                   >
//                     Products
//                     <i className="fa fa-chevron-down ml-2"></i>
//                   </Link>

//                   <ul className="menu">
//                     <li>
//                       <Link
//                         onClick={handleClose}
//                         href="/subcategory/fruits"
//                       >
//                         Fruits
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         onClick={handleClose}
//                         href="/subcategory/fresh-vegetables"
//                       >
//                         Fresh Vegetables
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         onClick={handleClose}
//                         href="/category/solar"
//                       >
//                         Solar
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         onClick={handleClose}
//                         href="/category/sea-foods"
//                       >
//                         Sea Foods
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={handleClose}
//                     href="/certifications"
//                   >
//                     Certifications
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={handleClose}
//                     href="/blog"
//                   >
//                     Blog{" "}
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={handleClose}
//                     href="/contact"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//               <ul className="social-link-list d-flex flex-wrap">
//                 <li>
//                   <a
//                     href="#"
//                     className="facebook"
//                   >
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="twitter-sm"
//                   >
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="linkedin"
//                   >
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="google"
//                   >
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//       <div>
//         <div className="box-header">
//           <header className="header-section style-2 d-xl-block d-none animated slideInUp">
//             <div className="header-top">
//               <div className="top">
//                 <ul className="left">
//                   <li>
//                     <i className="fas fa-map-marker-alt"></i>
//                     Bhubaneswar, Odisha, India
//                   </li>
//                   <li>
//                     <i className="fas fa-envelope"></i>
//                     info@sunshieldexim.com
//                   </li>
//                 </ul>
//                 <ul className="right">
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-twitter"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <i className="fab fa-instagram"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="header-area">
//               <div className="logo">
//                 <Link href="/">
//                   <Image
//                     src="/assets/images/logo/sunlogo.png"
//                     alt="logo"
//                     width={120}
//                     height={120}
//                   />
//                 </Link>
//               </div>
//               <div className="main-menu d-none d-xl-block">
//                 <ul className="menu">
//                   <li>
//                     <Link href="/">Home</Link>
//                   </li>
//                   <li>
//                     <Link href="/about">About</Link>
//                   </li>
//                   <li>
// <Link href="/products">
//   Products <i className="fa fa-chevron-down"></i>
// </Link>
// <ul>
// <li>
//     <Link href="/category/agricultural-products">
//       Agricultural Products
//       <i
//         className="fa fa-chevron-right"
//         style={{ float: "right", marginTop: "5px" }}
//       ></i>
//     </Link>
//     <ul>
//     <li>
//         <Link href="/subcategory/dal">Dal</Link>
//       </li>
//       <li>
//         <Link href="/subcategory/spices">Spices</Link>
//       </li>
//       <li>
//       <Link href="/subcategory/fruits">Fresh Fruits</Link>
//     </li>
          
//       <li>
//         <Link href="/subcategory/fresh-vegetables">
//           Fresh Vegetables
//         </Link>
//       </li>               
//     </ul>
//   </li>
// <li>
//     <Link href="/category/engineering-products">
//       Engineering Products
//       <i
//         className="fa fa-chevron-right"
//         style={{ float: "right", marginTop: "5px" }}
//       ></i>
//     </Link>
//     <ul>
//     <li>
//         <Link href="/subcategory/electric-lights"> Electric Lights</Link>
//       </li>
     
//     <li>
//     <Link href="/subcategory/hybrid-solar-powerplant">
//     Solar Power plants
//       <i
//         className="fa fa-chevron-right"
//         style={{ float: "right", marginTop: "5px" }}
//       ></i>
//     </Link>
    
//   </li>
//   <li>
//   <Link href="/subcategory/street-lights">Solar Street Lights</Link>
// </li>
//   <li>
//   <Link href="/subcategory/solar-water-heater">
//   Solar Water Heaters
//   </Link>
// </li> 
//   <li>
//     <Link href="/subcategory/solar-water-pumps"> Solar Water Pumps </Link>
//   </li>
    
     
      
     
          
                   
//     </ul>
//   </li>
  
//   <li>
//     <Link href="/category/food-products">
//       Food Products
//       <i
//         className="fa fa-chevron-right"
//         style={{ float: "right", marginTop: "5px" }}
//       ></i>
//     </Link>
//     <ul>
//     <li>
//       <Link href="/subcategory/honey">
//         Honey
//       </Link> 
//       </li>  
//       <li>
//       <Link href="/subcategory/marine-items">
//         Marine Items
//       </Link>
//     </li>
    
//       <li>
//         <Link href="/subcategory/oil">Oil</Link>
//       </li>
                   
     
//       <li>
//         <Link href="/subcategory/other-food-items">
//            Other Food Items  
//         </Link> 
//         </li>                        
//     </ul>
//   </li>
//   <li>
//   <Link href="/subcategory/handicrafts">Handicraft Products</Link>
// </li>
// </ul>
// </li>

//                   <li>
//                     <Link
//                       onClick={handleClose}
//                       href="/certifications"
//                     >
//                       Certifications
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/blog">Blog </Link>
//                   </li>
//                 </ul>
//               </div>
//               {/* <ul className="right-side d-none d-xl-flex">
//                 <li>
//                   <a className="search-start">
//                     <i className="fas fa-search"></i>
//                   </a>
//                 </li>
//                 <li className="cart">
//                   <a href="#">
//                     <i className="fas fa-shopping-cart"></i>
//                     <span>2</span>
//                   </a>
//                   <div className="cart-content">
//                     <div className="cart-item">
//                       <div className="cart-img">
                    
//                       </div>
//                       <div className="cart-des">
//                         <a href="#">Product Title Hore</a>
//                         <p>$20.00</p>
//                       </div>
//                       <div className="cart-btn">
//                         <a href="#">
//                           <i className="fa fa-times"></i>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="cart-item">
//                       <div className="cart-img">
//                       </div>
//                       <div className="cart-des">
//                         <a href="#">Product Title Hore</a>
//                         <p>$20.00</p>
//                       </div>
//                       <div className="cart-btn">
//                         <a href="#">
//                           <i className="fa fa-times"></i>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="cart-bottom">
//                       <div className="cart-subtotal">
//                         <p>
//                           Total: <b className="float-right">$40.00</b>
//                         </p>
//                       </div>
//                       <div className="cart-action">
//                         <button
//                           type="submit"
//                           className="button"
//                         >
//                           View cart
//                         </button>
//                         <button
//                           type="submit"
//                           className="button"
//                         >
//                           Checkout
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ul> */}
//               <Link
//                 href="/contact"
//                 className="custom-btn nav-btn"
                
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </header>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Header;
// // 258

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleClose = () => {
    setMenu(false);
  };
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <React.Fragment>
      <div className="mobile-menu">
        <nav className="mobile-header primary-menu d-xl-none">
          <div className="header-logo">
            <Link
              href="/"
              onClick={handleClose}
            >
              <Image
                src="/assets/images/logo/sunlogo.png"
                alt="logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <div
            className={`header-bar ${menu ? "close" : ""}`}
            onClick={handleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <nav className={`menu ${menu ? "open" : ""}`}>
          <div className="mobile-menu-area d-xl-none">
            <div
              className="mobile-menu-area-inner"
              id="scrollbar"
            >
              <div className="mobile-search">
                {/* <input
                  type="text"
                  placeholder="Search Here........."
                />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button> */}
              </div>
              <ul className="m-menu">
                <li>
                  <Link
                    onClick={handleClose}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleClose}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                  onClick={toggleMenu}
                    href="/products"
                  >
                    Products
                    <i className="fa fa-chevron-down ml-2"></i>
                  </Link>

                  <ul className="menu">
                    <li>
                      <Link
                        onClick={handleClose}
                        href="/subcategory/fruits"
                      >
                        Fruits
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClose}
                        href="/subcategory/fresh-vegetables"
                      >
                        Fresh Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClose}
                        href="/category/solar"
                      >
                        Solar
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClose}
                        href="/category/sea-foods"
                      >
                        Sea Foods
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    onClick={handleClose}
                    href="/certifications"
                  >
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleClose}
                    href="/blog"
                  >
                    Blog{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleClose}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="social-link-list d-flex flex-wrap">
                <li>
                  <a
                    href="#"
                    className="facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="twitter-sm"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="google"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="box-header">
          <header className="header-section style-2 d-xl-block d-none animated slideInUp">
            <div className="header-top">
              <div className="top">
                <ul className="left">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Bhubaneswar, Odisha, India
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    info@sunshieldexim.com
                  </li>
                </ul>
                <ul className="right">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-area">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/assets/images/logo/sunlogo.png"
                    alt="logo"
                    width={120}
                    height={120}
                  />
                </Link>
              </div>
              <div className="main-menu d-none d-xl-block" style={{marginRight:"161px"}}>
                <ul className="menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/products">
                     Products <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul>
                    {/* <li>
                      <Link href="/category/agricultural-products">
                         Agricultural Products<i className="fa fa-chevron-right"
                        style={{ float: "right", marginTop: "5px" }}></i>
                      </Link>
                      
                    </li> */}
                    <li>
                      <Link href="/category/engineering-products">
                        Engineering Products
                        <i
                        className="fa fa-chevron-right"
                        style={{ float: "right", marginTop: "5px" }}
                         ></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href="/subcategory/electric-lights"> Electric Lights</Link>
                        </li>
                        <li>
                          <Link href="/subcategory/hybrid-solar-powerplant">Solar Power plants</Link>
                        </li>
                        <li>
                          <Link href="/subcategory/street-lights">Solar Street Lights</Link>
                        </li>
                        <li>
                          <Link href="/subcategory/solar-water-heater">
                            Solar Water Heaters
                          </Link>
                        </li> 
                        <li>
                          <Link href="/subcategory/solar-water-pumps"> Solar Water Pumps </Link>
                        </li>          
                      </ul>
                    </li>
                    <li>
                      <Link href="/category/food-products">
                        Food Products
                        <i
                        className="fa fa-chevron-right"
                        style={{ float: "right", marginTop: "5px" }}
                        ></i>
                      </Link>
                      <ul>
                        <li>
                          <Link href="/subcategory/fruits">Fresh Fruits</Link>
                        </li>
                        <li>
                          <Link href="/subcategory/fresh-vegetables">
                            Fresh Vegetables
                          </Link>
                        </li>  
                        <li>
                          <Link href="/subcategory/honey">
                            Honey
                          </Link> 
                        </li> 
                        <li>
                          <Link href="/subcategory/dal">
                          <i
                        className="fa fa-chevron-right"
                        style={{ float: "right", marginTop: "5px" }}
                        ></i>
                        Grocery</Link>
                            <ul>
                              <li>
                                <Link href="">
                                Variety of Dal
                                </Link> 
                              </li> 
                              <li>
                                <Link href="">
                                  Variety of Pulses
                                </Link> 
                              </li> 
                        
                              <li>
                                <Link href="">Variety of Flours</Link>
                              </li>
                              <li>
                                <Link href="">Basmati Rice</Link>
                              </li>
                              <li>
                                <Link href="">Non-Basmati Rice</Link>
                              </li>
          
                              <li>
                                <Link href="">
                                  Other items
                                </Link>
                              </li>               
                                           
                            </ul>
                          </li>
                        <li>
                          <Link href="/subcategory/spices">Spices</Link>
                        </li>
                         
                        {/* <li>
                          <Link href="/subcategory/marine-items">
                            Marine Items
                          </Link>
                        </li> */}
                        <li>
                          <Link href="/subcategory/oil">Edible Oil</Link>
                        </li>
                        <li>
                          <Link href="/subcategory/other-food-items">
                            Other Food Items  
                          </Link> 
                        </li> 
                        
                       
          
                                    
                                           
                      </ul>
                    </li>
                    <li>
                          <Link href="/subcategory/marine-items">
                            Marine Products
                          </Link>
                        </li>

                        <li>
                          <Link href="">
                          Stone and ceramics
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                          Packaging products
                          </Link>
                        </li>
                    <li>
                   
                      <Link href="/subcategory/handicrafts">Handicraft Products</Link>
                    </li>
                  </ul>
                  </li>

                  <li>
                    <Link
                      onClick={handleClose}
                      href="/certifications"
                    >
                      Certifications
                    </Link>
                  </li>
                  <li>
                    <Link href=" ">Gallery </Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog </Link>
                  </li>
                </ul>
              </div>
              {/* <ul className="right-side d-none d-xl-flex">
                <li>
                  <a className="search-start">
                    <i className="fas fa-search"></i>
                  </a>
                </li>
                <li className="cart">
                  <a href="#">
                    <i className="fas fa-shopping-cart"></i>
                    <span>2</span>
                  </a>
                  <div className="cart-content">
                    <div className="cart-item">
                      <div className="cart-img">
                    
                      </div>
                      <div className="cart-des">
                        <a href="#">Product Title Hore</a>
                        <p>$20.00</p>
                      </div>
                      <div className="cart-btn">
                        <a href="#">
                          <i className="fa fa-times"></i>
                        </a>
                      </div>
                    </div>
                    <div className="cart-item">
                      <div className="cart-img">
                      </div>
                      <div className="cart-des">
                        <a href="#">Product Title Hore</a>
                        <p>$20.00</p>
                      </div>
                      <div className="cart-btn">
                        <a href="#">
                          <i className="fa fa-times"></i>
                        </a>
                      </div>
                    </div>
                    <div className="cart-bottom">
                      <div className="cart-subtotal">
                        <p>
                          Total: <b className="float-right">$40.00</b>
                        </p>
                      </div>
                      <div className="cart-action">
                        <button
                          type="submit"
                          className="button"
                        >
                          View cart
                        </button>
                        <button
                          type="submit"
                          className="button"
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
              <Link
                href="/contact"
                className="custom-btn nav-btn"
                
              >
                Contact Us
              </Link>
            </div>
          </header>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
