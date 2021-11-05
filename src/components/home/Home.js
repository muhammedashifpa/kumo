import React from 'react'
import Hero from './homecomponents/Hero'
import CategoryStyle from './homecomponents/CategoryStyle'
import ProductsLists from './homecomponents/ProductsLists'
import CustomerReview from './homecomponents/CustomerReview'
import HomeBlog from './homecomponents/HomeBlog'
import HomeInstagram from './homecomponents/HomeInstagram'


function Home() {
    return (
        <div>
            <Hero/>
            <CategoryStyle />
            <ProductsLists />
            <CustomerReview />
            <HomeBlog />
            <HomeInstagram />
        </div>
    )
}

export default Home
