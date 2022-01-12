import React from 'react'
import {NavLink,Link,} from "react-router-dom";
import {useDispatch} from 'react-redux'
import axiosInstance from '../../../axios'
import {logout as logOutReducer} from '../../../features/users/action'


function MainDashbord() {
    const dispatch = useDispatch()
	function logout(){
		axiosInstance.post('accounts/logout/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		localStorage.removeItem('persist:root')
		dispatch(logOutReducer)
	}
    return (
        <div className="col-12 col-md-12 col-lg-4 col-xl-4 text-center miliods">
							<div className="d-block border rounded mfliud-bot">	
								<div className="dashboard_author">
									<h4 className="px-3 py-2 mb-0 lh-2 gray fs-sm ft-medium text-muted text-uppercase text-left">Dashboard Navigation</h4>
									<ul className="dahs_navbar">
										<li><NavLink to="overview"><i className="lni lni-user mr-2"></i>Overview</NavLink></li>
										<li><NavLink to="orders"><i className="lni lni-shopping-basket mr-2"></i>Orders</NavLink></li>
										<li><NavLink to="accounts" ><i className="lni lni-heart mr-2"></i>Accounts</NavLink></li>
										<li><NavLink to="products"><i className="lni lni-map-marker mr-2"></i>Products</NavLink></li>
										<li><Link to="/" onClick={logout}><i className="lni lni-power-switch mr-2"></i>Log Out</Link></li>
									</ul>
								</div>
								
							</div>
						</div>
    )
}

export default MainDashbord
