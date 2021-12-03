import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

// const initialStateValue = {user:"",auth:false};

const authStateValue = ()=>{
    const token = localStorage.getItem('access_token')
    const IsAuthenticated = token ? true: false;
    return({
        auth : IsAuthenticated,
        username : IsAuthenticated ? jwt_decode(token).user: null
    })
};

export const userSclice = createSlice({
    name: 'user',
    initialState: {value: authStateValue() },
    reducers:{
        auth:(state) =>{
            state.value = authStateValue();
        }
    },

})
export const {auth} = userSclice.actions

export default userSclice.reducer