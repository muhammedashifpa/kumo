import React, {useState, SyntheticEvent} from 'react'
import {Link} from 'react-router-dom'
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';


function Register() {
	const navigate = useNavigate();
	const initialFormData = Object.freeze({
		firstname:'',
		lastname:'',
		email: '',
		username: '',
		password: '',
	});
	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const initialErrorData = Object.freeze({
		first_name:'',
		last_name:'',
		email:'',
		user_name:'',
		password:'',
	});
	const [errorData, updatErrorData] = useState(initialErrorData);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`accounts/register/`, {
				email: formData.email,
				first_name:formData.firstname,
				lastname:formData.lastname,
				user_name: formData.username,
				password: formData.password,
			})
			.then((res) => {
				navigate('/accounts/login');
				console.log(res);
				console.log(res.data);
			}).catch(function (error) {
				console.log(errorData)
				if (error.response) {
					const data = error.response.data
					updatErrorData({
						first_name:(data['first_name']===undefined? '':data['first_name']),
						last_name:(data['last_name']===undefined? '':data['last_name']),
						email:(data['email']===undefined? '':data['email']),
						user_name: (data['user_name']===undefined? '':data['user_name']),
						password: (data['password']===undefined? '':data['password']),
					});
				} 
			});
	};

	
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
										{errorData.first_name == '' ? "" : <span className="error_message">{errorData.first_name}</span>}
										
										<input type="text" name='firstname' className={"form-control" + (errorData.first_name == '' ? "" : " error_form")} placeholder="First Name" 
										onChange={handleChange}
										/>
									</div>
									<div className="form-group col-md-6">
										<label>Last Name</label>
										<input type="text" name='lastname' className="form-control" placeholder="Last Name"  
										onChange={handleChange}
										/>
									</div>
								</div>
								
								<div className="form-group">
									<label>Email *</label>
									{errorData.email == '' ? "" : <span className="error_message">{errorData.email}</span>}
									<input type="text" name='email' className={"form-control" + (errorData.email == '' ? "" : " error_form")} placeholder="Email*"  
									onChange={handleChange}
									/>
								</div>

								<div className="form-group">
									<label>User Name *</label>
									{errorData.user_name == '' ? "" : <span className="error_message">{errorData.user_name}</span>}
									<input type="text" name='username' className={"form-control" + (errorData.user_name == '' ? "" : " error_form")} placeholder="Username*"  
									onChange={handleChange}
									/>
								</div>
								
								<div className="row">
									<div className="form-group col-md-6">
										<label>Password *</label>
										{errorData.password == '' ? "" : <span className="error_message">{errorData.password}</span>}
										<input type="password" name='password' className={"form-control" + (errorData.user_name == '' ? "" : " error_form")} placeholder="Password*"  
										onChange={handleChange}
										/>
									</div>
									
									<div className="form-group col-md-6">
										<label>Confirm Password *</label>
										<input type="password" className="form-control" placeholder="Confirm Password*"  
										onChange={handleChange}
										/>
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
									<button type="submit" className="btn btn-md full-width bg-dark text-light fs-md ft-medium" onClick={handleSubmit}>Create An Account</button>
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
