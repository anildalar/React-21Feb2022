import React, { useEffect } from 'react'


import name from './InitialData'

//

const oldstate = [
                    {
                        name:"A"
                    },
                    {
                        name:"B"
                    }
            ]; //AOO

//RFC
export default function MyComponent() {
    //1. State / Hooks



    //2. Function Definition
    let clickMe = (e)=>{ //e = event, e is an formal argument
            //console.log(e);
        dispatchEvent({type:"xyz",address:'Neemuch MP INDIA'});

    }// ES6

    let reducer = (oldstate,action)=>{ // 1.oldstate,2. action
        let newstate = '';

        return newstate;
    }

    useEffect(()=>{
        
    },[]);

    //3. Return statement  JSX code
    //Every function in JS return Something
    return (
        <>
            {
                oldstate.map((currentValue,index,arr)=>{
                    //console.log(currentValue.name);
                    return <h1 key={index}>{currentValue.name}</h1>
                })
            }
            <div>Hello</div>
            <div>UseReducer</div>
            <button onClick={ (e)=>{ clickMe(e)  } }>Click Me!</button>
        </>
        
    )

}
