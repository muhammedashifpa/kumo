import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../axios';
import { Link } from "react-router-dom";
import {addFav,removeFav} from '../../../../features/favourite/action'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';


function Grid4(props) {
    const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const { products } = props;
	if (!products || products.length === 0) return <p>Can not find any products, sorry</p>;
    return (
        <section className="middle">
				<div className="container">
					<div className="row align-items-center">
						{products.map((product) =>{
							return (
						<div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div className="product_grid card b-0">
								<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
								{/* <button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button>  */}
								<div className="card-body p-0">
									<div className="shop_thumb position-relative">
										<Link to={'/product/'+product.slug} className={"card-img-top d-block overflow-hidden ovr-hide"} ><img className="card-img-top" src={product.images[0].image} alt="..."/></Link>	
										<Link to={'/product/'+product.slug} className={"card-img-top d-block overflow-hidden ovr-show"} ><img className="card-img-top" src={product.images[1].image} alt="..."/></Link>	
										<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
											<div className="group_btn">
												<Link to={'/product/'+product.slug} className="prd_btn_square " data-toggle="tooltip" data-placement="top" title="View"><i className="ti-fullscreen"></i></Link>
												<div onClick={() => dispatch(addFav(product.id,user.user_id))} className="prd_btn_square snackbar-wishlist" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></div>
												<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"  title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
									<div className="text-left">
										<div className="text-center">
											<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">{product.product_name}</a></h5>
											<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">₹{product.price}</span><span className="ft-bold theme-cl fs-md">₹{product.offer_price}</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						)})}
						
					</div>
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 text-center">
							<a href="#" className="btn stretched-link borders m-auto"><i className="lni lni-reload mr-2"></i>Load More</a>
						</div>
					</div>
					
				</div>
			</section>
    )
}

export default Grid4
