import React from 'react'
import ProductViewModal from './randomomponents/ProductViewModal'
import LogInModal from './randomomponents/LogInModal'
import Search from './randomomponents/Search'
import Wishlist from './randomomponents/Wishlist'
import SideCart from './randomomponents/SideCart'


function Modals() {
    return (
        <div>
            <ProductViewModal />
            <LogInModal />
            <Search />
            <Wishlist />
            <SideCart />
        </div>
    )
}

export default Modals
