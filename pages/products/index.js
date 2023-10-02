
import React from "react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { api_url, url } from "@/Auth";
import Link from "next/link";
import dynamic from 'next/dynamic';
const FormDialog = dynamic(() => import('@/components/FormDialog'));
const ProductSideBar = dynamic(() => import('@/components/ProductSideBar'));
export const getServerSideProps = async () => {
  const res = await fetch(`${api_url}/pages?_embed&categories=5&per_page=10`,{next: {revalidate: 10}});
  const data = await res.json();
  return { props: { product_data: data } };
};
const Product = ({ product_data }) => {
  const [category, setCategory] = useState();
  const [product, setProduct] = useState();
  const [incr, setIncr] = useState(0);
  const [title, setTitle] = useState("");
  const handleQuote = (event, title) => {
    event.preventDefault();
    setIncr(incr + 1);
    setTitle(title);
  };
  // useEffect(() => {
  //   axios.get(`${api_url}/categories?parent=5`).then((res) => {
  //     setCategory(res.data);
  //     console.log(res.data);
  //   });
  // }, []);
  // useEffect(() => {
  //   console.log(product_data);
  // }, [product_data]);
  return (
    <React.Fragment>
      <FormDialog
        name={title}
        inc={incr}
      />
      <section class="inner-header bg-green ">
        <div class="container-fluid p-0">
          <Image
          alt="profile"
            src="/assets/images/header/profile.jpg"
            class="img-fullwidth "
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
                    <i class="fa fa-home"></i>&nbsp;
                  </Link>
                </li>
                <li>
                  <Link href="/">&nbsp;Home</Link> /&nbsp;{" "}
                </li>
                <li class="active"> &nbsp;Products /</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-page padding-tb">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12 sticky-widget">
              <div className="shop-title d-flex flex-wrap justify-content-between">
                <p>Showing 01 - 12 of 139 Results</p>
                <div className="product-view-mode">
                  <a
                    className="active"
                    data-target="grid"
                  >
                    <i className="fas fa-th"></i>
                  </a>
                  <a data-target="list">
                    <i className="fas fa-list"></i>
                  </a>
                </div>
              </div>
              <div className="shop-product-wrap grid row">
                {product_data?.map((item, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    key={index}
                  >
                    <div className="product-item">
                      <div className="product-thumb">
                        <Image
                          width={500}
                          height={500}
                          src={`${url}/${item.acf["product_image"]}`}
                          alt="shope"
                        />
                        <div className="product-action-link">
                          <button
                            type="submit"
                            onClick={(event) =>
                              handleQuote(event, item.title.rendered)
                            }
                          >
                            Get a Quote
                          </button>
                        </div>
                      </div>
                      <div className="product-content">
                        <h5
                          onClick={(event) =>
                            handleQuote(event, item.title.rendered)
                          }
                        >
                          {item.title.rendered}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-3 col-12 sticky-widget">
              <div className="sidebar-widget">
                <ProductSideBar/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Product;
