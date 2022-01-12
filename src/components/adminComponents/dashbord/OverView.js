import React,{useState,useEffect} from 'react'
import Chart from './Chart'
import axiosInstance from '../../../axios'
import { data } from 'jquery'


function OverView() {
    const[order,setOrder] = useState({
        loading: false,
        data: null,
    })
    const[user,setUser] = useState({
        loading: false,
        data: null,
    })
    useEffect(()=>{
        setOrder({
            ...order,
            loading:true
        })
        setUser({
            ...user,
            loading:true
        })
        axiosInstance.get('admin-api/order-detail').then((res) => {
            console.table(res.data)
            setOrder({
                ...order,
                loading: false,
                data:res.data
            })
        }).catch((err) => {
            setOrder({
                ...order,
                loading: false,
            })
            console.error(err)
        })
        axiosInstance.get('admin-api/user-detail').then((res) => {
            console.table(res.data)
            setUser({
                ...user,
                loading:false,
                data:res.data
            })
        }).catch((err) => {
            setUser({
                ...user,
                loading:false,
            })
            console.error(err)
        })
    },[])
      
    return (
        <div class="col-12 col-md-12 col-lg-8 col-xl-8">	
            <div className="row justify-content-center justify-content-between">
                <div class="col-12 col-md-12 col-lg-10 col-xl-10" style={{ height: 300 }}>
                    <h1 className="mb-3">New Orders</h1>
                    <Chart data={order}/>
                </div>
                <div class="col-12 col-md-12 col-lg-10 col-xl-10" style={{ height: 300 }}>
                    <h1 className="mb-3">New Users</h1>
                    <Chart data={user}/>
                </div>
            </div>
        </div>
    )
}

export default OverView
