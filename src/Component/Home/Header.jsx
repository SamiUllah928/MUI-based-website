import React from 'react'
import { Avatar, Button, } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useSelector } from 'react-redux';
// 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// 

export default function Header() {
    const [open, setOpen] = React.useState(false);
    const auth = useSelector(state => state.Auth.isAuthenticated)
    console.log(auth)

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
                                        Creative
                                    </Button>
                                    {open ? (
                                        <Box sx={styles}>
                                           Offers branding, design, marketing, advertising, PR and other digital marketing services for businesses big and small
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
                    <div className="btn" style={{ display: auth ? 'none' : 'flex' }}>
                        <Button variant='contained' color="error" size='medium' onClick={handleSignup}>Signup</Button>
                        <Button variant='contained' color="success" size='medium' onClick={handleLogin}>Login</Button>
                    </div>
                    <div className="btn" style={{ display: !auth ? 'none' : 'flex' }}>
                        {/* <Avatar/> */}

                        <Button variant='contained' color="success" size='medium' onClick={() => navigate('/Dashboard')}>Dashboard</Button>
                        {/*  */}
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button  {...bindTrigger(popupState)}>
                                        <Avatar alt="Sami Ullah" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJ1ang5CTSdBhvvhN39AMLza7rsPgFdkjhqsincW-XQ&s"/>

                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                        <MenuItem onClick={popupState.close}>My account</MenuItem>
                                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                       
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </div>

                </div>
            </div>


        </div>
    )
}
