import axiosInstance from '../../axios'
import {setSnackbar} from '../ducks/snackbar'
 




export const fetchCart =()=>{
    console.log('Fetching Cart working...')
    return async(dispatch,getState) =>{
        try{
            const response = await axiosInstance.get('cart/')
            console.log(response.date,'cart')
            dispatch({
                type: 'UPDATE_CART',
                payload : response.data
            })

        }catch(error){
            console.log(error)
        }
    }
}

export const addCart = (p_id,u_id,size,count) =>{
    return async(dispatch,getState) => {
        console.log('add cart working','p_id : ', p_id,'u_id : ', u_id,'size : ',size,'count : ',count)
        try{
            const response = await axiosInstance.post('cart/',{
                product:p_id,
                user:u_id,
                size:size,
                count:count,
            })
            if(response.data['message']=='success'){
                console.log('successfully added to the cart')
                dispatch(
                    setSnackbar(
                      true,
                      "success",
                      "Added to the cart!"
                    )
                  )
                dispatch(fetchCart())
                
            }
        }catch(err){
            console.log('add cart error ***********',err)
            dispatch(
                setSnackbar(
                  true,
                  "error",
                  "Sorry, somthing wrong"
                )
              )
        }
    }
} 

export const removeCart = (c_id) =>{
    return async(dispatch,getState) => {
    console.log('remove cart is working for : ',c_id)
        try{
            const response = await axiosInstance.delete('cart/'+c_id+'/')
            if(response.data['message']=='delete success'){
                console.log('delete success')
                dispatch(
                    setSnackbar(
                      true,
                      "success",
                      "Item removed from cart!"
                    )
                  )
                dispatch(fetchCart())
            }
        }catch(err){
            console.log('remove cart error error ***********',err)
            dispatch(
                setSnackbar(
                  true,
                  "error",
                  "Sorry, somthing wrong"
                )
              )
        }
    }
}
 
export const patchCart = (c_id,count) =>{
    console.log(c_id,count)
    return async(dispatch,getState)=>{
        try{
            const response = await axiosInstance.patch('cart/'+c_id+'/',{count:count})
            if(response.data['message']=='success'){
                console.log('partial upadate success')
                dispatch(
                    setSnackbar(
                      true,
                      "success",
                      "Item updated!"
                    )
                  )
                dispatch(fetchCart())
            }
        }
        catch(err){
            console.log('error on update ***********',err)
            dispatch(
                setSnackbar(
                  true,
                  "error",
                  "Sorry, somthing wrong"
                )
              )
        }
    }
}