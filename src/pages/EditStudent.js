import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const config = require('../config.json');

//RFC
export default function EditStudent() {
    //1. State / Hooks
    const [student,setStudent] = useState({
        data:{
            attributes:{
                name:''
            }
        }
      });//Empty Array

    let params = useParams();

    useEffect(()=>{
        console.log('Page Loaded Succeffully');
        getStudent(params.stu_id);
    },[]);

    //2. Function defition
    let getStudent = (student_id=1)=>{// e = event //ES6 Fat arrow functions // default argument
        console.log(config.base_url);
        console.log('good morning')
        //Alway wrap the api calling code inside trycatch block
        try {
            //Call the api
            // Fetch API
            //AXIOS

            //What is the api
            //Fetch API with Promise Chain
            fetch(`${config.base_url}/api/friends/`+student_id)
            .then((data)=>{
            //let make data json readable
            return data.json();
            }).then((data)=>{
            console.log(data);

            //Set karne se pahle
            //console.log('before set',student);
            //not set the student data in student hook variable
            
            setStudent(data);
            //Set karne ke baad data kya hai


            //array.map(function(currentValue, index, arr));
            //PaginationItem()
            
            
            }).catch((err)=>{
                console.log(err);
            });


        } catch (error) {
        console.log(error)
        }
    }

    let handleChange = (e)=>{
           console.log('hello',e.target.value);

           setStudent({
            ...student,
            data:{
                attributes:{
                    name:e.target.value
                }
            }

           });

    }
    let submitStudent = (e)=>{
        e.preventDefault();
        console.log('submitted');
    }
    //3. Return statement JSX
    return (
        <>
            <div>EditStudent {params.stu_id}</div>
            
            <form onSubmit={(e)=>{ submitStudent(e) }}>
                <label>Enter your name:
                <input 
                    type="text" 
                    name="friend_name" 
                    value={ student.data.attributes.name }
                    onChange={ (e)=>{ handleChange(e) } }
                />
                </label>
                <input type="submit" />
            </form>
        </>
        
    )
}
