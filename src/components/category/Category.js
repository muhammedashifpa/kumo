import React from 'react'
import CategoriesHead from './categoryComponents/CategoriesHead'
import FilterWithBreadCrumb from './categoryComponents/FilterWithBreadCrumb'
import Grid4 from './categoryComponents/productlist/Grid4'
import Grid3 from './categoryComponents/productlist/Grid3'
import ListView from './categoryComponents/productlist/ListView'
function Category() {
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

export default Category
