import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    users: [{
        firstName: "Tony",
        lastName: "Stark",
        dateOfBirth: "01/11/1980",
        startDate: "12/12/2021",
        street: "alaska",
        city: "alaska",
        state: "alaska",
        zipCode: "22222",
        department: "Sales"
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
            localStorage.setItem("employees",JSON.stringify(state.users))
            console.log(state.users,JSON.stringify(state.users) )
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