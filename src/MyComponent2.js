import React, { useReducer, useState } from 'react'


import { students2 } from './initialData2';

const initialState = [
                    {
                        id:1,
                        name:'A'
                    },
                    {
                        id:2,
                        name:'B'
                    },
                    {
                        id:3,
                        name:'C'
                    }
                ];

let reducer = (initialState,action)=>{
    let newstate;
    newstate = initialState;

    if(action.type == 'remove_student'){
        for (let x in newstate) {
        //console.log(x);
        console.log(newstate[x].name);
        if(newstate[x].id == action.id){
            delete newstate[x];
        }
        
    }       
        //delete newstate.id
    }


    return newstate;
}

//RFC
export default function MyComponent2() {
    //1. State / Hooks
    const [state, dispatch] = useReducer(reducer, initialState);
    //const [componentData,setComponentData] = useState();
    

    //2. Function defination
    let clickMe = (e)=>{
        //console.log(e);
        //console.log("Hello");
        dispatch({type:"remove_student",id:2})//

    }

    let getData = (e)=>{
        
        console.log('new data'+JSON.stringify(initialState));

    }

    

    //3. Return statement JSX
    return (
        <>
            <div>MyComponent2</div>
            { 
                initialState.length > 0 &&
                
                initialState.map((currentValue, index, arr)=>{
                    console.log(currentValue)
                    return <h1 key={index}>{currentValue.name}</h1>
                })
            }
            <button onClick={(e)=>{ clickMe(e)  }}>Remove Student</button>
            <button onClick={(e)=>{ getData(e)  }}>get Data</button>
        </>
       
    )
}
