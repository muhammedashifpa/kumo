import React from 'react'

function Content() {
    return (
        <section className="middle">
				<div className="container">
				
					<div className="row justify-content-center">
						<div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">

							{/* <!-- Icon --> */}
							<div className="p-4 d-inline-flex align-items-center justify-content-center circle bg-light-success text-success mx-auto mb-4"><i className="lni lni-heart-filled fs-lg"></i></div>
							{/* <!-- Heading --> */}
							<h2 className="mb-2 ft-bold">Your Order is Completed!</h2>
							{/* <!-- Text --> */}
							<p className="ft-regular fs-md mb-5">Your order <span className="text-body text-dark">#965471202</span> has been completed. Your order details are shown for your personal accont.</p>
							{/* <!-- Button --> */}
							<a className="btn btn-dark" href="#!">Track Your Orders</a>
						</div>
					</div>
					
				</div>
			</section>
    )
}

export default Content
