import React from 'react'

function PaymentAddCard() {
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<form className="row">
							
								<div className="col-12 col-lg-12 col-xl-12 col-md-12 mb-3">
									<h4 className="ft-medium fs-lg">Add Debit / Credit Card</h4>
								</div>
								
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<label className="text-dark">Card Holder Name *</label>
										<input type="text" className="form-control" placeholder="Dhananjay Preet" />
									</div>
								</div>
								
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<label className="text-dark">Card Number *</label>
										<input type="text" className="form-control" placeholder="5426 4586 5485 4759" />
									</div>
								</div>									
							
								<div className="col-lg-5 col-md-5 col-sm-6">
									<div className="form-group">
										<label className="text-dark">Expire Month *</label>
										<select className="custom-select">
										  <option value="1" selected="">January</option>
										  <option value="2">February</option>
										  <option value="3">March</option>
										  <option value="4">April</option>
										  <option value="5">May</option>
										  <option value="6">June</option>
										  <option value="7">July</option>
										  <option value="8">August</option>
										  <option value="9">September</option>
										</select>
									</div>
								</div>
								
								<div className="col-lg-5 col-md-5 col-sm-6">
									<div className="form-group">
										<label className="text-dark">Expire Year *</label>
										<select className="custom-select">
										  <option value="1" selected="">2010</option>
										  <option value="2">2018</option>
										  <option value="3">2019</option>
										  <option value="4">2020</option>
										  <option value="5">2021</option>
										</select>
									</div>
								</div>
								
								<div className="col-lg-2 col-md-2 col-sm-12">
									<div className="form-group">
										<label className="text-dark">CVC *</label>
										<input type="text" className="form-control" placeholder="CVV*" />
									</div>
								</div>										
								
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="form-group">
										<input id="ak-2" className="checkbox-custom" name="ak-2" type="checkbox" />
										<label for="ak-2" className="checkbox-custom-label">By Continuing, you ar'e agree to conditions</label>
									</div>
								</div>
								
								<div className="col-lg-12 col-md-12 col-sm-12">
									<div className="form-group text-center">
										<a href="#" className="btn btn-dark full-width">Add &amp; Save card</a>
									</div>
								</div>				
								
							</form>
							{/* <!-- row --> */}
						</div>
    )
}

export default PaymentAddCard
