import React from 'react'
import ProductList from './cartcomponents/ProductList'
import BreadCrumb from './../randomomponents/BreadCrumb'

function Cart() {
    return (
        <div>
            <BreadCrumb />
            <ProductList />            
        </div>
    )
}

export default Cart
