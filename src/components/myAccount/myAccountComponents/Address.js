import React from 'react';
import {Link} from "react-router-dom";

function Address() {
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<div className="row align-items-start">
							
								{/* <!-- Single --> */}
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
									<div className="card-wrap border rounded mb-4">
										<div className="card-wrap-header px-3 py-2 br-bottom d-flex align-items-center justify-content-between">
											<div className="card-header-flex">
												<h4 className="fs-md ft-bold mb-1">Shipping Address</h4>
												<p className="m-0 p-0"><span className="text-success bg-light-success small ft-medium px-2 py-1">Primary Account</span></p>
											</div>
											<div className="card-head-last-flex">
												{/* <!-- Button --> */}
												<a className="border p-3 circle text-dark d-inline-flex align-items-center justify-content-center" href="edit-account-address.html"><i className="fas fa-pen-nib position-absolute"></i></a>
												 {/* <!-- Button --> */}
												 <button className="border bg-white text-danger p-3 circle text-dark d-inline-flex align-items-center justify-content-center"><i className="fas fa-times position-absolute"></i></button>
											</div>
										</div>
										<div className="card-wrap-body px-3 py-3">
											<h5 className="ft-medium mb-1">Henry V. Derr</h5>
											<p>1354 Green Street Nashville<br/>Drive Dodge City, KS 67801<br/>United States</p>
											<p className="lh-1"><span className="text-dark ft-medium">Email:</span> dhananjaypreet@gmail.com</p>
											<p><span className="text-dark ft-medium">Call:</span> +91 458 753 6924</p>
										</div>
									</div>
								</div>
								
								{/* <!-- Single --> */}
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
									<div className="card-wrap border rounded mb-4">
										<div className="card-wrap-header px-3 py-2 br-bottom d-flex align-items-center justify-content-between">
											<div className="card-header-flex">
												<h4 className="fs-md ft-bold mb-1">Shipping Address</h4>
											</div>
											<div className="card-head-last-flex">
												{/* <!-- Button --> */}
												<a className="border p-3 circle text-dark d-inline-flex align-items-center justify-content-center" href="edit-account-address.html"><i className="fas fa-pen-nib position-absolute"></i></a>
												 {/* <!-- Button --> */}
												 <button className="border bg-white text-danger p-3 circle text-dark d-inline-flex align-items-center justify-content-center"><i className="fas fa-times position-absolute"></i></button>
											</div>
										</div>
										<div className="card-wrap-body px-3 py-3">
											<h5 className="ft-medium mb-1">Willie A. Diebold</h5>
											<p>1354 Green Street Nashville<br/>Drive Dodge City, KS 67801<br/>United States</p>
											<p className="lh-1"><span className="text-dark ft-medium">Email:</span> dhananjaypreet@gmail.com</p>
											<p><span className="text-dark ft-medium">Call:</span> +91 458 753 6924</p>
										</div>
									</div>
								</div>
								
							</div>
							{/* <!-- row --> */}
							
							{/* <!-- row --> */}
							<div className="row align-items-start">
							
								{/* <!-- Single --> */}
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
									<div className="card-wrap border rounded mb-4">
										<div className="card-wrap-header px-3 py-2 br-bottom d-flex align-items-center justify-content-between">
											<div className="card-header-flex">
												<h4 className="fs-md ft-bold mb-1">Billing Address</h4>
												<p className="m-0 p-0"><span className="text-warning bg-light-warning small ft-medium px-2 py-1">Primary Account</span></p>
											</div>
											<div className="card-head-last-flex">
												{/* <!-- Button --> */}
												<a className="border p-3 circle text-dark d-inline-flex align-items-center justify-content-center" href="edit-account-address.html"><i className="fas fa-pen-nib position-absolute"></i></a>
												 {/* <!-- Button --> */}
												 <button className="border bg-white text-danger p-3 circle text-dark d-inline-flex align-items-center justify-content-center"><i className="fas fa-times position-absolute"></i></button>
											</div>
										</div>
										<div className="card-wrap-body px-3 py-3">
											<h5 className="ft-medium mb-1">Henry V. Derr</h5>
											<p>1354 Green Street Nashville<br/>Drive Dodge City, KS 67801<br/>United States</p>
											<p className="lh-1"><span className="text-dark ft-medium">Email:</span> dhananjaypreet@gmail.com</p>
											<p><span className="text-dark ft-medium">Call:</span> +91 458 753 6924</p>
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
										<Link to="add-address" className="btn stretched-link borders full-width"><i className="fas fa-plus mr-2"></i>Add New Address</Link>
									</div>
								</div>
								
							</div>
							{/* {/* <!-- row --> */}
							
						</div>
    )
}

export default Address
