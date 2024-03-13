//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let seg, seg2, min, min2, hour, hour2;
seg = seg2 = min = min2 = hour = hour2 = 0;

setInterval(()=>{
    if (seg == 9){
        seg = -1
        seg2++
    }
    if (seg2 == 6){
        seg2 = 0
        min++
    }
    if (min == 9){
        min = 0
        min2++
    }
    if (min2 == 6){
        min2 = 0
        hour++
    }
    if (hour == 9){
        hour = 0
        hour2++
    }
    if (hour == 4 && hour2 == 2 ){
        seg = -1
        seg2 = min = min2 = hour = hour2 = 0;
    }
    seg++
    ReactDOM.render(<SecondsCounter seconds={seg} secondsTwo={seg2} minutes={min} minutesTwo={min2} hours={hour} hoursTwo={hour2}  />, document.querySelector("#app"));    
}, 1000)

//render your react application

