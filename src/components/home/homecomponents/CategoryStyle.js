import React from 'react'
import {Link} from 'react-router-dom'
function CategoryStyle() {
    return (
        <div>
            			{/* <!-- ========================= Category Style ========================== --> */}
			<section className="middle">
				<div className="container">
					<div className="row no-gutters exlio_gutters">
						
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
							<div className="single_cats">
								<Link to='/category/gender=WOMEN' className="cards card-overflow card-scale lg_height">
									<div className="bg-image" style={{background:"url(assets/img/b-8.png)no-repeat"}}></div>
									<div className="ct_body">
										<div className="ct_body_caption left">	
											<h2 className="m-0 ft-bold lh-1 fs-md text-upper">Women Clothes</h2>
											<span>3272 Items</span>
										</div>
										<div className="ct_footer left">
											<span className="stretched-link fs-md">Browse Items <i className="ti-arrow-circle-right"></i></span>
										</div>
									</div>
								</Link>
							</div>
							
							<div className="single_cats">
								<Link to='/category/gender=MEN' className="cards card-overflow card-scale md_height">
									<div className="bg-image" style={{background:"url(assets/img/b-5.png)no-repeat"}}></div>
									<div className="ct_body">
										<div className="ct_body_caption left">	
											<h2 className="m-0 ft-bold lh-1 fs-md text-upper">Men's Wear</h2>
											<span>7632 Items</span>
										</div>
										<div className="ct_footer left">
											<span className="stretched-link fs-md">Browse Items <i className="ti-arrow-circle-right"></i></span>
										</div>
									</div>
								</Link>
							</div>
							
						</div>
						
						<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
							{/* <!-- row --> */}
							<div className="row no-gutters">
								
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="single_cats">
										<Link to='/category/gender=WOMEN' className="cards card-overflow card-scale md_height">
											<div className="bg-image" style={{background:"url(assets/img/b-3.png)no-repeat"}}></div>
											<div className="ct_body">
												<div className="ct_body_caption left">	
													<h2 className="m-0 ft-bold lh-1 fs-md text-upper">Kid's Wear</h2>
													<span>4072 Items</span>
												</div>
												<div className="ct_footer left">
													<span className="stretched-link fs-md">Browse Items <i className="ti-arrow-circle-right"></i></span>
												</div>
											</div>
										</Link>
									</div>
									<div className="single_cats">
										<Link to='/category/gender=MEN' className="cards card-overflow card-scale lg_height">
											<div className="bg-image" style={{background:"url(assets/img/b-7.png)no-repeat"}}></div>
											<div className="ct_body">
												<div className="ct_body_caption left">	
													<h2 className="m-0 ft-bold lh-1 fs-md text-upper">Men's Jackets</h2>
													<span>9652 Items</span>
												</div>
												<div className="ct_footer left">
													<span className="stretched-link fs-md">Browse Items <i className="ti-arrow-circle-right"></i></span>
												</div>
											</div>
										</Link>
									</div>
								</div>
								
							</div>
							{/* <!-- /row --> */}
							
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ============================ Category Style =============================== --> */}
			
        </div>
    )
}

export default CategoryStyle
