import React,{useEffect, useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import axiosInstance from '../../../axios'


function AdminUserDetail() {
    
    const [data,setData] = useState({
        loading: false,
        values:null,
    })
    const {slug} =useParams();
    useEffect(() => {
        setData({
            ...data,
            loading: true,
        })
        axiosInstance.get('/admin-api/accounts/'+slug+'/').then((res)=>{
            setData({
                ...data,
                loading: false,
                values:res.data
            })
        }).catch((err) => {
            setData({
                ...data,
                loading: false
            })
        })
    },[setData])
    const handleChange = ()=>{
        console.log('changes')
    }
    const handleUpdate = ()=>{
        console.log('changes')
    }
    if (data.loading) return 'loading'
    if (data.values === null) return 'Can\'t find any accounts'
    return (
        <section className="middle">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <div className="ord_list_head  d-flex align-items-center justify-content-between mb-4 px-3 py-3">
						<div className="olh_flex">
							<p className="m-0 p-0"><span className="text-muted">User Id:</span></p>
							<h6 className="mb-0 ft-medium">{data.values.id}</h6>
						</div>	
                        <div className="olh_flex">
                            <button type="button" class="btn btn-danger mr-3">Block</button>
                                <Link to='edit' class="btn btn-outline-warning">Edit</Link>
                        </div>	
					</div>
				</div>
            <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                    <form className="row m-0">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">First Name *</label>
                                <input type="text" disabled className="form-control" name='first_name' value={data.values.first_name}/>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Last Name *</label>
                                <input type="text" disabled className="form-control" name='last_name' value={data.values.last_name}/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">User Name *</label>
                                <input type="text" disabled className="form-control" name='last_name' value={data.values.user_name}/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Last Login *</label>
                                <input type="text" disabled className="form-control" name='last_name' value={data.values.last_login}/>
                            </div>
                        </div>
                        
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">Email ID *</label>
                                <input type="text" disabled className="form-control" name='email'  value={data.values.email}/>
                            </div>
                        </div>
                        
                        {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <label className="small text-dark ft-medium">About *</label>
                                <textarea disabled name='about' className="form-control ht-80" value={data.values.about}/>
                            </div>
                        </div> */}
                    
                        {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="form-group">
                                <button onClick={handleUpdate} type="button" className="btn btn-dark">Save Changes</button>
                            </div>
                        </div> */}
                        
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default AdminUserDetail
