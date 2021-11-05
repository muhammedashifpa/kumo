import React from 'react'

function Content() {
    return (
        <section className="middle">
				<div className="container">
				
					<div className="row justify-content-center">
						<div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">

							{/* <!-- Icon --> */}
							<div className="p-4 d-inline-flex align-items-center justify-content-center circle bg-light-danger text-danger mx-auto mb-4"><i className="ti-face-smile fs-lg"></i></div>
							{/* <!-- Heading --> */}
							<h2 className="mb-2 ft-bold">404. Page not found.</h2>
							{/* <!-- Text --> */}
							<p className="ft-regular fs-md mb-5">Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.</p>
							{/* <!-- Button --> */}
							<a className="btn btn-dark" href="index.html">Go To Home Page</a>
						</div>
					</div>
					
				</div>
			</section>
    )
}

export default Content
