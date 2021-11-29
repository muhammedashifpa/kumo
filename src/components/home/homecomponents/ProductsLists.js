import React from 'react'

function ProductsLists() {
    return (
        <div>
            {/* <!-- ======================= Products Lists ======================== --> */}
			<section className="space min pt-0">
				<div className="container">
					
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							
							<ul className="nav nav-tabs b-0 d-flex align-items-center justify-content-center simple_tab_links mb-4" id="myTab" role="tablist">
								<li className="nav-item" role="presentation">
									<a className="nav-link" id="all-tab" href="#all" data-toggle="tab" role="tab" aria-controls="all" aria-selected="true">All</a>
								</li>
								<li className="nav-item" role="presentation">
									<a className="nav-link active" href="#mens" id="mens-tab" data-toggle="tab" role="tab" aria-controls="mens" aria-selected="false">Men's</a>
								</li>
								<li className="nav-item" role="presentation">
									<a className="nav-link" href="#women" id="women-tab" data-toggle="tab" role="tab" aria-controls="women" aria-selected="false">Women</a>
								</li>
								<li className="nav-item" role="presentation">
									<a className="nav-link" href="#kids" id="kids-tab" data-toggle="tab" role="tab" aria-controls="kids" aria-selected="false">Kids</a>
								</li>
							</ul>
							
							<div className="tab-content" id="myTabContent">
								
								{/* <!-- All Content --> */}
								<div className="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab">
									<div className="tab_product">
										<div className="row">
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Flix Flox Jeans</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$90.00</span><span className="ft-bold theme-cl fs-md">$49.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-danger text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Fancy Salwar Suits</a></h5>
																<div className="elis_rty"><span className="ft-bold fs-md text-dark">$114.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Collot Full Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold theme-cl fs-md text-dark">$120.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Formal Fluex Kurti</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$129.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-warning text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Half Fancy Lady Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$110.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Flix Flox Jeans</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$90.00</span><span className="ft-bold theme-cl fs-md">$49.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Beautiful Design Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$129.00</span><span className="ft-bold theme-cl fs-md">$99.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Formal Men Lowers</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$129.00</span><span className="ft-bold theme-cl fs-md">$79.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
										</div>
									</div>
								</div>
								
								<div className="tab-pane fade show active" id="mens" role="tabpanel" aria-labelledby="mens-tab">
									<div className="tab_product">
										<div className="row">
											
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-danger text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Fancy Salwar Suits</a></h5>
																<div className="elis_rty"><span className="ft-bold fs-md text-dark">$114.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Formal Fluex Kurti</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$129.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Collot Full Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold theme-cl fs-md text-dark">$120.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Flix Flox Jeans</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$90.00</span><span className="ft-bold theme-cl fs-md">$49.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-warning text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Half Fancy Lady Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$110.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Flix Flox Jeans</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$90.00</span><span className="ft-bold theme-cl fs-md">$49.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Beautiful Design Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$129.00</span><span className="ft-bold theme-cl fs-md">$99.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Formal Men Lowers</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$129.00</span><span className="ft-bold theme-cl fs-md">$79.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>

											
										</div>
									</div>
								</div>
								
								{/* <!-- Women Content --> */}
								<div className="tab-pane fade" id="women" role="tabpanel" aria-labelledby="women-tab">
									<div className="tab_product">
										<div className="row">
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Beautiful Design Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$129.00</span><span className="ft-bold theme-cl fs-md">$99.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-warning text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Half Fancy Lady Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$110.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-danger text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Fancy Salwar Suits</a></h5>
																<div className="elis_rty"><span className="ft-bold fs-md text-dark">$114.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
						
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Formal Fluex Kurti</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$129.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Collot Full Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold theme-cl fs-md text-dark">$120.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Flix Flox Jeans</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$90.00</span><span className="ft-bold theme-cl fs-md">$49.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-warning text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Half Fancy Lady Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$110.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Flix Flox Jeans</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$90.00</span><span className="ft-bold theme-cl fs-md">$49.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Formal Men Lowers</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$129.00</span><span className="ft-bold theme-cl fs-md">$79.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="tab-pane fade" id="kids" role="tabpanel" aria-labelledby="kids-tab">
									<div className="tab_product">
										<div className="row">
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-warning text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Half Fancy Lady Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$110.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-danger text-white position-absolute ft-regular ab-left text-upper">Hot</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Fancy Salwar Suits</a></h5>
																<div className="elis_rty"><span className="ft-bold fs-md text-dark">$114.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Formal Fluex Kurti</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$149.00</span><span className="ft-bold theme-cl fs-md">$129.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Collot Full Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold theme-cl fs-md text-dark">$120.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Flix Flox Jeans</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$90.00</span><span className="ft-bold theme-cl fs-md">$49.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Flix Flox Jeans</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$90.00</span><span className="ft-bold theme-cl fs-md">$49.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											

											

											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Beautiful Design Dress</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$129.00</span><span className="ft-bold theme-cl fs-md">$99.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<button className="snackbar-wishlist btn btn_love position-absolute ab-right"><i className="far fa-heart"></i></button> 
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden ovr-hide" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1.jpg" alt="..."/></a>
															<a className="card-img-top d-block overflow-hidden ovr-show" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1-a.jpg" alt="..."/></a>
															<div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
																<div className="group_btn">
																	<a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"><i className="ti-fullscreen"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="lni lni-heart"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>
																	<a href="#" className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Compare"><i className="lni lni-shuffle"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
														<div className="text-left">
															<div className="text-center">
																<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Formal Men Lowers</a></h5>
																<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">$129.00</span><span className="ft-bold theme-cl fs-md">$79.00</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
										</div>
									</div>
								</div>
								
							</div>
							
						</div>
					</div>
					
				</div>
			</section>
			{/* <!-- ======================= Products List ======================== --> */}
			
        </div>
    )
}

export default ProductsLists
