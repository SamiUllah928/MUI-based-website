import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../Redux/Action/authAction'

export default function Signup() {
  let [username, setusername] = useState()
  let [email, setemail] = useState()
  let [password, setpassword] = useState()
  let [success,setsuccess]=useState()
  let [err,seterr]=useState()
  let navigate = useNavigate()
  let dispatch = useDispatch()

//   const  message= useSelector(state => state.Auth.success ? state.Auth.success?.message : state.Auth.error?.message)
// console.log(message)
  let data=useSelector(state=>state.Auth)
  console.log(data)

  let option = {
    username, email, password
  }

  let handleSignupB = () => {
dispatch(signup(option))
navigate('/Login')

  }


useEffect(()=>{
  if (data.isAuthenticated) {
    navigate('/Login')
    
  } 
})


if (err || success) {
  setTimeout(() => {
    seterr(0)
    setsuccess(0)
    if (err==="Email already registered please login to continue" || success==="Account Created Successfully. Please Login To Continue") {
      navigate('/login')
    }
  }, 2000);
}
  
console.log(username,email,password)
  return (
    <div className='Signup'>
      <div className="sign-up">
        <h1>Signup:</h1>
        <p style={{visibility: success ? 'visible' : 'hidden'}}>Success{success}</p>
        <p style={{visibility: err ? 'visible' : 'hidden'}}>Error{err}</p>
        <TextField id="outlined-password-input" label="Name" type="text" autoComplete="" onChange={(e) => setusername(e.target.value)}> </TextField>
        <TextField id="outlined-password-input" label="Email" type="email" autoComplete="" onChange={(e) => setemail(e.target.value)}> </TextField>
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="" onChange={(e) => setpassword(e.target.value)}> </TextField>
        <Button color='error' variant='contained' size='larges' onClick={handleSignupB}> Signup</Button>
      </div>
    </div>
  )
}
