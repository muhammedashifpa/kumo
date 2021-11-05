import React from 'react'

function SideCart() {
	function closeCart() {
		document.getElementById("Cart").style.display = "none";
	}
    return (
        <div>
            {/* <!-- Cart --> */}
			<div className="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right" style={{display:"none",right:"0"}} id="Cart">
				<div className="rightMenu-scroll">
					<div className="d-flex align-items-center justify-content-between slide-head py-3 px-3">
						<h4 className="cart_heading fs-md ft-medium mb-0">Products List</h4>
						<button onClick={closeCart} className="close_slide"><i className="ti-close"></i></button>
					</div>
					<div className="right-ch-sideBar">
						
						<div className="cart_select_items py-2">
							{/* <!-- Single Item --> */}
							<div className="d-flex align-items-center justify-content-between br-bottom px-3 py-3">
								<div className="cart_single d-flex align-items-center">
									<div className="cart_selected_single_thumb">
										<a href="#"><img src="assets/img/product/4.jpg" width="60" className="img-fluid" alt="" /></a>
									</div>
									<div className="cart_single_caption pl-2">
										<h4 className="product_title fs-sm ft-medium mb-0 lh-1">Women Striped Shirt Dress</h4>
										<p className="mb-2"><span className="text-dark ft-medium small">36</span>, <span className="text-dark small">Red</span></p>
										<h4 className="fs-md ft-medium mb-0 lh-1">$129</h4>
									</div>
								</div>
								<div className="fls_last"><button className="close_slide gray"><i className="ti-close"></i></button></div>
							</div>
							
							{/* <!-- Single Item --> */}
							<div className="d-flex align-items-center justify-content-between br-bottom px-3 py-3">
								<div className="cart_single d-flex align-items-center">
									<div className="cart_selected_single_thumb">
										<a href="#"><img src="assets/img/product/7.jpg" width="60" className="img-fluid" alt="" /></a>
									</div>
									<div className="cart_single_caption pl-2">
										<h4 className="product_title fs-sm ft-medium mb-0 lh-1">Girls Floral Print Jumpsuit</h4>
										<p className="mb-2"><span className="text-dark ft-medium small">36</span>, <span className="text-dark small">Red</span></p>
										<h4 className="fs-md ft-medium mb-0 lh-1">$129</h4>
									</div>
								</div>
								<div className="fls_last"><button className="close_slide gray"><i className="ti-close"></i></button></div>
							</div>
							
							{/* <!-- Single Item --> */}
							<div className="d-flex align-items-center justify-content-between px-3 py-3">
								<div className="cart_single d-flex align-items-center">
									<div className="cart_selected_single_thumb">
										<a href="#"><img src="assets/img/product/8.jpg" width="60" className="img-fluid" alt="" /></a>
									</div>
									<div className="cart_single_caption pl-2">
										<h4 className="product_title fs-sm ft-medium mb-0 lh-1">Girls Solid A-Line Dress</h4>
										<p className="mb-2"><span className="text-dark ft-medium small">30</span>, <span className="text-dark small">Blue</span></p>
										<h4 className="fs-md ft-medium mb-0 lh-1">$100</h4>
									</div>
								</div>
								<div className="fls_last"><button className="close_slide gray"><i className="ti-close"></i></button></div>
							</div>
							
						</div>
						
						<div className="d-flex align-items-center justify-content-between br-top br-bottom px-3 py-3">
							<h6 className="mb-0">Subtotal</h6>
							<h3 className="mb-0 ft-medium">$1023</h3>
						</div>
						
						<div className="cart_action px-3 py-3">
							<div className="form-group">
								<button type="button" className="btn d-block full-width btn-dark">Checkout Now</button>
							</div>
							<div className="form-group">
								<button type="button" className="btn d-block full-width btn-dark-light">Edit or View</button>
							</div>
						</div>
						
					</div>
				</div>
			</div>
        </div>
    )
}

export default SideCart
