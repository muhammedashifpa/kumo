// import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'
import axiosInstance from '../../axios';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login} from '../../features/users/action'
import {fetchFav} from '../../features/favourite/action'
import { fetchCart } from '../../features/cart/action';


function closeDialog() {
	document.getElementById("login").click(); // Click on the checkbox
  }

function LogInModal(props) {
    const dispatch = useDispatch()

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
				dispatch(login())
				dispatch(fetchFav())
				dispatch(fetchCart())
				closeDialog()

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
									<label>Email *</label>
									{errorData.email == '' ? "" : <span className="error_message">{errorData.email}</span>}

									<input type="text" name='email' onChange={handleChange} className="form-control" placeholder="Username*"/>
								</div>
								
								<div className="form-group">
									<label>Password *</label>
									{errorData.password == '' ? "" : <span className="error_message">{errorData.password}</span>}

									<input type="password" name='password' onChange={handleChange} className="form-control" placeholder="Password*"/>
								</div>
								
								<div className="form-group">
									<div className="d-flex align-items-center justify-content-between">
										<div className="flex-1">
											<input id="ddd" className="checkbox-custom" name="dd" type="checkbox"/>
											<label htmlFor="ddd" className="checkbox-custom-label">Remember Me</label>
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
									<p className="extra">Not a member?<Link to='/accounts/register' onClick={closeDialog}  className="text-dark"> Register</Link></p>
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
