import React from 'react'

function CreateAccount() {
    return (
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mfliud">
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
											<label for="ddd" className="checkbox-custom-label">Sign me up for the Newsletter!</label>
										</div>		
									</div>
								</div>
								
								<div className="form-group">
									<button type="submit" className="btn btn-md full-width bg-dark text-light fs-md ft-medium">Create An Account</button>
								</div>
							</form>
						</div>
    )
}

export default CreateAccount
