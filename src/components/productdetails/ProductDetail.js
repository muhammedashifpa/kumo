import React, { useEffect, useState } from 'react';
import BreadCrumb from '../randomomponents/BreadCrumb'
import FullView from './detailcomponents/FullView'
import SimilarProduct from './detailcomponents/SimilarProduct'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios';
import Review from './detailcomponents/Review'

function ProductDetail() {
    const { slug } = useParams();
    const [data, setData] = useState( { product: [] } );

	useEffect(() => {
		axiosInstance.get('product/'+ slug).then((res) => {
			setData({ product: res.data });
		});
	}, [setData]);
    
    return (
        <div>
            {!data.product||data.product.length==0?null:
                <FullView data={data.product}/> 
            }
            {/* <Review/> */}
        </div>
    )
}

export default ProductDetail
