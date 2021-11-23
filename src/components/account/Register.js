import React from 'react'
import {Link} from 'react-router-dom'

function Register() {
    return (
                <div className="container my-5">
					<div className="row align-items-start justify-content-center">
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mfliud">
                            <div className="text-center mb-4">
                                <h2 className="m-0 ft-regular">Register</h2>
                            </div>
							<form className="border p-3 rounded">
					
								<div className="row">
									<div className="form-group col-md-6">
										<label>First Name *</label>
										<input type="text" className="form-control" placeholder="First Name"/>
									</div>
									<div className="form-group col-md-6">
										<label>Last Name</label>
										<input type="text" className="form-control" placeholder="Last Name"/>
									</div>
								</div>
								
								<div className="form-group">
									<label>Email *</label>
									<input type="text" className="form-control" placeholder="Username*"/>
								</div>
								
								<div className="row">
									<div className="form-group col-md-6">
										<label>Password *</label>
										<input type="password" className="form-control" placeholder="Password*"/>
									</div>
									
									<div className="form-group col-md-6">
										<label>Confirm Password *</label>
										<input type="password" className="form-control" placeholder="Confirm Password*"/>
									</div>
								</div>
								
								<div className="form-group">
									<p>By registering your details, you agree with our Terms &amp; Conditions, and Privacy and Cookie Policy.</p>
								</div>
								
								<div className="form-group">
									<div className="d-flex align-items-center justify-content-between">
										<div className="flex-1">
											<input id="ddd" className="checkbox-custom" name="ddd" type="checkbox"/>
											<label htmlFor="ddd" className="checkbox-custom-label">Sign me up for the Newsletter!</label>
										</div>		
									</div>
								</div>
								
								<div className="form-group">
									<button type="submit" className="btn btn-md full-width bg-dark text-light fs-md ft-medium">Create An Account</button>
								</div>
                                <div className="form-group text-center mb-0">
                                    <p className="extra">Already a member?<Link to='/account/login' className="text-dark"> Login</Link></p>
                                </div>
							</form>
						</div>
						
					</div>
				</div>
    )
}

export default Register
