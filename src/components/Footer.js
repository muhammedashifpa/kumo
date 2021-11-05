import React from 'react'

function Footer() {
    return (
        <div>
            			{/* <!-- ============================ Footer Start ================================== --> */}
			<footer className="light-footer">
				<div className="footer-middle">
					<div className="container">
						<div className="row">
							
							<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
								<div className="footer_widget">
									<img src="assets/img/logo.png" className="img-footer small mb-2" alt="" />
									
									<div className="address mt-3">
										3298 Grant Street Longview, TX<br/>United Kingdom 75601	
									</div>
									<div className="address mt-3">
										1-202-555-0106<br/>help@shopper.com
									</div>
									<div className="address mt-3">
										<ul className="list-inline">
											<li className="list-inline-item"><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="lni lni-youtube"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="lni lni-instagram-filled"></i></a></li>
											<li className="list-inline-item"><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div className="footer_widget">
									<h4 className="widget_title">Supports</h4>
									<ul className="footer-menu">
										<li><a href="#">Contact Us</a></li>
										<li><a href="#">About Page</a></li>
										<li><a href="#">Size Guide</a></li>
										<li><a href="#">Shipping & Returns</a></li>
										<li><a href="#">FAQ's Page</a></li>
										<li><a href="#">Privacy</a></li>
									</ul>
								</div>
							</div>
									
							<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div className="footer_widget">
									<h4 className="widget_title">Shop</h4>
									<ul className="footer-menu">
										<li><a href="#">Men's Shopping</a></li>
										<li><a href="#">Women's Shopping</a></li>
										<li><a href="#">Kids's Shopping</a></li>
										<li><a href="#">Furniture</a></li>
										<li><a href="#">Discounts</a></li>
									</ul>
								</div>
							</div>
					
							<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
								<div className="footer_widget">
									<h4 className="widget_title">Company</h4>
									<ul className="footer-menu">
										<li><a href="#">About</a></li>
										<li><a href="#">Blog</a></li>
										<li><a href="#">Affiliate</a></li>
										<li><a href="#">Login</a></li>
									</ul>
								</div>
							</div>
							
							<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
								<div className="footer_widget">
									<h4 className="widget_title">Subscribe</h4>
									<p>Receive updates, hot deals, discounts sent straignt in your inbox daily</p>
									<div className="foot-news-last">
										<div className="input-group">
										  <input type="text" className="form-control" placeholder="Email Address"/>
											<div className="input-group-append">
												<button type="button" className="input-group-text bg-dark b-0 text-light"><i className="lni lni-arrow-right"></i></button>
											</div>
										</div>
									</div>
									<div className="address mt-3">
										<h5 className="fs-sm">Secure Payments</h5>
										<div className="scr_payment"><img src="assets/img/card.png" className="img-fluid" alt="" /></div>
									</div>
								</div>
							</div>
								
						</div>
					</div>
				</div>
			</footer>
			{/* <!-- ============================ Footer End ================================== --> */}
			
        </div>
    )
}

export default Footer
