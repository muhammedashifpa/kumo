import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import axiosInstance from '../../../axios'

function ProfileInfo() {
	const [data,setData] = useState(null)
	useEffect(() => {
		axiosInstance.get('accounts/user').then((res) => {
			console.log(res.data)
			setData(res.data)
		})

	},[])
	if (data===null){
		return ('loading')
	}
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<div className="row align-items-center">
								<form className="row m-0">
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">First Name *</label>
											<input type="text" className="form-control" value={data.first_name}/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">Last Name *</label>
											<input type="text" className="form-control" value={data.last_name}/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">Email ID *</label>
											<input type="text" className="form-control" value={data.email}/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">About Me *</label>
											<textarea className="form-control ht-80" value={data.about}/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<Link to='edit' className="btn btn-dark">Edit Profile</Link>
										</div>
									</div>
									
								</form>
							</div>
							{/* <!-- row --> */}
		</div>
    )
}

export default ProfileInfo
