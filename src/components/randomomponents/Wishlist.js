import React from 'react'
import { Link } from "react-router-dom";
import {removeFav} from '../../features/favourite/action'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'


function Wishlist() {
    const dispatch = useDispatch()
	const fav = useSelector((state)=>state.fav)
	function closeWishlist() {
		document.getElementById("Wishlist").style.display = "none";
	}
    return (
        <div>
            			{/* <!-- Wishlist --> */}
			<div className="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right" style={{display:"none", right:"0"}} id="Wishlist">
				<div className="rightMenu-scroll">
					<div className="d-flex align-items-center justify-content-between slide-head py-3 px-3">
						<h4 className="cart_heading fs-md ft-medium mb-0">Saved Products</h4>
						<button onClick={closeWishlist} className="close_slide"><i className="ti-close"></i></button>
					</div>
					<div className="right-ch-sideBar">
						
						<div className="cart_select_items py-2">
							{/* <!-- Single Item --> */}
							{fav.items.map((fav)=>{
								return (
							<div key={fav.product.id} className="d-flex align-items-center justify-content-between br-bottom px-3 py-3">
								<div className="cart_single d-flex align-items-center">
									<div className="cart_selected_single_thumb">
										<Link to={'/product/'+fav.product.slug} onClick={closeWishlist}><img src={fav.product.images[0].image} width="60" className="img-fluid" alt="" /></Link>
									</div>
									<div className="cart_single_caption pl-2">
										<h4 className="product_title fs-sm ft-medium mb-0 lh-1">{fav.product.product_name}</h4>
										<p className="mb-2"><span className="text-dark ft-medium small">{fav.product.category}</span>, <span className="text-dark small">{fav.product.gender}</span></p>
										<h4 className="fs-md ft-medium mb-0 lh-1">₹{fav.product.price}</h4>
									</div>
								</div>
								<div className="fls_last"><button onClick={() => dispatch(removeFav(fav.id))} className="close_slide gray"><i className="ti-close"></i></button></div>
							</div>
								)
							})}

							
						</div>
						
						<div className="d-flex align-items-center justify-content-between br-top br-bottom px-3 py-3">
							<h6 className="mb-0">Subtotal</h6>
							<h3 className="mb-0 ft-medium">₹{fav.subtotal}</h3>
						</div>
						
						<div className="cart_action px-3 py-3">
							<div className="form-group">
								<button type="button" className="btn d-block full-width btn-dark">Move To Cart</button>
							</div>
							<div className="form-group">
								<Link to="/my-account/wishlist" onClick={closeWishlist}  className="btn d-block full-width btn-dark-light">Edit or View</Link>
								{/* <button type="button" className="btn d-block full-width btn-dark-light">Edit or View</button> */}
							</div>
						</div>
						
					</div>
				</div>
			</div>
			{/* <script> */}
			{/* function openWishlist() {
				document.getElementById("Wishlist").style.display = "block"
			},
			function closeWishlist() {
				document.getElementById("Wishlist").style.display = "none",
				console.log("Wishlist")
			} */}
			{/* </script> */}
		
        </div>
    )
}

export default Wishlist
