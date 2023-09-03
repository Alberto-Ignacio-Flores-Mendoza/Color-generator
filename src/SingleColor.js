import React, {useState, useEffect}from "react";
import rgbToHex from './utils'

const SingleColor=({rgb,weight, index, hexColor})=>{
    console.log(hexColor); //another way of accesing that data. 
    const [alert, setAlert] =useState(false);
    const bcg= rgb.join(',');
    const hex= rgbToHex(...rgb);
    const hexValue = `#${hexColor}` // the value from the data we get back doesnt hava the #
    //we could also use the hex variable we get back from rgbToHex directly 
    
    useEffect(()=>{
        const timeout =setTimeout(()=>{
            setAlert(false);
        }, 3000) 
        return ()=>clearTimeout(timeout)      
    },[alert]); 

    return(

        <article onClick={()=>{ 
            setAlert(true);
            navigator.clipboard.writeText(hexValue)}}
            className={`color ${index > 10 && 'color-light'}`} 
            style={{backgroundColor: `rgb(${bcg})`}}>

                
        <p className="percent-value"> {weight}% </p>
        <p className="color-value">{hexValue}</p>
        {alert? <p className="alert">Copied to clipboard</p>:null}
        </article>
    );

    //Another way of popping up the alert  alert && <p className="alert"> Copied to clipboard</p>}

}   
export default SingleColor;