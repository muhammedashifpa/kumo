import React from 'react'
import ProductViewModal from './modalComponents/ProductViewModal'
import LogInModal from './modalComponents/LogInModal'
import Search from './modalComponents/Search'
import Wishlist from './modalComponents/Wishlist'
import SideCart from './modalComponents/SideCart'


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
