import React from 'react'

function Login() {
    return (
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<form className="border p-3 rounded">				
								<div className="form-group">
									<label>User Name *</label>
									<input type="text" className="form-control" placeholder="Username*" />
								</div>
								
								<div className="form-group">
									<label>Password *</label>
									<input type="password" className="form-control" placeholder="Password*" />
								</div>
								
								<div className="form-group">
									<div className="d-flex align-items-center justify-content-between">
										<div className="flex-1">
											<input id="dd" className="checkbox-custom" name="dd" type="checkbox" />
											<label for="dd" className="checkbox-custom-label">Remember Me</label>
										</div>	
										<div className="eltio_k2">
											<a href="#">Lost Your Password?</a>
										</div>	
									</div>
								</div>
								
								<div className="form-group">
									<button type="submit" className="btn btn-md full-width bg-dark text-light fs-md ft-medium">Login</button>
								</div>
							</form>
						</div>
    )
}

export default Login
