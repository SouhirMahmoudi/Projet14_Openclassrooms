import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { json, NavLink } from "react-router-dom";
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

  let data = localStorage.getItem("employees");
  if(data){
    data = JSON.parse(data)
  }
  else {
     data = []
  }
  console.log(data)
  let dataSorted = [];
  if (searchValue !== "") {
    dataSorted = data.filter((user) => {
      return ((user.firstName.toLowerCase().includes(searValueLowerCase) ) || (user.lastName.toLowerCase().includes(searValueLowerCase)) || (user.dateOfBirth.includes(searValueLowerCase)) ||
        (user.startDate.includes(searValueLowerCase)) || (user.street.toLowerCase().includes(searValueLowerCase)) || (user.city.toLowerCase().includes(searValueLowerCase)) ||
        (user.state.toLowerCase().includes(searValueLowerCase)) || (user.zipCode.includes(searValueLowerCase)) || (user.department.toLowerCase().includes(searValueLowerCase))
      )
    })
  }
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
          <input name ="search" type="search" onChange={(e) => setsearchValue(e.target.value)} />
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
        <input name ="search" type="search" onChange={(e) => setsearchValue(e.target.value)} />
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
    /* color: black; */
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
const ContainerSearch = styled.div `
`