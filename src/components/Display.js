import React from 'react';
import './Display.css';


function Display({result,calculate}) {
    return (
        <div className="display">
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="calculate">
                <h3>{calculate}</h3>
            </div>
          
          
        </div>
    )
}

export default Display
