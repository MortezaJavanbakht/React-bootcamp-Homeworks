import "./AdjustPerColor.css"

function AdjustPerColor({colorName, colorStateIncrease, colorStateDecrease}) {
    return (<div id={`adjust${colorName}`} className="colorPart">
        <p>{colorName}</p>
        <button className="adjustColorBtn" onClick={colorStateIncrease}>Increase {colorName}</button>
        <button className="adjustColorBtn" onClick={colorStateDecrease}>Decrease {colorName}</button>
    </div>  );
}

export default AdjustPerColor;