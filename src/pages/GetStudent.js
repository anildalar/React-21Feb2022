import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

export default function GetStudent() {
    //1. State/Hooks Variable

    let param = useParams()

    //2. Function defination

    //3. REturn statement JSX
    return (
        <Layout>
            <h1>GetStudent {param.stu_id} {param.id} </h1>
        </Layout>
        
    )
}
