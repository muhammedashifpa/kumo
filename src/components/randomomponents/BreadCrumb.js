import React from 'react'

function BreadCrumb(props) {
    return (
        <div className="gray py-3">
				<div className="container">
					<div className="row">
						<div className="colxl-12 col-lg-12 col-md-12">
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Support</a></li>
									<li className="breadcrumb-item active" aria-current="page">Checkout</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
    )
}

export default BreadCrumb
