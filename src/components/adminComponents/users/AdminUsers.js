import React,{useState,useEffect} from 'react'
import axiosInstance from '../../../axios'
import {Link} from 'react-router-dom'
function AdminUsers() {
    const [data,setData] = useState({
        loading: false,
        list: null
    })
    useEffect(()=>{
        setData({
            ...data,
            loading: true
        })
        axiosInstance.get('/admin-api/accounts/').then((res) => {
            setData({
                ...data,
                loading: false,
                list: res.data
            })

        }).catch((err) => {
            setData({
                ...data,
                loading: false,
            })
        })
    },[])
    if (data.loading) return 'loading'
    if (data.list === null) return 'Can\'t find any accounts'
    return (
        <section className="middle">
        <div className="container">
            <div className="row justify-content-center">
            <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">User name</th>
                        <th scope="col">First</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Last Login</th>
                        </tr>
                    </thead>
                    <tbody>
                     {data.list&&   
                     data.list.map((item) =>{
                         return (
                        <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td><Link to={item.id.toString()}>{item.email}</Link></td>
                        <td>{item.user_name}</td>
                        <td>{item.first_name}</td>
                        {
                            item.is_active?
                            <td><button type="button" class="btn btn-danger">&nbsp;&nbsp;Block&nbsp;&nbsp;</button></td>
                            :
                            <td><button type="button" class="btn btn-outline-danger">Unblock</button></td>
                        }
                        <td>{item.last_login}</td>
                        </tr>
                         )
                     })
                        
                    }
                    </tbody>
                    </table>
            </div>
        </div>
    </section>
    )
}

export default AdminUsers
