const initialData = {
    product: null,
}


const ProductViewModalReducer = (state = initialData, action) =>{
    switch(action.type){
        case 'OPEN_VIEW_MODEL':
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state
    }
}

export default ProductViewModalReducer
