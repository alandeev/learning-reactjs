import React, { useState } from 'react';

import './LabelEditable.css';

export default function LabelEditable({ value, onChange, startWithInput=false }){
  const [ editable, setEditable ] = useState(startWithInput);
  const [ currentValue, setCurrentValue ] = useState(value);

  function handleEnterPressInput(event){
    if(event.code === "Enter"){
      onChange(currentValue);
      setEditable(false);
    }
    return;
  }

  return (
    <div className="LabelEditable">
      { 
        editable ?
        <input className="input-editable" autoFocus type="text" onKeyPressCapture={handleEnterPressInput} value={currentValue} onChange={(event) => setCurrentValue(event.target.value)}></input> :
        <label className="label-editable" onClick={() => setEditable(true)} >{value}</label>
      }
    </div>
  )
}