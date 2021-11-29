import React from 'react';
import {Link} from 'react-router-dom';
function Login() {



	
    return (
                <div className="container my-5">
					<div className="row align-items-start justify-content-center">					
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="text-center mb-4">
                                <h2 className="m-0 ft-regular">Login</h2>
                            </div>
							<form className="border p-3 rounded">				
								<div className="form-group">
									<label>User Name *</label>
									<input type="text" className="form-control" placeholder="Username*"/>
								</div>
								
								<div className="form-group">
									<label>Password *</label>
									<input type="password" className="form-control" placeholder="Password*"/>
								</div>
								
								<div className="form-group">
									<div className="d-flex align-items-center justify-content-between">
										<div className="flex-1">
											<input id="dd" className="checkbox-custom" name="dd" type="checkbox"/>
											<label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
										</div>	
										<div className="eltio_k2">
											<a href="#">Lost Your Password?</a>
										</div>	
									</div>
								</div>
								
								<div className="form-group">
									<button type="submit" className="btn btn-md full-width bg-dark text-light fs-md ft-medium">Login</button>
								</div>
                                <div className="form-group text-center mb-0">
                                    <p className="extra">Not a member?<Link to='/accounts/register' className="text-dark"> Register</Link></p>
                                </div>
							</form>
						</div>
					</div>
				</div>
    )
}

export default Login
