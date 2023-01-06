import React from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Select from 'react-select';

/**
 * React component to create the list employee page
 * @returns { React.ReactElement } employee page component
 */

export default function ListEmployee() {

  // define value of show's dropdown
  const NumberShow = [{ "label": "10", "value": "10" }, { "label": "25", "value": "25" }, { "label": "50", "value": "50" }, { "label": "100", "value": "100" },
  ]
  // select value of show's dropdown
  const [selectedNumberShow, setNumberShow] = useState(NumberShow[0].label);

  //define the titles of data table's columns
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
      name: 'StartDate',
      selector: row => row.startDate,
    },
    {
      name: 'Department',
      selector: row => row.department,
    },
    {
      name: 'DateOfBirth',
      selector: row => row.dateOfBirth,
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
    }
  ];
  // format list employees 
  let data = localStorage.getItem("employees");
  if (data) {
    data = JSON.parse(data)
  }
  else {
    data = []
  }
  console.log(data)
  // search bar 
  //get search value
  const [searchValue, setsearchValue] = useState("");
  //change it to loweCase
  let searValueLowerCase = searchValue.toLowerCase();
  //sort data and return only data includes search value
  let dataSorted = [];
  if (searchValue !== "") {
    dataSorted = data.filter((user) => {
      return ((user.firstName.toLowerCase().includes(searValueLowerCase)) || (user.lastName.toLowerCase().includes(searValueLowerCase)) || (user.dateOfBirth.includes(searValueLowerCase)) ||
        (user.startDate.includes(searValueLowerCase)) || (user.street.toLowerCase().includes(searValueLowerCase)) || (user.city.toLowerCase().includes(searValueLowerCase)) ||
        (user.state.toLowerCase().includes(searValueLowerCase)) || (user.zipCode.includes(searValueLowerCase)) || (user.department.toLowerCase().includes(searValueLowerCase))
      )
    })
  }
  //to clear localstorage we can add this two lignes
  // const deletestorage = () =>{ localStorage.clear()}
  //   <button onClick={deletestorage}/>
  return (
    <div>
      {searchValue === "" ? (
        <PageEmployees>
          <NavLink className="logo" to="/">
            <h1>HRnet</h1>
          </NavLink>
          <h2>Current Employees</h2>
          <Container>
            <ContainerShow>
              <label htmlFor="state">Show</label>
              <Select
                name="state"
                placeholder={selectedNumberShow}
                label={selectedNumberShow}
                options={NumberShow}
                onChange={(e) => setNumberShow(e.label)}
              /> <p>entries</p>
            </ContainerShow>
            <ContainerSearch>
              <label htmlFor="search">Search:</label>
              <input name="search" type="search" onChange={(e) => setsearchValue(e.target.value)} />
            </ContainerSearch>
          </Container>
          <DataTable
            columns={columns}
            data={data}
          />
        </PageEmployees>) : (
        <PageEmployees>
          <NavLink className="logo" to="/">

            <h1>HRnet</h1>
          </NavLink>
          <h2>Current Employees</h2>
          <Container>
            <ContainerShow>
              <label htmlFor="state">Show</label>
              <Select
                name="state"
                placeholder={selectedNumberShow}
                label={selectedNumberShow}
                options={NumberShow}
                onChange={(e) => setNumberShow(e.label)}
              /> <p>entries</p>
            </ContainerShow>
            <ContainerSearch>
              <label htmlFor="search">Search:</label>
              <input name="search" type="search" onChange={(e) => setsearchValue(e.target.value)} />
            </ContainerSearch>
          </Container>
          <DataTable
            columns={columns}
            data={dataSorted}
          />
        </PageEmployees>)

      }
    </div>
  )



}
const PageEmployees = styled.main`

padding: 5px;
.logo{
  img {
    width: 70px;
    height: 70px;
  }
  h1 {
    font-size: 14px;
    color: #64814a;
  }
  
}
a.logo {
    display: inline-flex;
    width: 100px;
    text-decoration: none;
    align-items: center;
  }
h2{
  font-size: 28px;
    color: black;
    text-align:center;
}
`
const ContainerShow = styled.div`
display: inline-flex;
justify-content: left;
align-items: center;

`
const Container = styled.div`
display: inline-flex;
justify-content: space-between;
width: 100%;
align-items: center;


`
const ContainerSearch = styled.div`
`