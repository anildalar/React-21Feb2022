import React, { useEffect, useRef } from 'react'


//RFC
export default function UseRef() {
    //1. State / Hooks
    const divelement = useRef();


    useEffect(()=>{
        //This block will executed after the page render/load
        console.log(divelement);
        console.log(divelement.current);
        console.log(divelement.current.innerText);
        console.log(divelement.current.innerHTML);
    },[]);

    //2. Function defination
    let selectElement = (e)=>{
        console.log(e.target);
        console.log(e.target.innerHTML);
        console.log(e.target.innerText);
    }

    //3. Return Statement JSX
    return (
        <div ref={ divelement }  onClick={(e)=>{ selectElement(e) }}> <span>UseRef</span> </div>

    )
}
