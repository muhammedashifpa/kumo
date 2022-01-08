import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Header() {
    const user = useSelector(state => state.user)
    return (
        <div className={"header dark-text"}>
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
                                    <a href="#">
                                      <i className="lni lni-search-alt"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-menus-wrapper" style={{transitionProperty: "none"}}>
                        <ul className="nav-menu">
                        
                            <li><NavLink to="/admin" >Dashboard</NavLink></li>
                            <li><NavLink to='users'>Users</NavLink>
                            </li>
                            
                            <li><NavLink to='products' >Product</NavLink>
                            </li>
                            
                        </ul>
                        
                        <ul className="nav-menu nav-menu-social align-to-right">
                            <li>
                                <a href="#" >
                                    <i className="lni lni-search-alt"></i>
                                </a>
                            </li>
                            <li>
                                {user.is_admin ?<NavLink to="/admin">
                                {user.username}&nbsp;&nbsp;&nbsp;
                                                    <i className="lni lni-user"></i>
                                                </NavLink>
                                                    :
                                                <a href="#" data-toggle="modal" data-target="#login">
                                                    <i className="lni lni-user"></i>
                                                </a>
                            }

                            </li>
                            <li>
                                

                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
