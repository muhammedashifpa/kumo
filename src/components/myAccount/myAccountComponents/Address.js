import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import axiosInstance from '../../../axios';
import {useDispatch} from 'react-redux'
import {setSnackbar} from '../../../features/ducks/snackbar'


function Address() {
	const dispatch = useDispatch()
	const [addresses,setAddresses] =useState(null)
	useEffect(() => {
		axiosInstance.get('accounts/address').then((res) => {
			console.log(res.data);
			setAddresses(res.data)
		}).catch((err) => {
			console.log(err)
		})
	},[])
	const handleDelete = (e,id) => {
		e.preventDefault()
		axiosInstance.delete('/accounts/address/'+id+'/').then((res) => {
			console.log(res.data)
			setAddresses(addresses.filter(item => item.id !== id));

			dispatch(
				setSnackbar(
				  true,
				  "success",
				  "Address deleted successfully!"
				)
			  )
		}).catch((err)=>{
			dispatch(
                setSnackbar(
                  true,
                  "error",
                  "Something error!"
                )
              )
		})
	}
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<div className="row align-items-start">
							{
								addresses === null ? <AddressNotAvailable/>: addresses.map((address) =>{
									return (
									<div key={address.id} className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
										<div className="card-wrap border rounded mb-4">
											<div className="card-wrap-header px-3 py-2 br-bottom d-flex align-items-center justify-content-between">
												<div className="card-header-flex">
													<h4 className="fs-md ft-bold mb-1">Shipping Address</h4>
													<p className="m-0 p-0"><span className="text-success bg-light-success small ft-medium px-2 py-1">Primary Account</span></p>
												</div>
												<div className="card-head-last-flex">
													<a className="border p-3 circle text-dark d-inline-flex align-items-center justify-content-center" href="edit-account-address.html"><i className="fas fa-pen-nib position-absolute"></i></a>
													<button onClick={(e) =>handleDelete(e,address.id)} className="border bg-white text-danger p-3 circle text-dark d-inline-flex align-items-center justify-content-center"><i className="fas fa-times position-absolute"></i></button>
												</div>
											</div>
											<div className="card-wrap-body px-3 py-3">
												<h5 className="ft-medium mb-1">{address.first_name+' '+address.last_name}</h5>
												<p>{address.address_1+' '+address.address_2}<br/>{address.city+' '+address.postal_code}<br/>{address.country}</p>
												<p className="lh-1"><span className="text-dark ft-medium">Email : </span>{address.email}</p>
												<p><span className="text-dark ft-medium">Call :</span>{address.mobile}</p>
											</div>
										</div>
									</div>
									)
								})
							}
							</div>
							<div className="row align-items-start">
							
								{/* <!-- Single --> */}
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="form-group">
										<Link to="add-address" className="btn stretched-link borders full-width"><i className="fas fa-plus mr-2"></i>Add New Address</Link>
									</div>
								</div>
								
							</div>
							
						</div>
    )
}

export default Address

const AddressNotAvailable = ()=>{
	return (
		<div class="col-12 col-md-12 col-lg-12 col-xl-12 text-center">
			<div class="text-center mb-4">
				<h2 class="m-0 ft-regular">No Address Available</h2>
			</div>
		</div>

		)
}
