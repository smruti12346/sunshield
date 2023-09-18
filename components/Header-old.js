import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <React.Fragment>
      <div className="box-header">
        <header className="header-section style-2 d-xl-block d-none">
          <div className="header-top">
            <div className="top">
              <ul className="left">
                {/* <li>
                  <i className="far fa-clock" />
                  Sun-Fri: 9am-6pm Saturday Closed
                </li> */}
                <li>
                  <i className="fas fa-map-marker-alt" />
                  Bhubaneswar, Odisha, India
                </li>
                <li>
                  <i className="fas fa-headset" />
                  info@sunshieldexim.com
                </li>
              </ul>
              <ul className="right">
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      <div className="box-header">
        <header className="header-section style-2 d-xl-block">
          <div className="header-area">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo/logo.webp"
                  alt="logo"
                  width={120}
                  height={120}
                />
              </Link>
            </div>
            <div className="main-menu d-xl-block">
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
                    <li>
                      <Link href="/category/spices">Spices</Link>
                    </li>
                    <li>
                      <Link href="/category/fruits">Fruits</Link>
                    </li>
                    <li>
                      <Link href="/category/fresh-vegetables">
                        Fresh Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link href="/category/solar">Solar</Link>
                    </li>
                    <li>
                      <Link href="/category/sea-foods">Sea Foods</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Blog </Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <ul className="right-side d-none d-xl-flex">
              <li>
                {/* <a className="search-start">
                  <i className="fas fa-search" />
                </Link> */}
              </li>
              {/* <li className="cart">
                <Link href="#">
                  <i className="fas fa-shopping-cart" />
                  <span>2</span>
                </Link>
                <div className="cart-content">
                  <div className="cart-item">
                    <div className="cart-img">
                      <Link href="#">
                        <img
                          src="/assets/images/header/shope/01.jpg"
                          alt="cart"
                        />
                      </Link>
                    </div>
                    <div className="cart-des">
                      <Link href="#">Product Title Hore</Link>
                      <p>$20.00</p>
                    </div>
                    <div className="cart-btn">
                      <Link href="#">
                        <i className="fa fa-times" />
                      </Link>
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="cart-img">
                      <Link href="#">
                        <img
                          src="/assets/images/header/shope/02.jpg"
                          alt="cart"
                        />
                      </Link>
                    </div>
                    <div className="cart-des">
                      <Link href="#">Product Title Hore</Link>
                      <p>$20.00</p>
                    </div>
                    <div className="cart-btn">
                      <Link href="#">
                        <i className="fa fa-times" />
                      </Link>
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
              </li> */}
            </ul>
            {/* <Link
              href="#"
              className="custom-btn"
            >
              <i className="fas fa-phone-volume" />
              +880 1939 139 091
            </Link> */}
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}
