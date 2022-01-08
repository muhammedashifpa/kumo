import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axiosInstance from '../../axios';
function Search() {
	const navigate = useNavigate()
	const [data,updateData]=useState('')
	function closeSearch() {
		document.getElementById("Search").style.display = "none";
	}
	const handelSearch =(e)=> {
		closeSearch();
		navigate('products/search='+data)
	}
	const handleChange = (e)=> {
		updateData(e.target.value)

	}
    return (
        <div>
            {/* <!-- Search --> */}
			<div className="w3-ch-sideBar w3-bar-block w3-card-2 w3-animate-right" style={{display:"none",right:"0"}} id="Search">
				<div className="rightMenu-scroll">
					<div className="d-flex align-items-center justify-content-between slide-head py-3 px-3">
						<h4 className="cart_heading fs-md ft-medium mb-0">Search Products</h4>
						<button onClick={closeSearch} className="close_slide"><i className="ti-close"></i></button>
					</div>
						
					<div className="cart_action px-3 py-4">
						{/* <form className="form m-0 p-0" onSubmit={handelSearch}> */}
							<div className="form-group">
								<input list="search-list" onChange={handleChange} type="text" className="form-control" placeholder="Product Keyword.." />
								<datalist id="search-list">
									
								</datalist>
							</div>
							
							{/* <div className="form-group">
								<input className="custom-select">
								  <option value="1" selected="">Choose Category</option>
								  <option value="2">Men's Store</option>
								  <option value="3">Women's Store</option>
								  <option value="4">Kid's Fashion</option>
								  <option value="5">Inner Wear</option>
								</input>
							</div> */}
							
							<div className="form-group mb-0">
								<button type="button" onClick={handelSearch} className="btn d-block full-width btn-dark">Search Product</button>
							</div>
						{/* </form> */}
					</div>
					
					<div className="d-flex align-items-center justify-content-center br-top br-bottom py-2 px-3">
						<h4 className="cart_heading fs-md mb-0">Hot Categories</h4>
					</div>
						
					<div className="cart_action px-3 py-3">
						<div className="row">
							<div className="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
								<div className="cats_side_wrap text-center">
									<div className="sl_cat_01"><div className="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"><a href="" className="d-block"><img src="assets/img/tshirt.png" className="img-fluid" width="40" alt="" /></a></div></div>
									<div className="sl_cat_02"><h6 className="m-0 ft-medium fs-sm"><a href="">T-Shirts</a></h6></div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
								<div className="cats_side_wrap text-center">
									<div className="sl_cat_01"><div className="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"><a href="" className="d-block"><img src="assets/img/pant.png" className="img-fluid" width="40" alt="" /></a></div></div>
									<div className="sl_cat_02"><h6 className="m-0 ft-medium fs-sm"><a href="">Pants</a></h6></div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
								<div className="cats_side_wrap text-center">
									<div className="sl_cat_01"><div className="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"><a href="" className="d-block"><img src="assets/img/fashion.png" className="img-fluid" width="40" alt="" /></a></div></div>
									<div className="sl_cat_02"><h6 className="m-0 ft-medium fs-sm"><a href="">Women's</a></h6></div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
								<div className="cats_side_wrap text-center">
									<div className="sl_cat_01"><div className="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"><a href="" className="d-block"><img src="assets/img/sneakers.png" className="img-fluid" width="40" alt="" /></a></div></div>
									<div className="sl_cat_02"><h6 className="m-0 ft-medium fs-sm"><a href="">Shoes</a></h6></div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
								<div className="cats_side_wrap text-center">
									<div className="sl_cat_01"><div className="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"><a href="" className="d-block"><img src="assets/img/television.png" className="img-fluid" width="40" alt="" /></a></div></div>
									<div className="sl_cat_02"><h6 className="m-0 ft-medium fs-sm"><a href="">Television</a></h6></div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-md-4 col-4 mb-3">
								<div className="cats_side_wrap text-center">
									<div className="sl_cat_01"><div className="d-inline-flex align-items-center justify-content-center p-3 circle mb-2 gray"><a href="" className="d-block"><img src="assets/img/accessories.png" className="img-fluid" width="40" alt="" /></a></div></div>
									<div className="sl_cat_02"><h6 className="m-0 ft-medium fs-sm"><a href="">Accessories</a></h6></div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>

        </div>
		// ,function openSearch() {
		// 	document.getElementById("Search").style.display = "block";
		// }
		// ,
		// function closeSearch() {
		// 	document.getElementById("Search").style.display = "none";
		// }
    )
}

export default Search
