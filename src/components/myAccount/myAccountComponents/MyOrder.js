import React from 'react'

function MyOrder() {
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8 text-center">
							{/* <!-- Single Order List --> */}
							<div className="ord_list_wrap border mb-4 mfliud">
								<div className="ord_list_head gray d-flex align-items-center justify-content-between px-3 py-3">
									<div className="olh_flex">
										<p className="m-0 p-0"><span className="text-muted">Order Number</span></p>
										<h6 className="mb-0 ft-medium">#1250004123</h6>
									</div>	
									<div className="olh_flex">
										<a href="javascript:void(0);" className="btn btn-sm btn-dark">Track Order</a>
									</div>	
								</div>
								<div className="ord_list_body text-left">
									{/* <!-- First Product --> */}
									<div className="row align-items-center justify-content-center m-0 py-4 br-bottom">
										<div className="col-xl-5 col-lg-5 col-md-5 col-12">
											<div className="cart_single d-flex align-items-start mfliud-bot">
												<div className="cart_selected_single_thumb">
													<a href="#"><img src="assets/img/product/4.jpg" width="75" className="img-fluid rounded" alt="" /></a>
												</div>
												<div className="cart_single_caption pl-3">
													<p className="mb-0"><span className="text-muted small">Dresses</span></p>
													<h4 className="product_title fs-sm ft-medium mb-1 lh-1">Women Striped Shirt Dress</h4>
													<p className="mb-2"><span className="text-dark medium">Size: 36</span>, <span className="text-dark medium">Color: Red</span></p>
													<h4 className="fs-sm ft-bold mb-0 lh-1">$129</h4>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-md-3 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Status</span></p>
											<div className="delv_status"><span className="ft-medium small text-warning bg-light-warning rounded px-3 py-1">In Progress</span></div>
										</div>
										<div className="col-xl-4 col-lg-4 col-md-4 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Expected date by:</span></p>
											<h6 className="mb-0 ft-medium fs-sm">22 September 2021</h6>
										</div>
									</div>
									
									{/* <!-- First Product --> */}
									<div className="row align-items-center justify-content-center m-0 py-4 br-bottom">
										<div className="col-xl-5 col-lg-5 col-md-5 col-12">
											<div className="cart_single d-flex align-items-startmfliud-bot">
												<div className="cart_selected_single_thumb">
													<a href="#"><img src="assets/img/product/8.jpg" width="75" className="img-fluid rounded" alt="" /></a>
												</div>
												<div className="cart_single_caption pl-3">
													<p className="mb-0"><span className="text-muted small">Boys</span></p>
													<h4 className="product_title fs-sm ft-medium mb-1 lh-1">Boys Solid Sweatshirt</h4>
													<p className="mb-2"><span className="text-dark medium">Size: 36</span>, <span className="text-dark medium">Color: Red</span></p>
													<h4 className="fs-sm ft-bold mb-0 lh-1">$129</h4>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-md-3 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Status</span></p>
											<div className="delv_status"><span className="ft-medium small text-success bg-light-success rounded px-3 py-1">Completed</span></div>
										</div>
										<div className="col-xl-4 col-lg-4 col-md-4 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Expected date by:</span></p>
											<h6 className="mb-0 ft-medium fs-sm">10 August 2021</h6>
										</div>
									</div>
									
									{/* <!-- First Product --> */}
									<div className="row align-items-center justify-content-center m-0 py-4">
										<div className="col-xl-5 col-lg-5 col-md-5 col-12">
											<div className="cart_single d-flex align-items-start mfliud-bot">
												<div className="cart_selected_single_thumb">
													<a href="#"><img src="assets/img/product/7.jpg" width="75" className="img-fluid rounded" alt="" /></a>
												</div>
												<div className="cart_single_caption pl-3">
													<p className="mb-0"><span className="text-muted small">Men's</span></p>
													<h4 className="product_title fs-sm ft-medium mb-1 lh-1">Printed Straight Kurta</h4>
													<p className="mb-2"><span className="text-dark medium">Size: 36</span>, <span className="text-dark medium">Color: Red</span></p>
													<h4 className="fs-sm ft-bold mb-0 lh-1">$129</h4>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-md-3 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Status</span></p>
											<div className="delv_status"><span className="ft-medium small text-danger bg-light-danger rounded px-3 py-1">On Hold</span></div>
										</div>
										<div className="col-xl-4 col-lg-4 col-md-4 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Expected date by:</span></p>
											<h6 className="mb-0 ft-medium fs-sm">12 November 2021</h6>
										</div>
									</div>
									
								</div>
								<div className="ord_list_footer d-flex align-items-center justify-content-between br-top px-3">
									<div className="col-xl-3 col-lg-3 col-md-4 olf_flex text-left px-0 py-2 br-right"><a href="javascript:void(0);" className="ft-medium fs-sm"><i className="ti-close mr-2"></i>Cancel Order</a></div>
									<div className="col-xl-9 col-lg-9 col-md-8 pr-0 py-2 olf_flex d-flex align-items-center justify-content-between">
										<div className="olf_flex_inner hide_mob"><p className="m-0 p-0"><span className="text-muted medium">Paid using debit card ending with 6472</span></p></div>
										<div className="olf_inner_right"><h5 className="mb-0 fs-sm ft-bold">Total: $4510</h5></div>
									</div>
								</div>
							</div>
							{/* <!-- End Order List --> */}
							
							{/* <!-- Single Order List --> */}
							<div className="ord_list_wrap border mb-4">
								<div className="ord_list_head gray d-flex align-items-center justify-content-between px-3 py-3">
									<div className="olh_flex">
										<p className="m-0 p-0"><span className="text-muted">Order Number</span></p>
										<h6 className="mb-0 ft-medium">#1250004122</h6>
									</div>		
								</div>
								<div className="ord_list_body text-left">
									{/* <!-- First Product --> */}
									<div className="row align-items-center justify-content-center m-0 py-4 br-bottom">
										<div className="col-xl-5 col-lg-5 col-md-5 col-12">
											<div className="cart_single d-flex align-items-start mfliud-bot">
												<div className="cart_selected_single_thumb">
													<a href="#"><img src="assets/img/product/2.jpg" width="75" className="img-fluid rounded" alt=""/></a>
												</div>
												<div className="cart_single_caption pl-3">
													<p className="mb-0"><span className="text-muted small">Dresses</span></p>
													<h4 className="product_title fs-sm ft-medium mb-1 lh-1">Women Striped Shirt Dress</h4>
													<p className="mb-2"><span className="text-dark medium">Size: 36</span>, <span className="text-dark medium">Color: Red</span></p>
													<h4 className="fs-sm ft-bold mb-0 lh-1">$129</h4>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-md-3 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Status</span></p>
											<div className="delv_status"><span className="ft-medium small text-warning bg-light-warning rounded px-3 py-1">Completed</span></div>
										</div>
										<div className="col-xl-4 col-lg-4 col-md-4 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Expected date by:</span></p>
											<h6 className="mb-0 ft-medium fs-sm">22 February 2021</h6>
										</div>
									</div>
									
									{/* <!-- First Product --> */}
									<div className="row align-items-center justify-content-center m-0 py-4 br-bottom">
										<div className="col-xl-5 col-lg-5 col-md-5 col-12">
											<div className="cart_single d-flex align-items-start mfliud-bot">
												<div className="cart_selected_single_thumb">
													<a href="#"><img src="assets/img/product/8.jpg" width="75" className="img-fluid rounded" alt=""/></a>
												</div>
												<div className="cart_single_caption pl-3">
													<p className="mb-0"><span className="text-muted small">Boys</span></p>
													<h4 className="product_title fs-sm ft-medium mb-1 lh-1">Boys Solid Sweatshirt</h4>
													<p className="mb-2"><span className="text-dark medium">Size: 36</span>, <span className="text-dark medium">Color: Red</span></p>
													<h4 className="fs-sm ft-bold mb-0 lh-1">$129</h4>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-md-3 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Status</span></p>
											<div className="delv_status"><span className="ft-medium small text-success bg-light-success rounded px-3 py-1">Completed</span></div>
										</div>
										<div className="col-xl-4 col-lg-4 col-md-4 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Expected date by:</span></p>
											<h6 className="mb-0 ft-medium fs-sm">10 January 2021</h6>
										</div>
									</div>
									
									{/* <!-- First Product --> */}
									<div className="row align-items-center justify-content-center m-0 py-4">
										<div className="col-xl-5 col-lg-5 col-md-5 col-12">
											<div className="cart_single d-flex align-items-start">
												<div className="cart_selected_single_thumb">
													<a href="#"><img src="assets/img/product/1.jpg" width="75" className="img-fluid rounded" alt=""/></a>
												</div>
												<div className="cart_single_caption pl-3">
													<p className="mb-0"><span className="text-muted small">Men's</span></p>
													<h4 className="product_title fs-sm ft-medium mb-1 lh-1">Printed Straight Kurta</h4>
													<p className="mb-2"><span className="text-dark medium">Size: 36</span>, <span className="text-dark medium">Color: Red</span></p>
													<h4 className="fs-sm ft-bold mb-0 lh-1">$129</h4>
												</div>
											</div>
										</div>
										<div className="col-xl-3 col-lg-3 col-md-3 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Status</span></p>
											<div className="delv_status"><span className="ft-medium small text-danger bg-light-danger rounded px-3 py-1">Canceled</span></div>
										</div>
										<div className="col-xl-4 col-lg-4 col-md-4 col-6">
											<p className="mb-1 p-0"><span className="text-muted">Expected date by:</span></p>
											<h6 className="mb-0 ft-medium fs-sm">12 November 2021</h6>
										</div>
									</div>
									
								</div>
								<div className="ord_list_footer d-flex align-items-center justify-content-between br-top px-3">
									<div className="col-xl-12 col-lg-12 col-md-12 pl-0 py-2 olf_flex d-flex align-items-center justify-content-between">
										<div className="olf_flex_inner"><p className="m-0 p-0"><span className="text-muted medium text-left">Paid using debit card ending with 6472</span></p></div>
										<div className="olf_inner_right"><h5 className="mb-0 fs-sm ft-bold">Total: $4510</h5></div>
									</div>
								</div>
							</div>
							{/* <!-- End Order List --> */}
							
						</div>
    )
}

export default MyOrder
