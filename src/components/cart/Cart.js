import React from 'react'
import ProductList from './cartcomponents/ProductList'
import BreadCrumb from './../randomomponents/BreadCrumb'
import Billing from './cartcomponents/Billing'
function Cart() {
    return (
        <div>
            <BreadCrumb />
            <ProductList />        
        </div>
    )
}

export default Cart
