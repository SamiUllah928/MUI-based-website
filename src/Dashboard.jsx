import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './Redux/Action/authAction'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// 
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
// 

export default function Dashboard() {
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let hadleLogoutdash = () => {
        dispatch(logout())
    }
    const handleChange = () => {
        navigate('/Change-Password')
    }

    let data = useSelector(state => state.Auth)
    console.log(data)




    useEffect(() => {
        if (!data.isAuthenticated) {
            navigate('/Login')

        }
    })
    return (
        <div className='Dashboard' style={{ display: 'grid', gridTemplateColumns: '50% 50%', justifyContent: 'space-around', alignItems: 'center', paddingLeft: '50px' }}>

            <div className="dashbo" style={{fontSize:'20px'}}>
                
                <h1>User Information:</h1>
                <p><b>UserName: </b>{data?.user?.username}</p>
                <p><b>Email: </b>{data?.user?.email}</p>
                <p><b>Role: </b>{data?.user?.role}</p>
                <p><b>Balance: </b>{data?.user?.balance}</p>
                <p><b>Password: </b>{data?.user?.password}</p>
                <p><b>Createdat: </b>{data?.user?.createdat}</p>
                <div className="mbmt" style={{display: 'flex', flexDirection: 'column', gap:'7px', width:'40%', height:'40px'}}>
                    <Button variant='contained' onClick={hadleLogoutdash} sx={{ mb: 2, mt: 2 }}>Logout</Button>
                    <Button variant='contained' onClick={handleChange} endIcon={<ArrowForwardIcon />}>Change Password</Button>
                </div>
            </div>
            <div className="divider">
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                    Toothbrush
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="h6" component="div">
                                    $4.50
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography color="text.secondary" variant="body2">
                            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                            just down the hall.
                        </Typography>
                    </Box>
                    <Divider variant="middle" />
                    <Box sx={{ m: 2 }}>
                        <Typography gutterBottom variant="body1">
                            Select type
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip label="Extra Soft" />
                            <Chip color="primary" label="Soft" />
                            <Chip label="Medium" />
                            <Chip label="Hard" />
                        </Stack>
                    </Box>
                    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <Button>Add to cart</Button>
                    </Box>
                </Box>
            </div>

        </div>
    )
}
