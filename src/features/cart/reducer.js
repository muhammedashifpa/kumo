const initialData = {
    count: 0,
    items:[],
    subtotal:0,
    tax:0,
    total:0,
    // loading: false,
    // error: null
}

const cartReducer = (state = initialData, action) =>{
    // console.log(...state)
    switch(action.type){
        case 'UPDATE_CART':
            if(Object.keys(action.payload).length===0){
                return state = initialData
            }
            return {
                ...state,
                count:action.payload.map((item) => {
                    return item.count
                }).reduce((acc, item) =>{
                    return acc + item
                }),
                items:action.payload,
                subtotal:action.payload.map((item)=>{
                                return item.product.price * item.count
                            }).reduce((acc, item)=>{
                                return acc + item
                            }),

                tax:((action.payload.map((item)=>{
                            return item.product.price * item.count
                        }).reduce((acc, item)=>{
                            return acc + item
                        })/100)*10).toFixed(2),
                        
                        
                total:((action.payload.map((item)=>{
                                return item.product.price * item.count
                            }).reduce((acc, item)=>{
                                return acc + item
                            })/100)*10)+(action.payload.map((item)=>{
                                return item.product.price * item.count
                            }).reduce((acc, item)=>{
                                return acc + item
                            })),
            }

        default:
            return state
    }

}



export default cartReducer