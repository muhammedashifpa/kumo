import React from 'react'

function AddAddress() {
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<form>
							
								<div className="row">
									<div className="col-12 col-lg-12 col-xl-12 col-md-12 mb-3">
										<h4 className="ft-medium fs-lg">Add New Address</h4>
									</div>
								</div>
								
								<div className="row mb-2">
									
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">First Name *</label>
											<input type="text" className="form-control" placeholder="First Name"/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Last Name *</label>
											<input type="text" className="form-control" placeholder="Last Name"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Email *</label>
											<input type="email" className="form-control" placeholder="Email"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Company</label>
											<input type="text" className="form-control" placeholder="Company Name (optional)"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Address 1 *</label>
											<input type="text" className="form-control" placeholder="Address 1"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Address 2</label>
											<input type="text" className="form-control" placeholder="Address 2"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Country *</label>
											<select className="custom-select">
											  <option value="1" selected="">India</option>
											  <option value="2">United State</option>
											  <option value="3">United Kingdom</option>
											  <option value="4">China</option>
											  <option value="5">Pakistan</option>
											</select>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">City / Town *</label>
											<input type="text" className="form-control" placeholder="City / Town"/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">ZIP / Postcode *</label>
											<input type="text" className="form-control" placeholder="Zip / Postcode"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Mobile Number *</label>
											<input type="text" className="form-control" placeholder="Mobile Number"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input id="delivery" className="checkbox-custom" name="delivery" type="checkbox"/>
											<label for="delivery" className="checkbox-custom-label">Set Default delivery address</label>
										</div>
									</div>
									
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="form-group text-center">
											<a href="#" className="btn btn-dark full-width">Add &amp; Save card</a>
										</div>
									</div>	
									
								</div>				
								
							</form>
							{/* <!-- row --> */}
						</div>
    )
}

export default AddAddress
