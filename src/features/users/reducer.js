import jwt_decode from "jwt-decode";

const initialData = {
    auth:false,
    username:null
}

const userReducer = (state = initialData,action)=>{
    const token = localStorage.getItem('access_token')
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                auth:token ? true: false,
                username:jwt_decode(token).user
            }
        case 'LOGOUT':
            return {
                auth:token ? true: false,
                username:null
            }
        default:
            return state
    }
}

export default userReducer