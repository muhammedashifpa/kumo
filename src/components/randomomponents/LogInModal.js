import React from 'react'

function LogInModal() {
    return (
        <div>
            			{/* <!-- Log In Modal --> */}
			<div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
				<div className="modal-dialog modal-xl login-pop-form" role="document">
					<div className="modal-content" id="loginmodal">
						<div className="modal-headers">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							  <span className="ti-close"></span>
							</button>
						  </div>
					
						<div className="modal-body p-5">
							<div className="text-center mb-4">
								<h2 className="m-0 ft-regular">Login</h2>
							</div>
							
							<form>				
								<div className="form-group">
									<label>User Name</label>
									<input type="text" className="form-control" placeholder="Username*"/>
								</div>
								
								<div className="form-group">
									<label>Password</label>
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
									<p className="extra">Not a member?<a href="#et-register-wrap" className="text-dark"> Register</a></p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Modal --> */}
        </div>
    )
}

export default LogInModal
