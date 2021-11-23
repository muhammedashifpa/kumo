import React from 'react'

function FilterWithBreadCrumb() {
    return (
        <section className="py-2 br-bottom br-top">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-5 col-sm-12">
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Shop</a></li>
									<li className="breadcrumb-item active" aria-current="page">Women's</li>
								</ol>
							</nav>
						</div>
						
						<div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
							<div className="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
								<div className="single_fitres elspo_filter mr-2 br-right">
									<a href="#filterBox" className="simple-button px-2" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="filterBox"><i className="lni lni-text-align-right mr-2"></i><span className="hide_mob">Filters</span></a>
								</div>
								<div className="single_fitres mr-2 br-right">
									<select className="custom-select simple">
									  <option value="1" selected="">Default Sorting</option>
									  <option value="2">Sort by price: Low price</option>
									  <option value="3">Sort by price: Hight price</option>
									  <option value="4">Sort by rating</option>
									  <option value="5">Sort by trending</option>
									</select>
								</div>
								<div className="single_fitres">
									<a href="shop-style-4.html" className="simple-button mr-1"><i className="ti-layout-grid3"></i></a>
									<a href="shop-grid-3.html" className="simple-button mr-1"><i className="ti-layout-grid2"></i></a>
									<a href="shop-list-view.html" className="simple-button active"><i className="ti-view-list"></i></a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row align-items-center justify-content-center">
						<div className="col-xl-12 col-lg-12 col-md-12">
							<div className="collapse" id="filterBox">
								<div className="card py-3 b-0">
									<div className="row">
										
										{/* <!-- Choose Category --> */}
										<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
											<div className="single_filter_title mb-2"><h6 className="mb-0 fs-sm ft-medium text-muted">Choose Categories</h6></div>
											<div className="single_filter_card mb-2">
												<h5><a href="#mens" data-toggle="collapse" className="collapsed" aria-expanded="false" role="button">Men's<i className="accordion-indicator ti-angle-down"></i></a></h5>
												<div className="collapse" id="mens" data-parent="#mens-categories">
													<div className="card-body">
														<div className="inner_widget_link">
															<ul className="m-0 p-0">
																<li><a href="#">Pumps & high Heals<span>112</span></a></li>
																<li><a href="#">Sandels<span>82</span></a></li>
																<li><a href="#">Sneakers<span>56</span></a></li>
																<li><a href="#">Boots<span>101</span></a></li>
																<li><a href="#">Casual Shoes<span>212</span></a></li>
																<li><a href="#">Flats Sandel<span>92</span></a></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
											<div className="single_filter_card">
												<h5><a href="#womens" data-toggle="collapse" className="collapsed" aria-expanded="false" role="button">Women's<i className="accordion-indicator ti-angle-down"></i></a></h5>
												<div className="collapse" id="womens" data-parent="#womens-categories">
													<div className="card-body">
														<div className="inner_widget_link">
															<ul className="p-0 m-0">
																<li><a href="#">Pumps & high Heals<span>112</span></a></li>
																<li><a href="#">Sandels<span>82</span></a></li>
																<li><a href="#">Sneakers<span>56</span></a></li>
																<li><a href="#">Boots<span>101</span></a></li>
																<li><a href="#">Casual Shoes<span>212</span></a></li>
																<li><a href="#">Flats Sandel<span>92</span></a></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										{/* <!-- Choose Category --> */}
										<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
											<div className="single_filter_title mb-2"><h6 className="mb-0 fs-sm ft-medium text-muted">Choose Size</h6></div>
											<div className="text-left pb-0 pt-2">
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="size" id="a26"/>
													<label className="form-option-label" htmlFor="a26">26</label>
												</div>
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="size" id="a28"/>
													<label className="form-option-label" htmlFor="a28">28</label>
												</div>
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="sizes" id="a30" checked/>
													<label className="form-option-label" htmlFor="a30">30</label>
												</div>
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="sizes" id="a32"/>
													<label className="form-option-label" htmlFor="a32">32</label>
												</div>
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="sizes" id="a34"/>
													<label className="form-option-label" htmlFor="a34">34</label>
												</div>
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="sizes" id="a36"/>
													<label className="form-option-label" htmlFor="a36">36</label>
												</div>
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="sizes" id="a38"/>
													<label className="form-option-label" htmlFor="a38">38</label>
												</div>
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="sizes" id="a40"/>
													<label className="form-option-label" htmlFor="a40">40</label>
												</div>
												<div className="form-check form-option form-check-inline mb-2">
													<input className="form-check-input" type="radio" name="sizes" id="a42"/>
													<label className="form-option-label" htmlFor="a42">42</label>
												</div>
											</div>
										</div>
										
										{/* <!-- Choose Category --> */}
										<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
											<div className="single_filter_title mb-2"><h6 className="mb-0 fs-sm ft-medium text-muted">Choose Colors</h6></div>
											<div className="text-left">
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="whitea8"/>
													<label className="form-option-label rounded-circle" htmlFor="whitea8"><span className="form-option-color rounded-circle blc7"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="bluea8"/>
													<label className="form-option-label rounded-circle" htmlFor="bluea8"><span className="form-option-color rounded-circle blc2"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="yellowa8"/>
													<label className="form-option-label rounded-circle" htmlFor="yellowa8"><span className="form-option-color rounded-circle blc5"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="pinka8"/>
													<label className="form-option-label rounded-circle" htmlFor="pink8"><span className="form-option-color rounded-circle blc3"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="ared"/>
													<label className="form-option-label rounded-circle" htmlFor="ared"><span className="form-option-color rounded-circle blc4"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="agreen"/>
													<label className="form-option-label rounded-circle" htmlFor="agreen"><span className="form-option-color rounded-circle blc6"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="askypet"/>
													<label className="form-option-label rounded-circle" htmlFor="askypet"><span className="form-option-color rounded-circle blc9"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="aphilips"/>
													<label className="form-option-label rounded-circle" htmlFor="aphilips"><span className="form-option-color rounded-circle blc8"></span></label>
												</div>
												<div className="form-check form-option form-check-inline mb-1">
													<input className="form-check-input" type="radio" name="colora8" id="aelio"/>
													<label className="form-option-label rounded-circle" htmlFor="aelio"><span className="form-option-color rounded-circle blc1"></span></label>
												</div>
											</div>
										</div>
										
										{/* <!-- Choose Category --> */}
										<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
											<div className="single_filter_title mb-2"><h6 className="mb-0 fs-sm ft-medium text-muted">Filter By Price</h6></div>
											<div className="side-list mb-2">
												<div className="rg-slider">
													 <input type="text" className="js-range-slider" name="my_range" value="" />
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
    )
}

export default FilterWithBreadCrumb
