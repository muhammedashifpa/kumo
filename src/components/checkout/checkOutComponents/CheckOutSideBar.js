import React,{useEffect, useState} from 'react'
import axiosInstance from '../../../axios'
import {useDispatch} from 'react-redux'
import {setSnackbar} from '../../../features/ducks/snackbar'
import RazorPayment from './RazorPayment'

function CheckOutSideBar() {
  const dispatch = useDispatch()
  const [data,setData] = useState(null)
  const [coupon,setCoupon] = useState(null)
  const [update,setUpdate] = useState(false)
  const handleCoupon = (e)=>{
    setCoupon(e.target.value)
  }
  useEffect(() => {
    axiosInstance.get('/cart/checkout-cart/').then((res) => {
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[update])
  const fetchCoupon = (e) => {
    e.preventDefault()
    setData(null)
    axiosInstance.post('/cart/checkout-cart/',{'coupon':coupon}).then((res) => {
      setData(res.data)
      dispatch(
        setSnackbar(
          true,
          "success",
          "Coupon Applied"
        )
      )
    }).catch((err)=>{
      setUpdate((prevState)=>!prevState)
      dispatch(
        setSnackbar(
          true,
          "error",
          "Sorry, Invalid Coupon"
        )
      )
    })
  }




    if (data === null || data.length === 0) return (
      <div>loading...</div>
    )
    return (
        <div className="col-12 col-lg-4 col-md-12">
        <div className="d-block mb-3">
            <h5 className="mb-4">Order Items ({data.items.length})</h5>
            <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x mb-4">
                {
                  data.items.map((item)=>{
                    return(
                        <li className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    {/* <!-- Image --> */}
                                    <a href="product.html"><img src={item.product.images[0].image} alt="..." className="img-fluid" /></a>
                                </div>
                                <div className="col d-flex align-items-center">
                                    <div className="cart_single_caption pl-2">
                                        <h4 className="product_title fs-md ft-medium mb-1 lh-1">{item.product.product_name}</h4>
                                        <p className="mb-1 lh-1"><span className="text-dark">Size: {item.size}</span></p>
                                        <p className="mb-3 lh-1"><span className="text-dark">Count: {item.count}</span></p>
                                        <h4 className="fs-md ft-medium mb-3 lh-1">₹{item.product.offer_price}</h4>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                  })
                }

            </ul>
        </div>
        
        <div className="card mb-4 gray">
          <div className="card-body">
            <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
              <li className="list-group-item d-flex text-dark fs-sm ft-regular">
                <span>Subtotal</span> <span className="ml-auto text-dark ft-medium">₹{data.sub_total}</span>
              </li>
              <li className="list-group-item d-flex text-dark fs-sm ft-regular">
                <span>Tax</span> <span className="ml-auto text-dark ft-medium">₹{data.tax}</span>
              </li>
              <li className="list-group-item d-flex text-dark fs-sm ft-regular">
                <span>Coupon Discount</span> <span className="ml-auto text-dark ft-medium">₹{data.coupon_discount}</span>
              </li>
              <li className="list-group-item d-flex text-dark fs-sm ft-regular">
                <span>Shipping Charge</span> <span className="ml-auto text-dark ft-medium">{data.shipping_charge===0?'free':'₹'+data.shipping_charge}</span>
              </li>
              <li className="list-group-item d-flex text-dark fs-sm ft-regular">
                <span>Total</span> <span className="ml-auto text-dark ft-medium">₹{data.total}</span>
              </li>
            </ul>
          </div>
        </div>
          <form className="mb-7 mb-md-4">
            <label className="fs-sm ft-medium text-dark">Coupon code:</label>
            <div className="row form-row">
              <div className="col">
                <input className="form-control" onChange={handleCoupon} type="text" placeholder="Enter coupon code*" />
              </div>
              <div className="col-auto">
                <button onClick={fetchCoupon} className="btn btn-dark" type="submit">Apply</button>
              </div>
            </div>
          </form>
          <RazorPayment total={data.total} items={data.items}/>
    </div>
    )
}

export default CheckOutSideBar
