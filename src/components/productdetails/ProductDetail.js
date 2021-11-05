import React from 'react'
import BreadCrumb from '../randomomponents/BreadCrumb'
import FullView from './detailcomponents/FullView'
import SimilarProduct from './detailcomponents/SimilarProduct'

function ProductDetail() {
    return (
        <div>
            <BreadCrumb/>
            <FullView/>
            <SimilarProduct/>
        </div>
    )
}

export default ProductDetail
