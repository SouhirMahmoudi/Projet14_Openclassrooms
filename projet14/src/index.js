import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import { Provider } from 'react-redux';
import store from './store';
import ListEmployee from "../src/pages/ListEmployee"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<CreateEmployee />}/>
        <Route  exact path="/EmployeeList" element={<ListEmployee/>}/>
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
