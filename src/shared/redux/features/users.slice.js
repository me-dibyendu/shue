import { createSlice } from "@reduxjs/toolkit"

const initialState = {}
export const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialState},
    reducers: {
        login: (state, action)=>{
            state.value = action.payload
        },
        userType: (state, action)=>{
            state.value = action.payload
        },
    }
})
export const { login, userType } = userSlice.actions
export default userSlice.reducer