import React from 'react'
import {Link} from 'react-router-dom'

function PaymentMethod() {
    return (
<div className="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<div className="row align-items-start">
							
								{/* <!-- Single --> */}
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
									<div className="card-wrap gray rounded mb-4">
										<div className="card-wrap-header px-3 py-2 br-bottom d-flex align-items-center justify-content-between">
											<div className="card-header-flex">
												<h4 className="fs-md ft-bold mb-1">Debit / Credit Card</h4>
											</div>
											<div className="card-head-last-flex">
												{/* <!-- Button --> */}
												<a className="border p-3 bg-white circle text-dark d-inline-flex align-items-center justify-content-center" href="add-card.html"><i className="fas fa-pen-nib position-absolute"></i></a>
												 {/* <!-- Button --> */}
												 <button className="border bg-white text-danger p-3 circle text-dark d-inline-flex align-items-center justify-content-center"><i className="fas fa-times position-absolute"></i></button>
											</div>
										</div>
										<div className="card-wrap-body px-3 py-3">
											<div className="pay-card mb-3">
												<h5 className="fs-sm ft-bold mb-0">Card Number</h5>
												<p>1470 **** **** 6325 (Visa)</p>
											</div>
											<div className="pay-card mb-3">
												<h5 className="fs-sm ft-bold mb-0">Card Holder</h5>
												<p>Dhananjay Preet</p>
											</div>
											
											<div className="pay-card mb-3">
												<h5 className="fs-sm ft-bold mb-0">Expired</h5>
												<p>January 2027</p>
											</div>
										</div>
									</div>
								</div>
								
								{/* <!-- Single --> */}
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
									<div className="card-wrap gray rounded mb-4">
										<div className="card-wrap-header px-3 py-2 br-bottom d-flex align-items-center justify-content-between">
											<div className="card-header-flex">
												<h4 className="fs-md ft-bold mb-1">Debit / Credit Card</h4>
											</div>
											<div className="card-head-last-flex">
												{/* <!-- Button --> */}
												<a className="border p-3 bg-white circle text-dark d-inline-flex align-items-center justify-content-center" href="add-card.html"><i className="fas fa-pen-nib position-absolute"></i></a>
												 {/* <!-- Button --> */}
												 <button className="border bg-white text-danger p-3 circle text-dark d-inline-flex align-items-center justify-content-center"><i className="fas fa-times position-absolute"></i></button>
											</div>
										</div>
										<div className="card-wrap-body px-3 py-3">
											<div className="pay-card mb-3">
												<h5 className="fs-sm ft-bold mb-0">Card Number</h5>
												<p>8526 **** **** 1700 (Visa)</p>
											</div>
											<div className="pay-card mb-3">
												<h5 className="fs-sm ft-bold mb-0">Card Holder</h5>
												<p>Dhananjay Singh</p>
											</div>
											
											<div className="pay-card mb-3">
												<h5 className="fs-sm ft-bold mb-0">Expired</h5>
												<p>January 2027</p>
											</div>
										</div>
									</div>
								</div>
								
							</div>
							{/* <!-- row --> */}
							
							{/* <!-- row --> */}
							<div className="row align-items-start">
							
								{/* <!-- Single --> */}
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<Link to="add-card" className="btn stretched-link borders full-width"><i className="fas fa-plus mr-2"></i>Add New Card</Link>
									</div>
								</div>
								
							</div>
							{/* <!-- row --> */}
							
						</div>
    )
}

export default PaymentMethod
