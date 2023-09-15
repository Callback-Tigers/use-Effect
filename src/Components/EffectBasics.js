
import React,{useState,useEffect} from "react";



// ramSahankrChoudhary


const EffectBasics = () => {
   
    const [gold,setGold] = useState(0);
    const [silver,setSilver] = useState(0);
    const [bronze,setBronze] = useState(0);


     useEffect(
        ()=>{
            document.title = `Gold: ${gold} | Silver: ${silver}`
            console.log("rendered");
        } , []
     )

      // if no second argument is passed then it will render as many  times as component renders
     // if array is empty then it will render only once
        // if we pass any state variable in array then it will render only when that state variable changes

    return(
        <div>
             <h1> Gold: {gold}  |  Silver: {silver} | Bronze: {bronze} </h1>
                <button onClick={() => setGold(gold + 1)}>Gold</button>
                <button onClick={() => setSilver(silver + 1)}>Silver</button>
                <button onClick={() => setBronze(bronze + 1)}>Bronze</button>
        </div>
    )

}

export default EffectBasics;