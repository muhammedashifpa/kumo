import axiosInstance from '../../axios'
import {setSnackbar} from '../ducks/snackbar'



export const fetchFav =()=>{
    return async(dispatch,getState) =>{
        try{
            const response = await axiosInstance.get('favourite/')
            // console.log(response.data)
            dispatch({
                type: 'UPDATE_FAV',
                payload : response.data
            })

        }catch(error){
            console.log(error)
        }
    }
}
   
export const addFav = (p_id,u_id) =>{
    return async(dispatch,getState) => {
        console.log('add fav working',p_id,u_id)
        try{
            const response = await axiosInstance.post('favourite/',{
                product:p_id,
                user:u_id
            })
            if(response.data['message']=='success'){
                console.log('success')
                dispatch(
                    setSnackbar(
                      true,
                      "success",
                      "Item Added to favourites!"
                    )
                  )
                dispatch(fetchFav())
            }
        }catch(err){
            console.log('add fav error ***********',err)
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
export const removeFav = (f_id) =>{
    return async(dispatch,getState) => {
    console.log('remove fav is working',f_id)
        try{
            const response = await axiosInstance.delete('favourite/'+f_id+'/')
            if(response.data['message']=='delete success'){
                console.log('delete success')
                dispatch(
                    setSnackbar(
                      true,
                      "success",
                      "Item removed from favourites!"
                    )
                  )
                dispatch(fetchFav())
            }
        }catch(err){
            console.log('add fav error ***********',err)
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