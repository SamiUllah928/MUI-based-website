import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Signup() {
  return (
    <div className='Signup'>
    <div className="sign-up">
      <h1>Signup:</h1>
        <TextField id="outlined-password-input" label="Name" type="text"  autoComplete=""> </TextField>
        <TextField id="outlined-password-input" label="Email" type="email"  autoComplete=""> </TextField>
        <TextField id="outlined-password-input" label="Password" type="password"  autoComplete=""> </TextField>
        <Button  color='error' variant='contained' size='larges' > Signup</Button>
      </div>
    </div>
  )
}
