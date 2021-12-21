const initialData = {
    count: 0,
    items:[],
    subtotal:0
    // loading: false,
    // error: null
}

const cartReducer = (state = initialData, action) =>{
    switch(action.type){
        case 'UPDATE_CART':
            if(Object.keys(action.payload).length===0){
                return state = initialData
            }
            return {
                ...state,
                count:Object.keys(action.payload).length,
                items:action.payload,
                subtotal:action.payload.map((item)=>{
                                return item.product.price * item.count
                            }).reduce((acc, item)=>{
                                return acc + item
                            })
            }

        default:
            return state
    }

}



export default cartReducer