import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { api_url, url } from "@/Auth";
import Link from "next/link";
export const getServerSideProps = async () => {
  const res = await fetch(`${api_url}/pages?_embed&categories=5&per_page=100`);
  const data = await res.json();
  return { props: { product_data: data } };
};
const Product = ({ product_data }) => {
  const [category, setCategory] = useState();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios.get(`${api_url}/categories?parent=5`).then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);
  useEffect(() => {
    console.log(product_data);
  }, [product_data]);
  return (
    <>
      <section class="inner-header bg-green">
        <div class="container-fluid p-0">
          <Image
            src="/assets/images/header/profile.jpg"
            class="img-fullwidth"
            width={1200}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div class="section-content">
          <div class="row">
            <div class="col-sm-12">
              <ol class="breadcrumb white mt-10 text-center">
                <li>
                  <Link href="/">
                    <i class="fa fa-home"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/">Home</Link> /{" "}
                </li>
                <li class="active"> Products /</li>
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
                          <Link href={`/products/${item.slug}`}>Read More</Link>
                        </div>
                      </div>
                      <div className="product-content">
                        <h5>
                          <Link href={`/products/${item.slug}`}>
                            {item.title.rendered}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-3 col-12 sticky-widget">
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
                          <Link href={`/category/${item.slug}`}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product;
