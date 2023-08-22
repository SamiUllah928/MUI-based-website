import React from 'react'

import { Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Rating, Typography, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
    const navigate=useNavigate()
    const [value, setValue] = React.useState(2);
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let handleJoin=()=>{
        setTimeout(() => {
        navigate('/Signup')
            
        }, 500);
    }

    return (
        <div className='Home'>

            <div className="page1">
                <div className="page">
                    <div className="pick1">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg" alt="Something went wrong " />
                      

                    </div>

                </div>
            </div>
            <div className="headings">
                <div className="circle">

                    {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
                    <h1>Creative Agency</h1>
                    <p>A creative agency is an organization that uses creative strategies to help clients achieve their goals. Creative agencies, sometimes called marketing agencies, typically focus their efforts on one of the following areas: Strategy: How a business serves customers and generates revenue.</p>
                    <Typography component="legend"></Typography>
                    <Rating
                        name="simple-controlled" value={value} onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>
                <div className="circle">
                    {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}

                    <h1>Starting Point</h1>

                    <p>There are three main agency types: creative, digital and PR. You cannot harness the power of marketing without the right assistance. are three main agency types: creative are three main agency types: creative are three main agency types: creative Each of the agencies serves a distinct purpose,</p>
                    <Typography component="legend"></Typography>
                    <Rating
                        name="simple-controlled" value={value} onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>
                <div className="circle">
                    {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}

                    <h1>Dispatch From</h1>
                    <p>Individual freelancers work independently and directly with their clients. Agencies are freelancer accounts that can add team members to projects for the agency's clients.are three main agency types: creative  If you require more than one person to complete your project</p>
                    <Typography component="legend"></Typography>
                    <Rating
                        name="simple-controlled" value={value} onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </div>

            </div>
            <div className="foot">
                <div className="profilio">
                    <div className="build">
                        <h1 id='black'>Special Board BMW </h1>
                        <p>Bayerische Motoren Werke AG, abbreviated as BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 to 1918 </p>
                        <div className="cont">
                            <Tooltip title="We are Creative Agency" arrow>
                                <Button onClick={handleJoin} variant='contained'>Join Now</Button>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="build-up">
                        <h1 id='black'>Contact Us</h1>
                        <p><b>Address</b>: GM Market Place #34 Street BB Colony</p>
                        <p> <b>Phone</b>: +234-(456)-789</p>
                        <p> <b>ShowCase</b>: #000 334 643 975</p>
                        <p> <b>Build-In</b>: Ul #WC230</p>
                        {/* <TextField
                            id="filled-search"
                            label="Search field"
                            type="search"
                            variant="filled"
                        /> */}
                    </div>
                    <div className="lenks">
                        <h1 id='black'>For more Updates</h1>

                        <ul>
                            <li><i class="fa-brands fa-facebook"></i> Facebook</li>
                            <li> <i class="fa-brands fa-instagram"></i> Instagram</li>
                            <li> <i class="fa-brands fa-twitter"></i> Twitter</li>
                            <li> <i class="fa-brands fa-linkedin"></i> Linkedin</li>
                        </ul>
                        <div className='google'>
                            <Button variant="outlined" onClick={handleClickOpen}>
                                Use Google Map Location
                            </Button>
                            <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        Let Google help apps determine location. This means sending anonymous
                                        location data to Google, even when no apps are running.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Disagree</Button>
                                    <Button onClick={handleClose}>Agree</Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                    </div>

                </div>
            </div>

            {/* <div className="stake">
                <Stack spacing={2}>
                    <Typography>Page: {page}</Typography>
                    <Pagination count={10} page={page} onChange={handleChange} />
                </Stack>
            </div> */}
        </div>
    )
}
