import React, { useEffect, useState } from 'react';
import CategoriesHead from './categoryComponents/CategoriesHead'
import Grid4 from './categoryComponents/productlist/Grid4'
import Loading from '../../components/randomomponents/Loading'
import axiosInstance from '../../axios';
function Category() {
    const GridLoading = Loading(Grid4)
    const [appState, setAppState] = useState({
		loading: true,
		products: null,
		});
    useEffect(() => {
        axiosInstance.get('product/').then((res) => {
            const allData = res.data;
            setAppState({ loading: false, products: allData });
        });
    }, []);
    return (
        <div>
            <CategoriesHead/>
            {/* <FilterWithBreadCrumb/> */}
            {/* <Grid4 /> */}
            <GridLoading isLoading={appState.loading} products={appState.products}/>
            {/* <Grid3 /> */}
            {/* <ListView /> */}
        </div>
    )
}

export default Category
