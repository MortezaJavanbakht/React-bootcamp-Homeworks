import { useState } from "react";
import AdjustPerColor from "./AdjustPerColor";
import "./AdjustColor.css"

function AdjustColor() {
    const [color, setColor] = useState({Red: 0, Green: 0, Blue: 0})
    function increaseColorDensity(selectedColor){
        if(color[selectedColor]<255) setColor({...color, [selectedColor]: color[selectedColor]+1})
    }
    function decreaseColorDensity(selectedColor){
        if(color[selectedColor]>0) setColor({...color, [selectedColor]: color[selectedColor]-1})
    }
    return (<div id="adjustContainer">
        <AdjustPerColor colorName="Red" colorStateIncrease={()=>increaseColorDensity("Red")} colorStateDecrease={()=>decreaseColorDensity("Red")}/>
        <AdjustPerColor colorName="Green" colorStateIncrease={()=>increaseColorDensity("Green")} colorStateDecrease={()=>decreaseColorDensity("Green")}/>
        <AdjustPerColor colorName="Blue" colorStateIncrease={()=>increaseColorDensity("Blue")} colorStateDecrease={()=>decreaseColorDensity("Blue")}/>
        <div className="bottomPart"><div className="colorSquare" style={{backgroundColor: `rgb(${color.Red},${color.Green},${color.Blue})`}}></div><p>rgb({color.Red},{color.Green},{color.Blue})</p></div>
        
    </div>);
}

export default AdjustColor;