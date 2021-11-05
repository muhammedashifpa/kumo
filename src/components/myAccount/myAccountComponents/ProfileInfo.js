import React from 'react'

function ProfileInfo() {
    return (
        <div class="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<div class="row align-items-center">
								<form class="row m-0">
									
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div class="form-group">
											<label class="small text-dark ft-medium">First Name *</label>
											<input type="text" class="form-control" value="Dhananjay"/>
										</div>
									</div>
									
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div class="form-group">
											<label class="small text-dark ft-medium">Last Name *</label>
											<input type="text" class="form-control" value="Preet"/>
										</div>
									</div>
									
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div class="form-group">
											<label class="small text-dark ft-medium">Email ID *</label>
											<input type="text" class="form-control" value="dhananjay7@gmail.com"/>
										</div>
									</div>
									
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div class="form-group">
											<label class="small text-dark ft-medium">About Us *</label>
											<textarea class="form-control ht-80">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias</textarea>
										</div>
									</div>
									
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div class="form-group">
											<label class="small text-dark ft-medium">Current Password *</label>
											<input type="text" class="form-control" value="Current Password"/>
										</div>
									</div>
									
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div class="form-group">
											<label class="small text-dark ft-medium">New Password *</label>
											<input type="text" class="form-control" value="New Password" />
										</div>
									</div>
									
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div class="form-group">
											<button type="button" class="btn btn-dark">Save Changes</button>
										</div>
									</div>
									
								</form>
							</div>
							{/* <!-- row --> */}
						</div>
    )
}

export default ProfileInfo
