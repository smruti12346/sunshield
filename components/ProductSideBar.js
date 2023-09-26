import React, { useEffect, useState } from "react";
import axios from "axios";
import { api_url } from "@/Auth";
import Link from "next/link";
const ProductSideBar = () => {
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

export default ProductSideBar;
