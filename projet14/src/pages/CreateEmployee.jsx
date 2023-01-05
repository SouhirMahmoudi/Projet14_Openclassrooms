import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import data from "../data/data.json";
import Select from 'react-select';
import 'react-dropdown/style.css';
import { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../features/usersSlice.js";
import store from "../store";
import { Modal } from "modalp14-react-components"

function CreateEmployee() {

   //get usersInfos 

   const [firstName, setfirstName] = useState("");
   const [lastName, setlastName] = useState("");
   const [street, setstreet] = useState("");
   const [city, setcity] = useState("");
   const [zipCode, setzipCode] = useState("");


   const [open, setOpen] = useState(false);
   const displayModal = () => {
      setOpen(true)
   }


   const [dateSelected, updateDate] = useState(new Date());
   console.log(dateSelected)
   let formatDateBirth = new Date(dateSelected).toLocaleString().split(",")[0]
   let formatFinalDateBirth = formatDateBirth.toLocaleString().split(" ")[0]
console.log(formatFinalDateBirth)
   const [startdateSelected, updateStartDate] = useState(new Date());
   let formatstartdate = new Date(startdateSelected).toLocaleString().split(",")[0]
   let formatFinalstartdate = formatstartdate.toLocaleString().split(" ")[0]
   const [selectedDepart, setSelectedDepart] = useState();
   /*const handleChangeDepart = (event) => {
      console.log(event.target.value);
      setSelectedDepart(event.target.value);
   };*/
   const [selectedState, setSelectedState] = useState();
   /*const handleChangeState = (event) => {
      console.log(event.target.value);
     ;
   };*/
   const dispatch = useDispatch();

   console.log(useSelector(state => state.users))

   const handleChange = (e) => {
      e.preventDefault()
      const newEmployee = {
         firstName: firstName,
         lastName: lastName,
         dateOfBirth: formatFinalDateBirth,
         startDate: formatFinalstartdate,
         street: street,
         state: selectedState,
         city: city,
         zipCode: zipCode,
         department: selectedDepart
      }
      if ((firstName === "") || (lastName === "") ||
         (formatFinalDateBirth === "") || (formatFinalstartdate === "") || (street === "")
         || (selectedState === "") || (street === "") || (selectedState === "")
      ) {
         alert("Invalid fields!!")
      }
      else {
         dispatch(createEmployee(newEmployee))
         displayModal()
      }
   }
   console.log(store.getState().users)
   return (
      <div>
         <Header />
         <MainEmployee>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
               <FormItem>
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name"  value={firstName} onChange={(e) => setfirstName(e.target.value)} />
               </FormItem>
               <FormItem>
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" value={lastName} onChange={(e) => setlastName(e.target.value)} />
               </FormItem>
               <FormItem>
                  <label htmlFor="date-of-birth">Date of Birth</label>
                  <input id="date-of-birth" type="text"  value={formatFinalDateBirth} onClick={() => {
                     document.getElementsByClassName('CalenderContainerBirth')[0].style.display = "block"
                  }} />
                  <CalenderContainerBirth className="CalenderContainerBirth"> <Calendar onChange={updateDate}

                     onClickDay={(e) => {
                        document.getElementsByClassName('CalenderContainerBirth')[0].style.display = "none"
                     }
                     }
                     value={dateSelected} /> </CalenderContainerBirth>
               </FormItem>
               <FormItem>
                  <label htmlFor="start-date">Start Date</label>
                  <input id="start-date" type="text"  placeholder="" defaultValue="" value={formatFinalstartdate} onClick={() => {
                     document.getElementsByClassName('CalenderContainerstartDate')[0].style.display = "block"
                  }} />
                  <CalenderContainerStart className="CalenderContainerstartDate"> <Calendar onChange={updateStartDate}

                     onClickDay={(e) => {
                        document.getElementsByClassName('CalenderContainerstartDate')[0].style.display = "none"
                     }
                     }
                     value={dateSelected} /> </CalenderContainerStart>
               </FormItem>
               <FormItem>
                  <fieldset className="address">
                     <legend>Address</legend>

                     <label htmlFor="street">Street</label>
                     <input id="street" type="text" value={street} onChange={(e) => setstreet(e.target.value)} />

                     <label htmlFor="city">City</label>
                     <input id="city" type="text" value={city} onChange={(e) => setcity(e.target.value)} />

                     <label htmlFor="state">State</label>
                     <Select
                        name="form-field-name"
                        placeholder={data.States[0].label}
                        label={selectedState}
                        options={data.States}
                        onChange={(e) => setSelectedState(e.label)}
                     />
                     <label htmlFor="zip-code">Zip Code</label>
                     <input id="zip-code" type="number" value={zipCode} onChange={(e) => setzipCode(e.target.value)} />
                  </fieldset>
               </FormItem>
               <FormItem>
                  <label htmlFor="department">Department</label>
                  <Select
                     name="form-field-name"
                     placeholder ={data.Departments[0].label}
                     label={selectedDepart}
                     options={data.Departments}
                     onChange={(e) => setSelectedDepart(e.label)}
                  />
               </FormItem>
            </form>

            <button onClick={handleChange}>Save</button>

         </MainEmployee>

         <Modal
            openstatus={open}
            text="Employee Created!"
         />

      </div>
   )
}

const MainEmployee = styled.main`

   display:flex;
   flex-direction: column;
   align-items: center;
.address{
   display: flex;
   flex-direction: column;
}
`
const CalenderContainerBirth = styled.div`
display:none;
//position:absolute;
`
const CalenderContainerStart = styled.div`
display:none;
//position:absolute;
`
const FormItem = styled.div`
display: flex;
flex-direction: column;
margin-bottom:20px;

`
export default CreateEmployee;