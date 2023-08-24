import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/Action/authAction'

export default function Login() {
    let [email,setemail]=useState()
    let [password,setpassword]=useState()

    let option={
        email,password
    }

    let navigate=useNavigate()
    let dispatch=useDispatch()
    let data=useSelector(state=>state.Auth)
    console.log(data)


    let handleLoginbtn=()=>{
        dispatch(login(option))
    }


    useEffect(()=>{
        if (data.isAuthenticated) {
            navigate('/Dashboard')
            
        }
    },[data.isAuthenticated])
    return (
        <div className='Login'>
           <div className="sign-up">
           <h1>Login:</h1>
            <TextField id="outlined-password-input" label="Email" type="email" autoComplete="" onChange={(e)=> setemail(e.target.value)}> </TextField>
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="" onChange={(e)=> setpassword(e.target.value)}> </TextField>
            <Button color='success' variant='contained' size='larges'  onClick={handleLoginbtn}> Login</Button>
           </div>
        </div>
    )
}
