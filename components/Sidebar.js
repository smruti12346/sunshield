import { useEffect, useState } from "react";
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
    <>
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
              {category?.map((item, index) => (
                <li key={index}>
                  <Link href={`/category/${item.slug}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
