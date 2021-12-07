import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../axios';
import { Link } from "react-router-dom";

function Grid4(props) {
	const { products } = props;
	if (!products || products.length === 0) return <p>Can not find any products, sorry</p>;
	console.log(products[0].images[0].image)
    return (
        <section className="middle">
				<div className="container">
				
					{/* <!-- row --> */}
					<div className="row align-items-center">
					
						{/* <!-- Single --> */}
						{products.map((product) =>{
							return (
						<div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div className="product_grid card b-0">
								<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
								<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
								<div className="card-body p-0">
									<div className="shop_thumb position-relative">
										<a className={"card-img-top d-block overflow-hidden ovr-hide"} href="shop-single-v1.html"><img className="card-img-top" src={product.images[0].image} alt="..."/></a>	
										<a className={"card-img-top d-block overflow-hidden ovr-show"} href="shop-single-v1.html"><img className="card-img-top" src={product.images[1].image} alt="..."/></a>	
										<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
											<div className="group_btn">
												<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
												<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
												<Link to={'/product/'+product.slug} className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></Link>
												{/* <a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a> */}
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
					{/* <!-- row --> */}
					
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
