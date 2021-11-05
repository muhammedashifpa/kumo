import React from 'react'

function HomeBlog() {
    return (
        <div>
            {/* <!-- ======================= Home Blog ============================ --> */}
			<section className="space min">
				<div className="container">
					
					<div className="row justify-content-center">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
							<div className="sec_title position-relative text-center">
								<h2 className="off_title">Latest News</h2>
								<h3 className="ft-bold pt-3">New Updates</h3>
							</div>
						</div>
					</div>
					
					<div className="row">
						
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
							<div className="_blog_wrap">
								<div className="_blog_thumb mb-2">
									<a href="blog-detail.html" className="d-block"><img src="assets/img/bl-1.png" className="img-fluid rounded" alt="" /></a>
								</div>
								<div className="_blog_caption">
									<span className="text-muted">26 Jan 2021</span>
									<h5 className="bl_title lh-1"><a href="blog-detail.html">Let's start bring sale on this saummer vacation.</a></h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
									<a href="blog-detail.html" className="text-dark fs-sm">Continue Reading..</a>
								</div>
							</div>
						</div>
						
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
							<div className="_blog_wrap">
								<div className="_blog_thumb mb-2">
									<a href="blog-detail.html" className="d-block"><img src="assets/img/bl-2.png" className="img-fluid rounded" alt="" /></a>
								</div>
								<div className="_blog_caption">
									<span className="text-muted">17 July 2021</span>
									<h5 className="bl_title lh-1"><a href="blog-detail.html">Let's start bring sale on this saummer vacation.</a></h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
									<a href="blog-detail.html" className="text-dark fs-sm">Continue Reading..</a>
								</div>
							</div>
						</div>
						
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
							<div className="_blog_wrap">
								<div className="_blog_thumb mb-2">
									<a href="blog-detail.html" className="d-block"><img src="assets/img/bl-3.png" className="img-fluid rounded" alt="" /></a>
								</div>
								<div className="_blog_caption">
									<span className="text-muted">10 Aug 2021</span>
									<h5 className="bl_title lh-1"><a href="blog-detail.html">Let's start bring sale on this saummer vacation.</a></h5>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
									<a href="blog-detail.html" className="text-dark fs-sm">Continue Reading..</a>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
			</section>
			{/* <!-- ======================= HomeBlog ============================ --> */}
			
        </div>
    )
}

export default HomeBlog
