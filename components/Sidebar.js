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
              {/* {category?.map((item, index) => (
                <li key={index}>
                  <Link href={`/category/${item.slug}`}>{item.name}</Link>
                </li>
              ))} */}
              <li><Link href="/category/agricultural-products">
              Agricultural Products
              
            </Link></li>
              <li>
              
        <Link href="/subcategory/dal">Grocery</Link>
      </li>
      <li>
        <Link href="/subcategory/spices">Spices</Link>
      </li>
      <li>
      <Link href="/subcategory/fruits">Fresh Fruits</Link>
    </li>
          
      <li>
        <Link href="/subcategory/fresh-vegetables">
          Fresh Vegetables
        </Link>
      </li>    
      <li><Link href="/category/engineering-products">
      Engineering Products
              
            </Link></li>
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
      <li><Link href="/category/food-products">
      Food Products
              
            </Link></li>
            <li>
      <Link href="/subcategory/honey">
        Honey
      </Link> 
      </li>  
      <li>
      <Link href="/subcategory/marine-items">
        Marine Items
      </Link>
    </li>
    
      <li>
        <Link href="/subcategory/oil">Oil</Link>
      </li>
                   
     
      <li>
        <Link href="/subcategory/other-food-items">
           Other Food Items  
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
