import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axiosInstance from '../../../axios'


function AdminProducts() {
    const [data,setData] = useState({
        loading: false,
        list: null
    })
    useEffect(()=>{
        setData({
            ...data,
            loading: true
        })
        axiosInstance.get('/admin-api/products/').then((res) => {
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
                    <th scope="col">Preview</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Price</th>
                    <th scope="col">Offer Price</th>
                    <th scope="col">In Stock</th>
                </tr>
            </thead>
            <tbody>
            {data.list&&   
             data.list.map((item) =>{
                 return (
                <tr key={item.id}>
                    <th scope="row">
                        <div className="cart_selected_single_thumb">
                            <a href="#"><img src={item.images[0].image} width="75" className="img-fluid rounded" alt="" /></a>
                        </div>
                    </th>
                    <td><Link to={item.id.toString()}>{item.product_name}</Link></td>
                    <td>{item.category}</td>
                    <td>{item.gender}</td>
                    <td>{item.price}</td>
                    <td>{item.offer_price}</td>
                    <td>{item.stock}</td>
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

export default AdminProducts
