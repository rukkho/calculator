import { useState } from 'react';
import React from 'react';
import './App.css';
import Button  from './components/Button';
import Display from './components/Display';
 
const App =()=>{

  const [calculate, setCalculate] = useState("")
  const [result, setResult] = useState("")
  
  const handleCalculations = (value)=>{
   
    setCalculate((calculate)=> [...calculate, value + ""])
  }
  const handleAC=()=>{
    setCalculate("");
    setResult("");
  }
  const handleC=()=>{
    setCalculate(calculate.slice(0, -1));
  }
  const handleEqualTo =()=>{
    let input = calculate.join("");
    try{
      setResult(eval(input).toString());
    }catch(err){
      setResult("Error");
    }  
  }
  return (
    <div className="app">
      <div className="cal-wrapper">
        <div className="display-wrapper">
          <Display calculate={calculate} result={result} />
        </div>
        <div className="row">
          <Button content= "AC" handleClick={handleAC} type="function" />
          <Button content= "C"  handleClick={handleC} type="delete"/>
          <Button content= "/"  handleClick={handleCalculations}type ="oprators"/>
          
        </div>
        <div className="row">
          <Button content= "7" className= "button" handleClick={handleCalculations}/>
          <Button handleClick={handleCalculations} content = "8" />
          <Button handleClick={handleCalculations} content = "9" />
          <Button handleClick={handleCalculations} content = "*" type ="oprators"/>
        </div>
        <div className="row">
          <Button handleClick={handleCalculations} content = "4" />
          <Button handleClick={handleCalculations} content = "5" />
          <Button handleClick={handleCalculations} content= "6" />
          <Button handleClick={handleCalculations} content= "+" type ="oprators"/>
        </div>
        <div className="row">
          <Button handleClick={handleCalculations} content= "1" />
          <Button handleClick={handleCalculations} content= "2" />
          <Button handleClick={handleCalculations} content= "3" />
          <Button handleClick={handleCalculations} content= "-" type ="oprators"/>
        </div>
        <div className="row">
          <Button handleClick={handleCalculations} content= "0" />
          <Button handleClick={handleCalculations} content= "." type ="oprators"/>
          <Button content= "=" handleClick={handleEqualTo} type="result"/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
