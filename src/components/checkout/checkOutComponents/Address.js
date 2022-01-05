import React,{useEffect, useState} from 'react'
import axiosInstance from '../../../axios';
import {Link} from 'react-router-dom'


function Address() {
    const [addresses,setAddresses] =useState(null)
    useEffect(() => {
		axiosInstance.get('accounts/address').then((res) => {
			// console.log(res.data);
			setAddresses(res.data)
		}).catch((err) => {
			console.log(err)
		})
	},[])
    return (
        
        <div className="row mb-4">
            <div className="col-12 col-lg-12 col-xl-12 col-md-12">
                <div className="panel-group pay_opy980" id="addressaccordion">									
                    {/* <!-- Address Card --> */}
                    {addresses === null ? <AddressNotAvailable/> :addresses.map((address, index)=>{
                        return (

                        <div className="panel panel-default border">
                            <div className="panel-heading" id={'add'+address.id}>
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" href="#addressaccordion" data-target={'#address'+address.id} aria-expanded={index === 0?"true":"false"} aria-controls="debitPay" className="">{address.first_name+', '+address.address_1}<img src="assets/img/debit.png" className="img-fluid" alt="" /></a>
                                </h4>
                            </div>
                            <div id={'address'+address.id} className={`panel-collapse collapse ${ index===0?"show":''}`} aria-labelledby="dabit" data-parent="#addressaccordion">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">First Name *</label>
                                                <input type="text" className="form-control" value={address.first_name} placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">Last Name *</label>
                                                <input type="text" className="form-control" value={address.last_name}  placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">Email *</label>
                                                <input type="text" className="form-control" value={address.email}  placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">Company *</label>
                                                <input type="text" className="form-control" value={address.company} placeholder="Company" placeholder="Company Name (Optional)" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">Address 1 *</label>
                                                <input type="text" className="form-control" value={address.address_1} placeholder="Address 1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">Address 2 *</label>
                                                <input type="text" className="form-control" value={address.address_2} placeholder="Address 2" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">Country *</label>
                                                <input type="text" className="form-control" value={address.country} placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">City / Town *</label>
                                                <input type="text" className="form-control" value={address.city} placeholder="City / Town" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">ZIP / Postcode *</label>
                                                <input type="text" className="form-control" value={address.postal_code} placeholder="ZIP / Postcode" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="text-dark">Mobile Number *</label>
                                                <input type="text" className="form-control" value={address.mobile} placeholder="Mobile Number" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        )
                    })}






            {/* <!-- Address Card -->
            <div className="panel panel-default border">
                <div className="panel-heading" id="add2">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" href="#addressaccordion" data-target="#address2" aria-expanded="false" aria-controls="debitPay" className="">Debit Or Credit<img src="assets/img/debit.png" className="img-fluid" alt="" /></a>
                    </h4>
                </div>
                <div id="address2" className="panel-collapse collapse" aria-labelledby="dabit" data-parent="#addressaccordion">
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">First Name *</label>
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">Last Name *</label>
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">Email *</label>
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">Company *</label>
                                    <input type="text" className="form-control" placeholder="Company Name (Optional)" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">Address 1 *</label>
                                    <input type="text" className="form-control" placeholder="Address 1" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">Address 2 *</label>
                                    <input type="text" className="form-control" placeholder="Address 2" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">Country *</label>
                                    <input type="text" className="form-control" placeholder="Country" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">City / Town *</label>
                                    <input type="text" className="form-control" placeholder="City / Town" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">ZIP / Postcode *</label>
                                    <input type="text" className="form-control" placeholder="ZIP / Postcode" />
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="form-group">
                                    <label className="text-dark">Mobile Number *</label>
                                    <input type="text" className="form-control" placeholder="Mobile Number" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
                </div>
            </div>
        </div>
    )
}

export default Address

const AddressNotAvailable = ()=>{
	return (
        <div className="row align-items-start">
        
            
            <div class="col-12 col-md-12 col-lg-12 col-xl-12 text-center">
                <div class="text-center mb-4">
                    <h2 class="m-0 ft-regular">No Address Available</h2>
                </div>
            </div>
            {/* <!-- Single --> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="form-group">
                    <Link to="/my-account/addresses/add-address" className="btn stretched-link borders full-width"><i className="fas fa-plus mr-2"></i>Add New Address</Link>
                </div>
            </div>
        </div>

		)
}
