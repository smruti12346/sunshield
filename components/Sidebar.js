import React, { useEffect, useState } from "react";
import axios from "axios";
import { api_url } from "@/Auth";
import Link from "next/link";
const Sidebar = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    axios.get(`${api_url}/categories?parent=5`).then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="sidebar-widget">
        {/* <div className="widget-search">
          <h4>Search Product</h4>
          <form action="action">
            <input
              type="text"
              placeholder="Search Here..."
              name="s"
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div> */}
        <div className="shop-widget">
          <div className="widget-title">
            <h4>Product Category</h4>
          </div>
          <div className="widget-wrapper">
            <ul className="shop-menu">
            <li>
            <Link href="/category/food-products">Food Products</Link>
        </li>
        <li>
        <Link href="/subcategory/fresh-fruits">Fresh Fruits</Link>
      </li>
      <li>
      <Link href="/subcategory/fresh-vegetables">
                            Fresh Vegetables
                          </Link>
                        </li>
                        <li>
      <Link href="/subcategory/grocery">
                           Grocery
                          </Link>
                        </li>
                        <li>
                        <Link href="/subcategory/variety-of-dal">
                          Variety Of Dal
                        </Link> 
                        </li> 
                        <li>
                        <Link href="/subcategory/variety-of-pulses">
                          Variety Of Pulses
                        </Link> 
                      </li> 
                      <li>
                      <Link href="/subcategory/variety-of-flours">Variety Of Flours</Link>
                    </li>
                    <li>
                      <Link href="/subcategory/basmati-rice">Basmati Rice</Link>
                    </li>
                    <li>
                      <Link href="/subcategory/non-basmati-rice">Non-Basmati Rice</Link>
                    </li>

                    <li>
                      <Link href="/subcategory/other-items">
                        Other Items
                      </Link>
                    </li>    
                    <li>
                    <Link href="/subcategory/spices">Spices</Link>
                  </li>
                  <li>
                  <Link href="/subcategory/edible-oil"> Edible Oil</Link>
                </li>
                    
                      <li>
                        <Link href="/subcategory/other-food-items">
                          Other Food Items  
                        </Link> 
                      </li> 
                      <li>
                      <Link href="/subcategory/marine-products">
                        Marine Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/subcategory/handicrafts">
                      Handicraft Products
                      </Link>
                    </li>
                    <li>
                    <Link href="/subcategory/wooden-handicrafts-products">
                      Wooden Handicrafts Products
                      
                    </Link> 
                    </li> 
                    <li>
                      <Link href="/subcategory/decotative-products">
                      Decorative Products
                      </Link> 
                    </li> 
              
                    <li>
                      <Link href="/subcategory/silver-filigree-products">Silver Filigree Products</Link>
                    </li>
                    <li>
                      <Link href="/subcategory/bamboo-crafts">Bamboo Crafts</Link>
                    </li>
                    <li>
                      <Link href="/subcategory/terracota-items">Terracota Items</Link>
                    </li>
                    <li>
                      <Link href="/subcategory/chandua-and-pattachitra">Chandua And Pattachitra</Link>
                    </li>
                    <li>
                      <Link href="/subcategory/bronze-products">Bronze Products</Link>
                    </li>

                    <li>
                      <Link href="/subcategory/Odisha Handloom Sarees">
                      Odisha Handloom Sarees
                      </Link>
                    </li>            
                    <li>
                      <Link href="/subcategory/stone-and-ceramics">
                        Stone And Ceramics
                      </Link>
                    </li>
                    <li>
                    <Link href="/category/engineering-products">
                    Engineering Products
                    </Link>
                  </li>
                  <li>
                          <Link href="/subcategory/solar-systems"> Solar Systems</Link>
                        </li>
                            
                        <li>
                        <Link href="/subcategory/packaging-products">
                        Packaging Products
                        </Link>
                      </li>
              


            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
