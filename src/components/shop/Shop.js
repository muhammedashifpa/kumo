import React from 'react'
import CategoriesHead from './shopcomponents/CategoriesHead'
import FilterWithBreadCrumb from './shopcomponents/FilterWithBreadCrumb'
import Grid4 from './shopcomponents/productlist/Grid4'
import Grid3 from './shopcomponents/productlist/Grid3'
import ListView from './shopcomponents/productlist/ListView'
function Shop() {
    return (
        <div>
            <CategoriesHead/>
            <FilterWithBreadCrumb/>
            <Grid4 />
            <Grid3 />
            <ListView />
        </div>
    )
}

export default Shop
