import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import Header from '../components/Header';
import { useState } from 'react';

export default function ListEmployee(){
    //const [searchValue, setsearchValue] = useState("");
 const employees = localStorage.getItem("employees");
 console.log(employees)
 //const employeesSorted = employees.filter((user) => {
   // return (user.firstName !==  searchValue &&  user.lastName !==  searchValue)})
    return (

        <div>
            <Header/>
           
            <Table 
             rowHeight={50}
             rowsCount={100}
             width={5000}
             height={5050}
             headerHeight={50}

header={<Cell>Col 1</Cell>}
columnKey="firstName"
cell={({ rowIndex, columnKey, ...props }) =>
  <Cell {...props}>
    {employees[rowIndex][columnKey]}
  </Cell>}

            />
        </div>
    )
}
