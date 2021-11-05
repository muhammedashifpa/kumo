import React from 'react'


function Header() {
    function openSearch() {
        document.getElementById("Search").style.display = "block";
    }
    function openCart() {
        document.getElementById("Cart").style.display = "block";
    }
    function openWishlist() {
        document.getElementById("Wishlist").style.display = "block";
    }
    return (
        <div>
        {/* // <!-- ============================================================== -->
        // <!-- Top header  -->
        // <!-- ============================================================== -->
        // <!-- Start Navigation --> */}
        <div className="header header-transparent dark-text">
            <div className="container">
                <nav id="navigation" className="navigation navigation-landscape">
                    <div className="nav-header">
                        <a className="nav-brand" href="#">
                            <img src="assets/img/logo.png" className="logo" alt="" />
                        </a>
                        <div className="nav-toggle"></div>
                        <div className="mobile_nav">
                            <ul>
                                <li>
                                <a href="#" onClick={openSearch}>
                                    <i className="lni lni-search-alt"></i>
                                </a>
                            </li>
                            {/* <li>
                                <a href="#" data-toggle="modal" data-target="#login">
                                    <i className="lni lni-user"></i>
                                </a>
                            </li> */}
                            <li>
                                <a href="#" onClick={openWishlist}>
                                    <i className="lni lni-heart"></i><span className="dn-counter">2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={openCart}>
                                    <i className="lni lni-shopping-basket"></i><span className="dn-counter">0</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-menus-wrapper" style={{transitionProperty: "none"}}>
                        <ul className="nav-menu">
                        
                            <li><a href="#">Home</a>
                                <ul className="nav-dropdown nav-submenu">
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="home-2.html">Home 2</a></li>
                                    <li><a href="home-3.html">Home 3</a></li>
                                    <li><a href="home-4.html">Home 4</a></li>
                                    <li><a href="home-5.html">Home 5</a></li>
                                    <li><a href="home-6.html">Home 6</a></li>
                                    <li><a href="home-7.html">Home 7</a></li>
                                    <li><a href="home-8.html">Home 8</a></li>
                                    <li><a href="home-9.html">Home 9</a></li>
                                    <li><a href="home-10.html">Home 10</a></li>
                                </ul>
                            </li>
                            
                        <li><a href="#">Shop</a>
                                <ul className="nav-dropdown nav-submenu">
                                    <li><a href="">Account Dashboard</a>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><a href="my-orders.html">My Order</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="profile-info.html">Profile Info</a></li>
                                            <li><a href="addresses.html">Addresses</a></li>
                                            <li><a href="payment-methode.html">Payment Methode</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">Support</a>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li><a href="shoping-cart.html">Shopping Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="complete-order.html">Order Complete</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop-style-1.html">Shop Style 01</a></li>
                                    <li><a href="shop-style-2.html">Shop Style 02</a></li>
                                    <li><a href="shop-style-3.html">Shop Style 03</a></li>
                                    <li><a href="shop-style-4.html">Shop Style 04</a></li>
                                    <li><a href="shop-style-5.html">Shop Style 05</a></li>
                                    <li><a href="shop-list-view.html">Shop List Style</a></li>
                                </ul>
                            </li>
                            
                            <li><a href="">Product</a>
                                <ul className="nav-dropdown nav-submenu">
                                    <li><a href="shop-single-v1.html">Product Detail v01</a></li>
                                    <li><a href="shop-single-v2.html">Product Detail v02</a></li>
                                    <li><a href="shop-single-v3.html">Product Detail v03</a></li>
                                    <li><a href="shop-single-v4.html">Product Detail v04</a></li>
                                </ul>
                            </li>
                            
                            <li><a href="">Pages</a>
                                <ul className="nav-dropdown nav-submenu">
                                    <li><a href="blog.html">Blog Style</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="404.html">404 Page</a></li>
                                    <li><a href="privacy.html">Privacy Policy</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                </ul>
                            </li>
                            
                            <li><a href="docs.html">Docs</a></li>
                            
                        </ul>
                        
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li>
                                <a href="#" onClick={openSearch}>
                                    <i className="lni lni-search-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-toggle="modal" data-target="#login">
                                    <i className="lni lni-user"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={openWishlist}>
                                    <i className="lni lni-heart"></i><span className="dn-counter">2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={openCart}>
                                    <i className="lni lni-shopping-basket"></i><span className="dn-counter">3</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        {/* // <!-- End Navigation --> */}
        <div className="clearfix"></div>
        {/* // <!-- ============================================================== --> */}
        {/* // <!-- Top header  --> */}
        {/* // <!-- ============================================================== --> */}
    </div>
    )
}

export default Header
