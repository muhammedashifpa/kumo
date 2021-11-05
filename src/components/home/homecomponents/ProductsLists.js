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
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(5 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Women Striped Shirt Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-40%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/3.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Boys Solid Sweatshirt</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<span className="small">(32 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Floral Print Jumpsuit</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-55%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/6.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Solid A-Line Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$50 - $149</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-30%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/7.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Printed Straight Kurta</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$199</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/3.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(42 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Women Printed A-Line Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$110 - $600</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/9.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Fit and Flare Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $110</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-60%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/6.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(15 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Self Design Jumpsuit</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$119</span></div>
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
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(5 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Women Striped Shirt Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-40%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Boys Solid Sweatshirt</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/9.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<span className="small">(32 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Floral Print Jumpsuit</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-55%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/10.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Solid A-Line Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$50 - $149</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-30%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/11.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Printed Straight Kurta</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$199</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/12.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(42 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Women Printed A-Line Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$110 - $600</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/13.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Fit and Flare Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $110</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-60%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/14.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(15 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Self Design Jumpsuit</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$119</span></div>
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
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(5 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Women Striped Shirt Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-40%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Boys Solid Sweatshirt</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/3.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<span className="small">(32 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Floral Print Jumpsuit</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-55%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/4.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Solid A-Line Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$50 - $149</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-30%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Printed Straight Kurta</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$199</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* {/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/6.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(42 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Women Printed A-Line Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$110 - $600</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* {/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/8.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Fit and Flare Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $110</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* {/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-60%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/7.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(15 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Self Design Jumpsuit</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$119</span></div>
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
											
											{/* {/* {/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/1.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(5 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Women Striped Shirt Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* {/* <!-- Single --> */} 
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-40%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/4.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Boys Solid Sweatshirt</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* {/* <!-- Single --> */} 
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/5.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<span className="small">(32 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Floral Print Jumpsuit</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $129</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-55%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/3.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Solid A-Line Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$50 - $149</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* <!-- Single --> */} 
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-30%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/2.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Printed Straight Kurta</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$199</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/8.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(42 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Women Printed A-Line Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$110 - $600</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-success text-white position-absolute ft-regular ab-left text-upper">Sale</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/7.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(0 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Fit and Flare Dress</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$99 - $110</span></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											{/* {/* <!-- Single --> */}
											<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
												<div className="product_grid card b-0">
													<div className="badge bg-info text-white position-absolute ft-regular ab-left text-upper">New</div>
													<div className="badge bg-danger text-white position-absolute ft-regular ab-right text-upper">-60%</div>
													<div className="card-body p-0">
														<div className="shop_thumb position-relative">
															<a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img className="card-img-top" src="assets/img/product/9.jpg" alt="..."/></a>
															<div className="product-hover-overlay d-flex align-items-center justify-content-between">
																<div className="edlio"><a href="" className="text-underline fs-sm ft-bold snackbar-addcart">Add To Cart</a></div>
																<div className="edlio d-flex align-items-center">
																	<button className="btn auto btn_love mr-2 snackbar-wishlist"><i className="far fa-heart"></i></button>
																	<a href="#" className="text-underline" data-toggle="modal" data-target="#quickview"><i className="fas fa-expand-arrows-alt"></i></a>
																</div>
															</div>
														</div>
													</div>
													<div className="card-footer b-0 p-0 pt-2 bg-white d-flex align-items-start justify-content-between">
														<div className="text-left">
															<div className="text-left">
																<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star filled"></i>
																	<i className="fas fa-star"></i>
																	<span className="small">(15 Reviews)</span>
																</div>
																<h5 className="fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">Girls Self Design Jumpsuit</a></h5>
																<div className="elis_rty"><span className="ft-bold text-dark fs-sm">$119</span></div>
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
