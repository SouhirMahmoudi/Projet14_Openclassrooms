import { createSlice, PayloadAction } from '@reduxjs/toolkit'



const initialState = {
    users: [{
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: ""
    }],


}


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        createEmployee: (state, action) => {
            const newEmployee = action.payload
            console.log(newEmployee)
            state.users.push(newEmployee)
            console.log(state.users)
            localStorage.setItem("employees",state.users)
        }
    }


    /* addUserInfos: (state, action) => {
         console.log(payload)
        state.user = action.payload
        
     },
     addUser: (state, action) =>{
         state.employees.push(state.user)
     },
     deleteUser: (state, action) => {
         state = state.filter((user) => {
             return user.firstName !== action.payload;
         });
     },
 },*/
})

export default usersSlice.reducer;
export const { createEmployee } = usersSlice.actions;