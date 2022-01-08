import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axiosInstance from '../../../axios'



function Orders() {
    const [data,setData] = useState({
        loading: false,
        list: null
    })
    useEffect(()=>{
        setData({
            ...data,
            loading: true
        })
        axiosInstance.get('/admin-api/orders/').then((res) => {
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
                <th scope="col">User name</th>
                <th scope="col">Order date</th>
                <th scope="col">Order amount</th>
                <th scope="col">Payment</th>
                <th scope="col">Order payment Id</th>
                </tr>
            </thead>
            <tbody>
             {data.list&&   
             data.list.map((item) =>{
                 return (
                <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.user.first_name}</td>
                <td>{item.order_date}</td>
                <td>₹{item.order_amount}</td>
                {
                    item.isPaid?
                    <td><div class="delv_status"><span class="ft-medium small text-success bg-light-success rounded px-3 py-1">Success</span></div></td>
                    :
                    <td><div class="delv_status"><span class="ft-medium small text-danger bg-light-danger rounded px-3 py-1">Pending</span></div></td>
                }
                <td>{item.order_payment_id}</td>

                </tr>
                 )
             })
                
            }
            </tbody>
            </table>
        
    </div>
    )
}

export default Orders
