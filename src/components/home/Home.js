import React from 'react'
import Hero from './homecomponents/Hero'
import CategoryStyle from './homecomponents/CategoryStyle'
import ProductsLists from './homecomponents/ProductsLists'
import CustomerReview from './homecomponents/CustomerReview'
import HomeBlog from './homecomponents/HomeBlog'
import HomeInstagram from './homecomponents/HomeInstagram'
import Slicker from './homecomponents/Slicker'
import GridItems from '../category/GridItems'


function Home() {
    return (
        <div>
            {/* <Hero/> */}
            <Slicker />
            <CategoryStyle />
            <GridItems/>
            {/* <ProductsLists /> */}
            {/* <CustomerReview /> */}
            {/* <HomeBlog /> */}
            {/* <HomeInstagram /> */}
        </div>
    )
}

export default Home
