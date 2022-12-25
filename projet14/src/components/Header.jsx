import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoHrnet.png";

/**
 * React component to create a header
 * @returns { React.ReactElement } Header component
 */
function Header() {
  return (
    <Head>
      <NavLink to="/">
        <img src={logo} alt="Wealth Health Logo" />
        <h1>Wealth Health</h1>
      </NavLink>

      <NavLink to="/EmployeeList">
        <h2>View current employees</h2>
      </NavLink>
    </Head>
  );
}

const Head = styled.header`
  display: flex;
  justify-content: SPACE-BETWEEN;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
  h1 {
    font-size: 14px;
    color: #64814a;
  }
  h2 {
    font-size: 12px;
    color: #424242;
  }

  a {
    display: inline-flex;
    width: 100px;
    text-decoration: none;
    /* color: black; */
    align-items: center;
  }
`;

export default Header;
