import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import data from "../data/data.json";
import Select from 'react-select';
import 'react-dropdown/style.css';
import { useState } from "react";

function CreateEmployee() {

   const [selectedDepart, setSelectedDepart] = useState(data.Departments[0].label);
   /*const handleChangeDepart = (event) => {
      console.log(event.target.value);
      setSelectedDepart(event.target.value);
   };*/
   const [selectedState, setSelectedState] = useState(data.States[0].label);
   /*const handleChangeState = (event) => {
      console.log(event.target.value);
     ;
   };*/
   console.log(selectedDepart, selectedState)
   return (
      <MainEmployee>
         <Header />

         <h2>Create Employee</h2>
         <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="text" />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="text" />

            <fieldset className="address">
               <legend>Address</legend>

               <label htmlFor="street">Street</label>
               <input id="street" type="text" />

               <label htmlFor="city">City</label>
               <input id="city" type="text" />

               <label htmlFor="state">State</label>
               <Select
                  name="form-field-name"
                  label= {selectedState}
                  options={data.States}
                  onChange={(e)=>setSelectedState(e.label)}
               />
               <label htmlFor="zip-code">Zip Code</label>
               <input id="zip-code" type="number" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select
                  name="form-field-name"
                  label={selectedDepart}
                  options={data.Departments}
                  onChange={(e)=>setSelectedDepart(e.label)}
               />
         </form>


         <div id="confirmation" className="modal">Employee Created!</div>
      </MainEmployee>

   )
}

const MainEmployee = styled.main``

export default CreateEmployee;