import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: '', password: '', errorUname: '', errorPwd: '' }

const credentialsReducer = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        addUsername: (state, action) => {
            return { ...state, userName: action.payload.userName }
        },
        addPassword: (state, action) => {
            return { ...state, password: action.payload.password }
        },
        addErrorUsername: (state, action) => {
            return { ...state, errorUname: action.payload.errorUname }
        },
        addErrorPassword: (state, action) => {
            return { ...state, errorPwd: action.payload.errorPwd }
        },
    }

})

export const { addUsername, addPassword, addErrorUsername, addErrorPassword } = credentialsReducer.actions
export const credentials = credentialsReducer.reducer