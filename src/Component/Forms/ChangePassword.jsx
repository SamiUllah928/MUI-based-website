import { Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Box, createTheme } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changepassword } from '../../Redux/Action/authAction'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'

export const ChangePassword = () => {
    const [old,setold]=useState()
    const [newpass,setnewpass]=useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChangePassword = () =>{
        const option = {
            oldpassword:old,
            newpassword:newpass
        }
        dispatch(changepassword(option))
    }
  return (
    <div className='ChangePassword' style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>

        <Box sx={{p:5,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',rowGap:2,backgroundColor:'gray',borderRadius:'10px'}}>
            <Typography variant='h5' sx={{fontWeight:700,color:'#475f23'}}>Change Password Page</Typography>
            <TextField 

            type='text'
            placeholder='Old Password'
            onChange={(e)=>setold(e.target.value)}
            />
            <TextField 
            type='text'
            placeholder='New Password'
            onChange={(e)=>setnewpass(e.target.value)}
            />
            <Button variant='contained' onClick={handleChangePassword}>Change</Button>
            <Button variant='contained' onClick={()=>navigate(-1)} endIcon={<ArrowBackIcon/>}>Cancel</Button>
        </Box>
    </div>
  )
}
