import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'



function Billing() {
    const bill = useSelector((state)=>state.cart)
    return (
        <div className="col-12 col-md-12 col-lg-4">
        <div className="card mb-4 gray mfliud">
          <div className="card-body">
            <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
              <li className="list-group-item d-flex text-dark fs-sm ft-regular">
                <span>Subtotal</span> <span className="ml-auto text-dark ft-medium">₹{bill.subtotal}</span>
              </li>
              <li className="list-group-item d-flex text-dark fs-sm ft-regular">
                <span>Tax</span> <span className="ml-auto text-dark ft-medium">₹{bill.tax}</span>
              </li>
              <li className="list-group-item d-flex text-dark fs-sm ft-regular">
                <span>Total</span> <span className="ml-auto text-dark ft-medium">₹{bill.total}</span>
              </li>
              <li className="list-group-item fs-sm text-center">
                Shipping cost calculated at Checkout *
              </li>
            </ul>
          </div>
        </div>
        
        <Link to={'/checkout'} className="btn btn-block btn-dark mb-3" href="checkout.html">Proceed to Checkout</Link>
        
        <Link to={'/category'} className="btn-link text-dark ft-medium">
          <i className="ti-back-left mr-2"></i> Continue Shopping
        </Link>
    </div>
    )
}

export default Billing
