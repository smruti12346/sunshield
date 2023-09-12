import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { api_url, url } from "@/Auth";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import FormDialog from "@/components/FormDialog";
import React from "react";
import { paginationClasses } from "@mui/material";
const cat = [
  { name: "agricultural-products", id: 30 },
  { name: "engineering-products", id: 9 },
  { name: "food-products", id: 36 },
  { name: "handicrafts", id: 11 },
 
  
  
  
  

 
];
export const getServerSideProps = async (slug) => {
  const [catObj] = cat.filter((item) => item.name == slug.query.page);
  const res = await fetch(
    `${api_url}/pages?_embed&categories=${catObj.id}&per_page=100`
  );
  const data = await res.json();

  const res1 = await fetch(`${api_url}/categories/${catObj.id}`);
  const data1 = await res1.json();
  return { props: { product_data: data, desc: data1 } };
};
const Page = ({ product_data, desc }) => {
  const [category, setCategory] = useState();
  const [incr, setIncr] = useState(0);
  const [title, setTitle] = useState("");
  const handleQuote = (event, title) => {
    event.preventDefault();
    setIncr(incr + 1);
    setTitle(title);
  };
  useEffect(() => {
    axios.get(`${api_url}/categories?parent=5`).then((res) => {
      setCategory(res.data);
      console.log(desc);
    });
  }, []);
  useEffect(() => {
    console.log(product_data);
  }, [product_data]);
  return (
    <React.Fragment>
      <FormDialog
        name={title}
        inc={incr}
      />
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
                <li class="active"> {desc.name}/</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-page py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12 sticky-widget">
              <h2 className="mb-3 text-center">{desc.name}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: desc.acf.desc }}
                className="pb-4"
              ></div>
              <div>
              <h3></h3>

              </div>
             
             
            </div>

            <div className="col-lg-3 col-12 sticky-widget">
              <div className="sidebar-widget">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Page;
// pagination
// <div
// className={`shop-product-wrap grid ${
//   product_data.length > 0 ? "row" : ""
// }`}
// >
// {product_data.length === 0 ? (
//   <h2
//     className="text-center py-5"
//     style={{ textAlign: "center" }}
//   >
//     Product Not Found
//   </h2>
// ) : (
//   product_data?.map((item, index) => (
//     <div
//       className="col-lg-4 col-md-6 col-12"
//       key={index}
//     >
//       <div className="product-item">
//         <div className="product-thumb">
//           <Image
//             width={500}
//             height={500}
//             src={`${url}/${item.acf["product_image"]}`}
//             alt="shope"
//           />
//           <div className="product-action-link">
//             <button
//               onClick={(event) =>
//                 handleQuote(event, item.title.rendered)
//               }
//             >
//               Get a Quote
//             </button>
//           </div>
//         </div>
//         <div className="product-content">
//           <h5>
//             <Link href={`/products/${item.slug}`}>
//               {item.title.rendered}
//             </Link>
//           </h5>
//         </div>
//       </div>
//     </div>
//   ))
// )}
// </div>
//  {/*<div className="pagination-area d-flex flex-wrap justify-content-center">
//                 <ul className="pagination d-flex flex-wrap m-0">
//                   <li className="prev">
//                     <a href="#">
//                       <i className="fas fa-angle-double-left"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">1</a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="active d-none d-md-block"
//                     >
//                       2
//                     </a>
//                   </li>
//                   <li>
//                     <a
              //         href="#"
              //         className="d-none d-md-block"
              //       >
              //         3
              //       </a>
              //     </li>
              //     <li>
              //       <a
              //         href="#"
              //         className="dot"
              //       >
              //         ....
              //       </a>
              //     </li>
              //     <li>
              //       <a
              //         href="#"
              //         className="d-none d-md-block"
              //       >
              //         4
              //       </a>
              //     </li>
              //     <li className="next">
              //       <a href="#">
              //         <i className="fas fa-angle-double-right"></i>
              //       </a>
              //     </li>
              //   </ul>
              // </div> */}
