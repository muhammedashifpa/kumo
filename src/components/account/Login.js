import React, {useState, useEffect} from 'react'
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import jwt_decode from "jwt-decode";



function Login(props) {
const navigate = useNavigate();
	useEffect(() => {
		if (props.authData.auth){
			navigate('/');
			console.log('navigated to home')
		}
	})
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const initialErrorData = Object.freeze({
		email:'',
		password:'',
	});
	const [errorData, updatErrorData] = useState(initialErrorData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		console.log('submission')
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`accounts/token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				navigate('/');
				const token = res.data.access;
				const user = jwt_decode(token);
				console.log(user);
				props.authUpdate()

			}).catch(function (error) {
				if (error.response) {
					const data = error.response.data
				console.log(data)
					updatErrorData({
						email:(data['email']===undefined? '':data['email']),
						password: (data['detail']===undefined? '':data['detail']),
					});
				} 
			});
	};


	
    return (
                <div className="container my-5">
					<div className="row align-items-start justify-content-center">					
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="text-center mb-4" >
                                <h2 className="m-0 ft-regular">Login</h2>
                            </div>
							<form className="border p-3 rounded">				
								<div className="form-group">
									<label>Email *</label>
									{errorData.email == '' ? "" : <span className="error_message">{errorData.email}</span>}
									<input type="text" onChange={handleChange} name='email' className="form-control" placeholder="Username*"/>
								</div>
								
								<div className="form-group">
									<label>Password *</label>
									{errorData.password == '' ? "" : <span className="error_message">{errorData.password}</span>}
									<input type="password" onChange={handleChange} name='password' className="form-control" placeholder="Password*"/>
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
									<button type="submit" onClick={handleSubmit} className="btn btn-md full-width bg-dark text-light fs-md ft-medium">Login</button>
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
