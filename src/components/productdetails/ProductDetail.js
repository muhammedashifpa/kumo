import React, { useEffect, useState } from 'react';
import BreadCrumb from '../randomomponents/BreadCrumb'
import FullView from './detailcomponents/FullView'
import FullView_copy from './detailcomponents/FullView_copy'
import SimilarProduct from './detailcomponents/SimilarProduct'
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios';

function ProductDetail() {
    const { slug } = useParams();
    const [data, setData] = useState( { product: [] } );

	useEffect(() => {
		axiosInstance.get('product/'+ slug).then((res) => {
			setData({ product: res.data });
			// console.log(data.product);
		});
	}, [setData]);
    // console.log(data.product.category)
    
    return (
        <div>
            <BreadCrumb/>
            {!data.product||data.product.length==0?null:
                <FullView data={data.product}/> 
            }
            {/* <SimilarProduct/> */}
            {/* <FullView_copy/> */}
        </div>
    )
}

export default ProductDetail
