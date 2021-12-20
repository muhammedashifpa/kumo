import axiosInstance from '../../axios'
import {fetchFav} from '../../features/favourite/action'


const initialData = {
    count: 0,
    items:[],
    subtotal:0
    // loading: false,
    // error: null
}

const favouriteReducer = (state = initialData, action) =>{
    switch(action.type){
        case 'UPDATE_FAV':
            if(Object.keys(action.payload).length===0){
                return state = initialData
            }
            return {
                ...state,
                count:Object.keys(action.payload).length,
                items:action.payload,
                subtotal:action.payload.map((item)=>{
                                return item.product.price
                            }).reduce((acc, item)=>{
                                return acc + item
                            })
            }

        default:
            return state
    }

}

export default favouriteReducer