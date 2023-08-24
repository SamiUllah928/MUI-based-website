import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  logout } from './Redux/Action/authAction'

export default function Dashboard() {
    let navigate=useNavigate()
    let dispatch=useDispatch()

    let hadleLogoutdash=()=>{
     dispatch(logout())
    }

    let data=useSelector(state=>state.Auth)
    console.log(data)




    useEffect(()=>{
        if (!data.isAuthenticated) {
            navigate('/Login')
            
        }
    })
    return (
        <div className='Dashboard'>
            <h1>User Information:</h1>
            <p><b>UserName: </b>{data?.user?.username}</p>
            <p><b>Email: </b>{data?.user?.email}</p>
            <p><b>Role: </b>{data?.user?.role}</p>
            <p><b>Balance: </b>{data?.user?.balance}</p>
            <p><b>Password: </b>{data?.user?.password}</p>
            <p><b>Createdat: </b>{data?.user?.createdat}</p>
            <Button variant='contained' onClick={hadleLogoutdash}>Logout</Button>
        </div>
    )
}
