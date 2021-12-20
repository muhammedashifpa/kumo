import axiosInstance from '../../axios'



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
                dispatch(fetchFav())
            }
        }catch(err){
            console.log('add fav error ***********',err)
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
                dispatch(fetchFav())
            }
        }catch(err){
            console.log('add fav error ***********',err)
        }
    }
}    