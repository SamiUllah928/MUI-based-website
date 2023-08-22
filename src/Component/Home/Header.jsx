import React from 'react'
import { Button, } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };

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
    let handleAbout = () => {
        navigate('/About')
    }
    let handleMenu = () => {
        navigate('/Menu')
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
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <Box sx={{ position: 'relative' }}>
                                    <Button type="button" onClick={handleClick} >
                                     creative
                                    </Button>
                                    {open ? (
                                        <Box sx={styles}>
                                        Creative Agency 
                                        </Box>
                                    ) : null}
                                </Box>
                            </ClickAwayListener>
                            <li onClick={handleHome}> Home </li>
                            <li onClick={handleMenu}>Menu</li>
                            <li onClick={handleAbout}>AboutUs</li>
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
