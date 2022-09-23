import React,{useState} from 'react'
import axiosInstance from '../../../axios'
import {useSelector,useDispatch} from 'react-redux'
import {setSnackbar} from '../../../features/ducks/snackbar'
import {useNavigate} from 'react-router-dom'

function AddAddress() {
	const user = useSelector(state => state.user.user_id)
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const initialFormData = Object.freeze({
		user:user,
		first_name:null,
		last_name:null,
		email: null,
		company: null,
		address_1: null,
		address_2: null,
		country: 'india',
		city: null,
		postal_code: null,
		postal_code: null,
		mobile: null,
	});
	const [formData, updateFormData] = useState(initialFormData);
	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}
	const initialErrorData = Object.freeze({
		user:user,
		first_name:undefined,
		last_name:undefined,
		email: undefined,
		company: undefined,
		address_1: undefined,
		address_2: undefined,
		country: 'india',
		city: undefined,
		postal_code: undefined,
		postal_code: undefined,
		mobile: undefined,
	});
	const [errorData,updateErrorData] = useState(initialErrorData)
	const handleSubmit = (e) => {
		e.preventDefault()
		axiosInstance.post('/accounts/address/',formData).then((res) => {
			console.log(res.data)
			dispatch(
				setSnackbar(
				  true,
				  "success",
				  "Succesfully added new address!"
				)
			  )
			navigate('/my-account/addresses')
		}).catch((err) => {
			try{
				updateErrorData({
					...err.response.data
				})
			}catch{
				console.log(err)
			}
				
			dispatch(
                setSnackbar(
                  true,
                  "error",
                  "Please enter valid informations"
                )
              )
		})
	}
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
							<form>
							
								<div className="row">
									<div className="col-12 col-lg-12 col-xl-12 col-md-12 mb-3">
										<h4 className="ft-medium fs-lg">Add New Address</h4>
									</div>
								</div>
								
								<div className="row mb-2">
									
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">First Name *</label>
											{errorData.first_name === undefined ? null : <span className="error_message">{errorData.first_name}</span>}
											<input onChange={handleChange} name='first_name' value={formData.first_name} type="text" className={"form-control" + (errorData.first_name === undefined ? "" : " error_form")} placeholder="First Name"/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Last Name *</label>
											{errorData.last_name === undefined ? null : <span className="error_message">{errorData.last_name}</span>}
											<input onChange={handleChange}name='last_name' value={formData.last_name} type="text" className={"form-control" + (errorData.last_name === undefined ? "" : " error_form")} placeholder="Last Name"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Email *</label>
											{errorData.email === undefined ? null : <span className="error_message">{errorData.email}</span>}
											<input onChange={handleChange} name='email' value={formData.email} type="email" className={"form-control" + (errorData.email === undefined ? "" : " error_form")} placeholder="Email"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Company</label>
											{errorData.company === undefined ? null : <span className="error_message">{errorData.company}</span>}
											<input onChange={handleChange} name='company' value={formData.company} type="text" className={"form-control" + (errorData.company === undefined ? "" : " error_form")} placeholder="Company Name (optional)"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Address 1 *</label>
											{errorData.address_1 === undefined ? null : <span className="error_message">{errorData.address_1}</span>}
											<input onChange={handleChange} name='address_1' value={formData.address_1} type="text" className={"form-control" + (errorData.address_1 === undefined ? "" : " error_form")} placeholder="Address 1"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Address 2</label>
											{errorData.address_2 === undefined ? null : <span className="error_message">{errorData.address_2}</span>}
											<input onChange={handleChange} name='address_2' value={formData.address_2} type="text" className="form-control" placeholder="Address 2"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Country *</label>
											<select onChange={handleChange} name='country' defaultValue={formData.country} className="custom-select">
											  <option value="india" selected>India</option>
											  <option value="United State" selected>United State</option>
											  <option value="United Kingdom">United Kingdom</option>
											  <option value="China">China</option>
											  <option value="Pakistan">Pakistan</option>
											</select>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">City / Town *</label>
											{errorData.city === undefined ? null : <span className="error_message">{errorData.city}</span>}
											<input onChange={handleChange} name='city' value={formData.city} type="text" className={"form-control" + (errorData.city === undefined ? "" : " error_form")} placeholder="City / Town"/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">ZIP / Postcode *</label>
											{errorData.postal_code === undefined ? null : <span className="error_message">{errorData.postal_code}</span>}
											<input onChange={handleChange} name='postal_code' value={formData.postal_code} type="text" className={"form-control" + (errorData.postal_code === undefined ? "" : " error_form")} placeholder="Zip / Postcode"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<label className="text-dark">Mobile Number *(Include country code eg: '+91')</label>
											{errorData.mobile === undefined ? null : <span className="error_message">{errorData.mobile}</span>}
											<input onChange={handleChange} name='mobile' value={formData.mobile} type="text" className={"form-control" + (errorData.mobile === undefined ? "" : " error_form")} placeholder="Mobile Number"/>
										</div>
									</div>

									
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="form-group text-center">
											<button onClick={handleSubmit} className="btn btn-dark full-width">Add New Address</button>
										</div>
									</div>
									
								</div>				
								
							</form>
							{/* <!-- row --> */}
						</div>
    )
}

export default AddAddress
