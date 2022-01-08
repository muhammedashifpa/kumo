import React ,{useEffect, useState} from 'react'
import axiosInstance from '../../../axios'

function Accounts() {
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
            <div class="col-12 col-md-12 col-lg-8 col-xl-8">											
                <table class="table table-hover">
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
                        <td>{item.email}</td>
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
    )
}

export default Accounts
