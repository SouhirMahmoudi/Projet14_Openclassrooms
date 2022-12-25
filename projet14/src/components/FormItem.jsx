import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
/**
 * React component to create a form item with an input or a select
 * @param { Object } props
 * @returns { React.ReactElement } FormItem component
 */
function FormItem(props) {


  return (

    <FormItem>

      {props.type === "input"}?
      (<label htmlFor={props.id}>{props.labelTitle}</label>
      <input type={props.inputType} id={props.id} />)
      : (

     
      );

    </FormItem>
  )
}



export default FormItem;
/*import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}*/