import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Login() {
    return (
        <div className='Login'>
           <div className="sign-up">
           <h1>Login:</h1>
            <TextField id="outlined-password-input" label="Email" type="email" autoComplete=""> </TextField>
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete=""> </TextField>
            <Button color='success' variant='contained' size='larges' > Login</Button>
           </div>
        </div>
    )
}
