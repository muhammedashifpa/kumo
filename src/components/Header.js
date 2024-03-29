import React, { useState, useEffect} from 'react'
import { Link,useLocation } from "react-router-dom";
import {useSelector} from 'react-redux'


function Header(props) {
    const user = useSelector((state)=>state.user)
    const fav = useSelector((state)=>state.fav)
    const cart = useSelector((state)=>state.cart)
    const [headerClass, updateHeaderClass]= useState('header-transparent')
    const location = useLocation()

    useEffect(()=>{
        if (location.pathname === '/' ){
            updateHeaderClass('header-transparent')
        }else{
            updateHeaderClass('')
        }
    },[location])
    
    function openSearch(event) {
        document.getElementById("Search").style.display = "block";
        event.preventDefault()

    }
    function openCart(event) {
        document.getElementById("Cart").style.display = "block";
        event.preventDefault()

    }
    function openWishlist(event) {
        document.getElementById("Wishlist").style.display = "block";
        event.preventDefault()
    }

    return (
        
        <div>
        {/* // <!-- ============================================================== -->
        // <!-- Top header  -->
        // <!-- ============================================================== -->
        // <!-- Start Navigation --> */}
        {/* <div className="header header-transparent dark-text"> */}
        <div className={"header dark-text " + headerClass}>
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
                                {/* <a href="#" onClick={authCheck}> */}
                                    <i className="lni lni-heart"></i><span className="dn-counter">2</span>
                                    {/* <i className="lni lni-heart"></i><span className="dn-counter">{user_id}</span> */}
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
                        
                            <li><Link to="/" >Home</Link></li>
                            <li><a href="#" onClick={(e)=>e.preventDefault()}>Shop</a>
                                <ul className="nav-dropdown nav-submenu">
                                    <li><Link to="/products">View All</Link></li>
                                    <li><Link to="/category">Category</Link></li>
                                    <li><a href="">Men</a></li>
                                    <li><a href="">Women</a></li>
                                    <li><Link to="">Kids</Link></li>
                                </ul>
                            </li>
               
                            
                        </ul>
                        
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li>
                                <a href="#" onClick={openSearch}>
                                    <i className="lni lni-search-alt"></i>
                                </a>
                            </li>
                            <li>
                                {user.auth ?<Link to="/my-account/my-profile">
                                {user.username}&nbsp;&nbsp;&nbsp;
                                                    <i className="lni lni-user"></i>
                                                </Link>
                                                    :
                                                <a href="#" data-toggle="modal" data-target="#login">
                                                    <i className="lni lni-user"></i>
                                                </a>
                            }

                            </li>
                            <li>
                                {user.auth ?<a href="#" onClick={openWishlist }>
                                                        <i className="lni lni-heart"></i><span className="dn-counter">{fav.count}</span>
                                                    </a>
                                                    :
                                                    <a href="#" data-toggle="modal" data-target="#login">
                                                        <i className="lni lni-heart"></i>
                                                    </a>
                            }

                            </li>
                            <li>
                                {user.auth ?<a href="#" onClick={openCart}>
                                                        <i className="lni lni-shopping-basket"></i><span className="dn-counter">{cart.count}</span>
                                                    </a>
                                                    :
                                                    <a href="#" data-toggle="modal" data-target="#login">
                                                        <i className="lni lni-shopping-basket"></i>
                                                    </a>
                            }

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
