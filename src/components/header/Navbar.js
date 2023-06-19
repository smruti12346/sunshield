import React from 'react'

function Navbar() {
  return (
    <>
      <div className="box-header">
        <header className="header-section style-2 d-xl-block d-none">
        <div className="header-area">
                <div className="logo">
                    <a href="index.html"><img src="assets/images/logo/01.png" alt="logo" /></a>
                </div>
                    <div className="main-menu d-none d-xl-block">
                        <ul className="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Infrastructure</a></li>                            
                            <li><a href="#0">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <ul className="right-side d-none d-xl-flex">
                        <li>
                            <a className="search-start">
                            <i className="fas fa-search" />
                            </a>
                        </li>
                        <li className="cart">
                            <a href="#">
                                <i className="fas fa-shopping-cart" />
                                <span>2</span>
                            </a>
                            <div className="cart-content">
                            <div className="cart-item">
                                <div className="cart-img">
                                    <a href="#"><img src="assets/images/header/shope/01.jpg" alt="cart" /></a>
                                </div>
                                <div className="cart-des">
                                    <a href="#">Product Title Hore</a>
                                    <p>$20.00</p>
                                </div>
                                <div className="cart-btn">
                                    <a href="#"><i className="fa fa-times" /></a>
                                </div>
                            </div>
                            <div className="cart-item">
                                <div className="cart-img">
                                    <a href="#"><img src="assets/images/header/shope/02.jpg" alt="cart" /></a>
                                </div>
                                <div className="cart-des">
                                    <a href="#">Product Title Hore</a>
                                    <p>$20.00</p>
                                </div>
                                <div className="cart-btn">
                                    <a href="#"><i className="fa fa-times" /></a>
                                </div>
                            </div>
                            <div className="cart-bottom">
                                <div className="cart-subtotal">
                                    <p>Total: <b className="float-right">$40.00</b></p>
                                </div>
                                <div className="cart-action">
                                    <button type="submit" className="button">View cart</button>
                                    <button type="submit" className="button">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <a href="#" className="custom-btn"><i className="fas fa-phone-volume" />+880 1939 139 091</a>
            </div>

        </header>
      </div>
    </>
  )
}

export default Navbar
