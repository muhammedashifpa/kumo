import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axiosInstance from '../../../axios'


function Products() {
    const navigate = useNavigate()
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
        <div class="col-12 col-md-12 col-lg-8 col-xl-8">											
        <table class="table table-hover">
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
                    <td>{item.product_name}</td>
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
    )
}

export default Products
