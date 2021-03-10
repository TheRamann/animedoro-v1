import React from 'react'
import './GetInput.css'

var theValueForCustomTime;

function GetInput() {
    function getData(val){
        theValueForCustomTime = val.target.value
        console.log(theValueForCustomTime)
    }
    return (
        <div id ="InputThingy">
            <h1 id ="textOnlyinsideInput">
            Set Custom Time
            </h1>
            <input id="onlyInputThingyFR" type="number" onChange={getData}/>
        </div>
    )
}

export {theValueForCustomTime}
export default GetInput
