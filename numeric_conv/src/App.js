import React from 'react';
import {useState } from 'react';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import Select from "react-select";
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selectedOption, setSelectedOption] = useState("none");

  const options = [
    { value: "none", label: "Empty" },
    { value: "htd", label: "Hex to Decimal" },
    { value: "btd", label: "Binary to Decimal" },
    { value: "dth", label: "Decimal to Hex" },
    { value: "dtb", label: "Decimal to Binary" },
  ];

  const handleTypeSelect = e => {
    setSelectedOption(e.value);
  };

  var [stat, setState] = useState('');
  const Convert = () => {
    switch (selectedOption) {
      case 'htd':
        hexToDecimal(input);
        break;
      case 'btd':
        binaryToDecimal(input);
        break;
      case 'dth':
        decimalToHex(input);
        break;
      case 'dtb':
        decimalToBinary(input);
        break;
      case 'none':
      default:
        console.log("err");
    }
    
  };

  function decimalToHex(data){
    let out = parseInt(data, 10).toString(16).toUpperCase();
    setOutput(out)
  }

  function decimalToBinary(data){
    let out =  parseInt(data, 10).toString(2);
    setOutput(out)
  }

  function hexToDecimal(data){
    let out = parseInt(data, 16);
    setOutput(out)
  }

  function binaryToDecimal(data){
    let out = parseInt(data, 2)
    setOutput(out)
  }

  const [loglist, log] = useState([]);
  const showLog = () =>{
    log([
      ...loglist,
      {
        in:input,
        out: output
      }
    ]);
  }
  return (
    <div className="App">
      <div className= "title">
        <h1>Numeric Converter</h1>
      </div>
        <div className = "dropdown_menu">
          <Select
            options={options}
            onChange={handleTypeSelect}
            value={options.filter(function(option) {
              return option.value === selectedOption;
            })}
            label="Single select"
        />
        <br></br>
        <div className = "user_input">
          <label> Number:</label>
          <input type="text" className="Input" onChange={(e)=>{
            setInput(e.target.value)
          }}/>
        </div>
        <br></br>  
        <button className='btn' onClick={Convert}>Convert</button>
        <p>{output}</p>
      </div>
      
      <div className ="log">
      <label>Log</label>
      <br></br>
        <button onClick={showLog}>Update Log</button>
        {
          loglist.map((val)=>{
            return(
              <div>
              <p>Input: {val.in}</p>
              <p>Output: {val.out}</p>
            </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
