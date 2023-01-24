import { useState } from "react";
import "./Color.css"

function Color() {
    const[colors, setColors] = useState([])
    function onClickHandler(){
        const randomColor = [randomGenerator(), randomGenerator(), randomGenerator()]
        setColors([...colors ,randomColor])
    }
    function randomGenerator(){
        return Math.floor(Math.random()*256)
    }

    return ( <div id="randomColorContainer">
        <button id="addColorBtn" onClick={onClickHandler}>Add Color</button>
        {colors.map(item=>{
            return(<div className="colorBox" key={`key-${item[0]}-${item[1]}-${item[2]}`}><div className="colorSquare" style={{backgroundColor: `rgb(${item[0]},${item[1]},${item[2]})`}}></div><p>rgb({item[0]},{item[1]},{item[2]})</p></div>)
        })}
    </div> );
}

export default Color;