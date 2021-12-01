import React, { useEffect } from 'react'
import axiosInstance from '../../../axios';

import {
    BrowserRouter as Router,
	NavLink,
	useNavigate
  } from "react-router-dom";

function ProfileDashbord(props) {
		const navigate = useNavigate();
		// useEffect(() => {
		// });
		function logout(){
			const response = axiosInstance.post('accounts/logout/', {
				refresh_token: localStorage.getItem('refresh_token'),
			});
			localStorage.removeItem('access_token');
			localStorage.removeItem('refresh_token');
			axiosInstance.defaults.headers['Authorization'] = null;
			navigate('/');
			// props.authUpdate()

		}
    return (
        <div className="col-12 col-md-12 col-lg-4 col-xl-4 text-center miliods" onClick={props.authUpdate}>
							<div className="d-block border rounded mfliud-bot">
								<div className="dashboard_author px-2 py-5">
									<div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
										<img src="assets/img/team-1.jpg" className="img-fluid circle" width="100" alt="" />
									</div>
									<div className="dash_caption">
										<h4 className="fs-md ft-medium mb-0 lh-1">Adam Wishnoi</h4>
										<span className="text-muted smalls">Australia</span>
									</div>
								</div>
								
								<div className="dashboard_author">
									<h4 className="px-3 py-2 mb-0 lh-2 gray fs-sm ft-medium text-muted text-uppercase text-left">Dashboard Navigation</h4>
									<ul className="dahs_navbar">
										<li><NavLink to="my-profile"><i className="lni lni-user mr-2"></i>Profile Info</NavLink></li>
										<li><NavLink to="my-order"><i className="lni lni-shopping-basket mr-2"></i>My Order</NavLink></li>
										<li><NavLink to="wishlist" ><i className="lni lni-heart mr-2"></i>Wishlist</NavLink></li>
										<li><NavLink to="addresses"><i className="lni lni-map-marker mr-2"></i>Addresses</NavLink></li>
										<li><NavLink to="payment-methode"><i className="lni lni-mastercard mr-2"></i>Payment Methode</NavLink></li>
										<li><a href="" onClick={logout}><i className="lni lni-power-switch mr-2"></i>Log Out</a></li>
									</ul>
								</div>
								
							</div>
						</div>
    )
}

export default ProfileDashbord
