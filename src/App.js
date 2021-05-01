import React from 'react'
import './App.css';
import Button  from './components/Button';
import Display from './components/Display';

function App() {
  const [input, setInput]=React.useState("");
  const handleContent=(e)=>{
    setInput(input+e.target.value)
  }
  return (
    <div className="app">
      <div className="container">
        <Display input={input} />
        <div className="row">
          <Button  content="AC"  type='function'/>
          <Button  content="%" type='operator'/>
          <Button handleClick={handleContent}  value="/" content="/"  type='operator'/>
        </div>
        <div className="row">
          <Button handleClick={handleContent} value="7" content="7"  />
          <Button handleClick={handleContent} value="8" content="8"  />
          <Button handleClick={handleContent} value="9" content="9"  />
          <Button handleClick={handleContent} value="X" content="X"  type='operator'/>
        </div>
        <div className="row">
          <Button handleClick={handleContent} value="4" content="4"  />
          <Button handleClick={handleContent} value="5" content="5"  />
          <Button handleClick={handleContent} value="6" content="6"  />
          <Button handleClick={handleContent} value="-" content="-"  type='operator'/>
        </div>
        <div className="row">
          <Button handleClick={handleContent} value="1" content="1"  />
          <Button handleClick={handleContent} value="2" content="2"  />
          <Button handleClick={handleContent} value="3" content="3"  />
          <Button handleClick={handleContent} value="+" content="+"  type='operator'/>
        </div>
        <div className="row">
          <Button handleClick={handleContent} value="0" content="0"  />
          <Button handleClick={handleContent} value="." content="."  />
          <Button handleClick={handleContent} value="=" content="="  type='operator'/>
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
