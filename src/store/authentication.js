import { createSlice } from "@reduxjs/toolkit";

const Authenticate = createSlice({
    name: 'Authenticate',
    initialState : {
        userName: null,
        photoURL: null,
        emailAddress: null,
        token: null
    },
    reducers : {
        LOGUSERIN: (state, action) => {
            state.userName = action.payload.user.name;
            state.photoURL = action.payload.user.photo;
            state.emailAddress = action.payload.user.emailAddress;
            
            state.token = action.payload.token;
            // console.log(action.payload.user.photo);
        },

        LOGUSEROUT: (state, action) => {
            state.userName = null;
            state.photoURL = null;
            state.emailAddress = null;
            state.token = null;
            // console.log(state.token);
        }

    }
});

export default Authenticate.reducer;

export const { LOGUSERIN, LOGUSEROUT } = Authenticate.actions;