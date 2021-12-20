import jwt_decode from "jwt-decode";

const initialData = {
    auth:false,
    username:null,
    user_id:null,
}

const userReducer = (state = initialData,action)=>{
    const token = localStorage.getItem('access_token')
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                auth: true,
                username:jwt_decode(token).user,
                user_id:jwt_decode(token).user_id,
            }
        case 'LOGOUT':
            return {
                auth:false,
                username:null
            }
        default:
            return state
    }
}

export default userReducer