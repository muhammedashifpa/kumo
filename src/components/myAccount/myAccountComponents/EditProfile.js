import React,{useEffect,useState} from 'react'
import axiosInstance from '../../../axios'
import {useDispatch} from 'react-redux'
import {setSnackbar} from '../../../features/ducks/snackbar'
import { useNavigate } from 'react-router-dom';



function EditProfile() {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const [data,updateData] = useState(null)
	useEffect(() => {
		axiosInstance.get('accounts/user').then((res) => {
			console.log(res.data)
			updateData(res.data)
		})

	},[])
	if (data===null){
		return ('loading')
	}
	const handleChange = (event)=>{
		updateData({
			[event.target.name]: event.target.value

		 })

	}
	const handleUpdate = ()=>{
		console.log('hello world')
		axiosInstance.patch('accounts/user/',{...data}).then((res) => {
			if(res.data['message']=='success'){
                console.log('success')
                dispatch(
                    setSnackbar(
                      true,
                      "success",
                      "Updated successfull!"
                    )
                  )
				navigate(-1)
				}

		}).catch((error)=>{
			dispatch(
                setSnackbar(
                  true,
                  "error",
                  "Sorry, somthing wrong"
                )
              )
		})
	}
    return (
        <div className="col-12 col-md-12 col-lg-8 col-xl-8">
							{/* <!-- row --> */}
							<div className="row align-items-center">
								<form className="row m-0">
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">First Name *</label>
											<input type="text" onChange={handleChange} className="form-control" name='first_name' value={data.first_name}/>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">Last Name *</label>
											<input type="text" onChange={handleChange} className="form-control" name='last_name' value={data.last_name}/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">Email ID *</label>
											<input type="text" onChange={handleChange} className="form-control" name='email'  value={data.email}/>
										</div>
									</div>
									
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="form-group">
											<label className="small text-dark ft-medium">About Me *</label>
											<textarea onChange={handleChange} name='about' className="form-control ht-80" value={data.about}/>
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
											<button onClick={handleUpdate} type="button" className="btn btn-dark">Save Changes</button>
										</div>
									</div>
									
								</form>
							</div>
							{/* <!-- row --> */}
		</div>
    )
}

export default EditProfile
