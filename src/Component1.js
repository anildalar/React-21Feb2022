import React, { createContext, useContext, useState } from 'react'
import { StudentContext } from './StudentContext';


const FriendContext = createContext();

export default function Component1() { //Higest Parent

    const [name,setName] = useState('Anil');

    return (
        <React.Fragment>
            <FriendContext.Provider value={name}>
                <div>Component1</div>
                <Component2 />
            </FriendContext.Provider>
            
        </React.Fragment>
       
    )
}


//RFC
function Component2(){  //Child Compoent

    const xyz = useContext(FriendContext);

    const abc = useContext(StudentContext);


    //3. Return Statement
    return (
        <>
            <div>Component2 { xyz } { console.log(abc) } </div>

            {
                    abc.map(function(currentValue,index,arr){
                         return <h1 key={index}>{currentValue.name}</h1> 
                    })
            }
        </>
        


    )
}

