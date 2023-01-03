import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import logo from "../assets/logoHrnet.png";
import Select from 'react-select';


export default function ListEmployee() {
  const [searchValue, setsearchValue] = useState("");
  const NumberShow = [{ "label": "10", "value": "10" }, { "label": "25", "value": "25" }, { "label": "50", "value": "50" }, { "label": "100", "value": "100" },
  ]
  const [selectedNumberShow, setNumberShow] = useState(NumberShow[0].label);
  let searValueLowerCase = searchValue.toLowerCase();
  const columns = [
    {
      name: 'FirstName',
      selector: row => row.firstName,
    },
    {
      name: 'LastName',
      selector: row => row.lastName,
    },
    {
      name: 'DateOfBirth',
      selector: row => row.dateOfBirth,
    },
    {
      name: 'StartDate',
      selector: row => row.startDate,
    },
    {
      name: 'Street',
      selector: row => row.street,
    },
    {
      name: 'City',
      selector: row => row.city,
    },

    {
      name: 'State',
      selector: row => row.state,
    },
    {
      name: 'ZipCode',
      selector: row => row.zipCode,
    },
    {
      name: 'Department',
      selector: row => row.department,
    }
  ];

  const data = JSON.parse(localStorage.getItem("employees"));
  console.log(data)
  let dataSorted = [];
  if (searchValue !== "") {
    dataSorted = data.filter((user) => {
      return ((user.firstName.toLowerCase() === searValueLowerCase) || (user.lastName.toLowerCase() === searValueLowerCase) || (user.dateOfBirth === searValueLowerCase) ||
        (user.startDate === searValueLowerCase) || (user.street.toLowerCase() === searValueLowerCase) || (user.city.toLowerCase() === searValueLowerCase) ||
        (user.state.toLowerCase() === searValueLowerCase) || (user.zipCode === searValueLowerCase) || (user.department.toLowerCase() === searValueLowerCase)
      )
    })
  }
  // const deletestorage = () =>{ localStorage.clear()}
  //   <button onClick={deletestorage}/>
  return (
    <div>
      {searchValue === "" ? (
        <main>
          <NavLink to="/">
            <img src={logo} alt="Wealth Health Logo" />
            <h1>Wealth Health</h1>
          </NavLink>
          <h1>Current Employees</h1>
          <label htmlFor="state">Show</label>
          <Select
            name="state"
            defaultInputValue={selectedNumberShow}
            label={selectedNumberShow}
            options={NumberShow}
            onChange={(e) => setNumberShow(e.label)}
          /> <p> Entries</p>
          <input type="search" onChange={(e) => setsearchValue(e.target.value)} />
          <DataTable
            columns={columns}
            data={data}
          />
        </main>) : (
        <main>
          <Header />
          <input type="search" onChange={(e) => setsearchValue(e.target.value)} />
          <DataTable
            columns={columns}
            data={dataSorted}
          />
        </main>

      )
      }
    </div>
  )

  /*  return (

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
    {employees[columnKey][columnKey.value]}
  </Cell>}

            />
        </div>
    )*/


}
