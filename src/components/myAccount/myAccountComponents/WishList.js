import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import  {removeFav} from "../../../features/favourite/action"
import {useDispatch} from 'react-redux'



function WishList() {
    const fav = useSelector((state)=>state.fav)
    const dispatch = useDispatch()
    const products  = fav.items;
    if(products.length ===0 ||products === null){
        return(
            <div className="col-12 col-md-12 col-lg-8 col-xl-8 text-center">
                            <div className="text-center mb-4" >
                                <h2 className="m-0 ft-regular">Your wishlist is empty</h2>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<Link to="/category" className="btn stretched-link borders full-width"><i className="fas fa-plus mr-2"></i>Explore</Link>
									</div>
								</div>
							
						</div>
        )
    }
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8 text-center">
							{/* <!-- row --> */}
							<div className="row align-items-center">
							
                                {/* <!-- Single --> */}
                                {products.map((product) =>{
							return (
                                <div key={product.product.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="product_grid card b-0">
                                        <div className="badge bg-danger text-white position-absolute ft-regular ab-left text-upper">Hot</div>
                                        <button onClick={() => dispatch(removeFav(product.id))} className="snackbar-wishlist btn btn_love prd_btn_round position-absolute ab-right" ><i className="ti-close"></i></button> 
                                        <div className="card-body p-0">
                                            <div className="shop_thumb position-relative">
										<a className={"card-img-top d-block overflow-hidden ovr-hide"} href="shop-single-v1.html"><img className="card-img-top" src={product.product.images[0].image} alt="..."/></a>	
										<a className={"card-img-top d-block overflow-hidden ovr-show"} href="shop-single-v1.html"><img className="card-img-top" src={product.product.images[1].image} alt="..."/></a>
                                                <div className="product-hover-overlay btn d-flex align-items-center justify-content-center">
                                                    <div className="group_btn">
												        <Link to={'/product/'+product.product.slug} className="prd_btn_square " data-toggle="tooltip" data-placement="top" title="View"><i className="ti-fullscreen"></i></Link>
												        {/* <Link to={'/product/'+product.product.slug} className="prd_btn_square" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="lni lni-shopping-basket"></i></Link> */}
												        <a href="#" data-toggle="modal" data-target="#quickview" className="prd_btn_square"  title="Add To Cart"><i className="lni lni-shopping-basket"></i></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer b-0 p-3 pb-0 bg-white d-flex align-items-start justify-content-center">
                                            <div className="text-left">
                                                <div className="text-center">
											<h5 className="fw-bolder fs-md mb-0 lh-1 mb-1"><a href="shop-single-v1.html">{product.product.product_name}</a></h5>
											<div className="elis_rty"><span className="text-muted ft-medium line-through mr-2">₹{product.product.price}</span><span className="ft-bold theme-cl fs-md">₹{product.product.offer_price}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )})}
							</div>
							{/* <!-- row --> */}
						</div>
    )
}

export default WishList
