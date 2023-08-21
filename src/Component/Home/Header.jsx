import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Header() {

    let navigate = useNavigate()
    let handleSignup = () => {
        navigate('/Signup')
    }
    let handleLogin = () => {
        navigate('/Login')
    }
    let handleCart = () => {
        navigate('/Cart')
    }
    let handleHome = () => {
        navigate('/')
    }

    return (
        <div className='Header'>
            <div className="main">
                <div className="head">
                    <div className="logo">
                        <h1>Cre@tive </h1>
                    </div>
                    <div className="links">
                        <ul>
                            <i class="fa-solid fa-bars"></i>
                            <li onClick={handleHome}> Home
                               

                            </li>
                            <li>Menu
                            <div className="sub">
                                    <ul>
                                        <li>Title</li>
                                        <li>Show</li>
                                        <li>Tool</li>
                                    </ul>
                                </div>
                            </li>
                            <li>AboutUs</li>
                            <li onClick={handleCart}>Cart</li>
                        </ul>
                    </div>
                    <div className="btn">
                        <Button variant='contained' color="error" size='medium' onClick={handleSignup}>Signup</Button>
                        <Button variant='contained' color="success" size='medium' onClick={handleLogin}>Login</Button>
                    </div>
                </div>
            </div>


        </div>
    )
}
