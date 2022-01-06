import React,{useState,useEffect} from 'react'
import Loading from '../../components/randomomponents/Loading'
import {useParams} from 'react-router-dom'
import axiosInstance from '../../axios'
import Grid4 from './categoryComponents/productlist/Grid4'


function GridItems() {
    console.log('Component render')
    const {slug} = useParams();
    const GridLoading = Loading(Grid4)
    const [appState, setAppState] = useState({
		loading: true,
		products: null,
		});
    useEffect(() => {
        axiosInstance.get('/product/?'+slug).then((res) => {
            const allData = res.data;
            setAppState({ loading: false, products: allData });
        }).catch((err) => {
            setAppState({ loading: false, products:null})
        });
    }, [slug]);
    return (
        <div>
            <GridLoading isLoading={appState.loading} products={appState.products}/>
        </div>
    )
}

export default GridItems
