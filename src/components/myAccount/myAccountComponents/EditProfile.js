import React from 'react'

function EditProfile() {
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<div className="row align-items-center">
								<form className="row m-0">
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">First Name *</label>
											<input type="text" className="form-control" value="Dhananjay"/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">Last Name *</label>
											<input type="text" className="form-control" value="Preet"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">Email ID *</label>
											<input type="text" className="form-control" value="dhananjay7@gmail.com"/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">About Us *</label>
											<textarea className="form-control ht-80">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</textarea>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">Current Password *</label>
											<input type="text" className="form-control" value="Current Password"/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">New Password *</label>
											<input type="text" className="form-control" value="New Password" />
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<button type="button" className="btn btn-dark">Save Changes</button>
										</div>
									</div>
									
								</form>
							</div>
							{/* <!-- row --> */}
		</div>
    )
}

export default EditProfile
