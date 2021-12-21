import React from 'react'

function ProductViewModal() {
    return (
			<div className="modal fade lg-modal" id="quickview" tabIndex="-1" role="dialog" aria-labelledby="quickviewmodal" aria-hidden="true">
				<div className="modal-dialog modal-xl login-pop-form" role="document">
					<div className="modal-content" id="quickviewmodal">
						<div className="modal-headers">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span className="ti-close"></span>
							</button>
						  </div>
					
						<div className="modal-body">
							<div className="quick_view_wrap">
					
								<div className="quick_view_thmb">
									<div className="quick_view_slide">
										<div className="single_view_slide"><img src="assets/img/product/1.jpg" className="img-fluid" alt="" /></div>
										<div className="single_view_slide"><img src="assets/img/product/2.jpg" className="img-fluid" alt="" /></div>
										<div className="single_view_slide"><img src="assets/img/product/3.jpg" className="img-fluid" alt="" /></div>
										<div className="single_view_slide"><img src="assets/img/product/4.jpg" className="img-fluid" alt="" /></div>
									</div>
								</div>
								
								<div className="quick_view_capt">
									<div className="prd_details">
										
										<div className="prt_01 mb-1"><span className="text-light bg-info rounded px-2 py-1">Dresses</span></div>
										<div className="prt_02 mb-2">
											<h2 className="ft-bold mb-1">Women Striped Shirt Dress</h2>
											<div className="text-left">
												<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star filled"></i>
													<i className="fas fa-star"></i>
													<span className="small">(412 Reviews)</span>
												</div>
												<div className="elis_rty"><span className="ft-medium text-muted line-through fs-md mr-2">$199</span><span className="ft-bold theme-cl fs-lg mr-2">$110</span><span className="ft-regular text-danger bg-light-danger py-1 px-2 fs-sm">Out of Stock</span></div>
											</div>
										</div>
										
										<div className="prt_03 mb-3">
											<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
										</div>
										
										<div className="prt_04 mb-2">
											<p className="d-flex align-items-center mb-0 text-dark ft-medium">Color:</p>
											<div className="text-left">
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="color8" id="white8"/>
													<label className="form-option-label rounded-circle" htmlFor="white8"><span className="form-option-color rounded-circle blc7"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="color8" id="blue8"/>
													<label className="form-option-label rounded-circle" htmlFor="blue8"><span className="form-option-color rounded-circle blc2"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="color8" id="yellow8"/>
													<label className="form-option-label rounded-circle" htmlFor="yellow8"><span className="form-option-color rounded-circle blc5"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="color8" id="pink8"/>
													<label className="form-option-label rounded-circle" htmlFor="pink8"><span className="form-option-color rounded-circle blc3"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="color8" id="red"/>
													<label className="form-option-label rounded-circle" htmlFor="red"><span className="form-option-color rounded-circle blc4"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="color8" id="green"/>
													<label className="form-option-label rounded-circle" htmlFor="green"><span className="form-option-color rounded-circle blc6"></span></label>
												</div>
											</div>
										</div>
										
										<div className="prt_04 mb-4">
											<p className="d-flex align-items-center mb-0 text-dark ft-medium">Size:</p>
											<div className="text-left pb-0 pt-2">
												<div className="form-check size-option form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="Vsize" id="V28"/>
													<label className="form-option-label" htmlFor="V28">28</label>
												</div>
												<div className="form-check form-option size-option  form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="Vsize" id="V30"/>
													<label className="form-option-label" htmlFor="V30">30</label>
												</div>
												<div className="form-check form-option size-option  form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="Vsize" id="V32"/>
													<label className="form-option-label" htmlFor="V32">32</label>
												</div>
												<div className="form-check form-option size-option  form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="Vsize" id="34"/>
													<label className="form-option-label" htmlFor="V34">34</label>
												</div>
												<div className="form-check form-option size-option  form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="Vsize" id="V36"/>
													<label className="form-option-label" htmlFor="V36">36</label>
												</div>
												<div className="form-check form-option size-option  form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="Vsize" id="V38"/>
													<label className="form-option-label" htmlFor="V38">38</label>
												</div>
												<div className="form-check form-option size-option  form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="Vsize" id="V40"/>
													<label className="form-option-label" htmlFor="V40">40</label>
												</div>
											</div>
										</div>
										
										<div className="prt_05 mb-4">
											<div className="form-row mb-7">
												<div className="col-12 col-lg-auto">
													{/* <!-- Quantity --> */}
													<select className="mb-2 custom-select">
													  <option value="1" selected="">1</option>
													  <option value="2">2</option>
													  <option value="3">3</option>
													  <option value="4">4</option>
													  <option value="5">5</option>
													</select>
												</div>
												<div className="col-12 col-lg">
													{/* <!-- Submit --> */}
													<button type="submit" className="btn btn-block custom-height bg-dark mb-2">
														<i className="lni lni-shopping-basket mr-2"></i>Add to Cart 
													</button>
												</div>
												<div className="col-12 col-lg-auto">
													{/* <!-- Wishlist --> */}
													<button className="btn custom-height btn-default btn-block mb-2 text-dark" data-toggle="button">
														<i className="lni lni-heart mr-2"></i>Wishlist
													</button>
												</div>
										  </div>
										</div>
										
										<div className="prt_06">
											<p className="mb-0 d-flex align-items-center">
											  <span className="mr-4">Share:</span>
											  <a className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2" href="#!">
												<i className="fab fa-twitter position-absolute"></i>
											  </a>
											  <a className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2" href="#!">
												<i className="fab fa-facebook-f position-absolute"></i>
											  </a>
											  <a className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted" href="#!">
												<i className="fab fa-pinterest-p position-absolute"></i>
											  </a>
											</p>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
}

export default ProductViewModal
