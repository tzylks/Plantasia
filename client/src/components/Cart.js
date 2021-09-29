import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core'
import * as React from 'react';


const useStyles = makeStyles({
    list: {
        width: 450,
        marginLeft: '3vw'
    },
    paper: {
        background: '#224229',
        flexShrink: 0,
        marginTop: '0vh',
        maxHeight: '100vh',
        border: "none"
    }
});

function Cart({ userCart, onDeleteItem }) {
    const classes = useStyles();

    let CustomListItem = ({ to, primary }) => (

        <ListItem
            button
            component={NavLink}
            to={to}

        >
            <ListItemText primary={primary} />
        </ListItem>


    )


    return (
        <>



            <Grid container>
                <Grid item xs={6} lg={6}>
                    <Box style={{ width: '70vw', marginTop: '14vh', marginLeft: '4vw' }}>
                        <AppBar style={{ background: "rgba(252, 249, 243, 1)", width: '100vw', marginRight: '20vw', height: '10vh', zIndex: "1" }}>
                            <Toolbar style={{ justifyContent: 'center' }}>
                                <Grid continer>
                                    <Grid item xs={12} lg={12}>
                                        <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                                            <Typography variant="h3" style={{ justifyContent: 'center', color: "#224229" }}>plantasia</Typography>
                                        </NavLink>
                                    </Grid>

                                </Grid>
                            </Toolbar>
                        </AppBar>
                        <Divider style={{ marginRight: '10vw' }} width="80%" />
                        <Typography variant="h4" style={{ marginTop: '1vh', color: "#224229" }}>Email Address</Typography>
                        <Box style={{ width: '50vw', marginTop: '3vh', background: '#f6cfb2', height: '10vh' }}>

                            <Typography variant="h6" style={{ marginLeft: '2vw', paddingTop: '10px' }}>Returning Customer?</Typography>
                            <Typography variant="h6" style={{ marginLeft: '2vw', padding: '2px', fontSize: '1rem' }}>Sign into your account</Typography>
                        </Box>
                        <TextField style={{ width: '50vw', marginTop: '3vh', borderColor: 'white' }} variant="outlined" required label="Email Address"></TextField>

                        <Divider style={{ marginRight: '10vw', marginTop: '5vh' }} width="80%" />

                        <Box style={{ marginTop: '10vh' }}>
                            <Typography variant="h4" style={{ marginTop: '-6vh', color: "#224229" }}>Shipping Address</Typography>

                            <TextField style={{ width: '25vw', marginTop: '3vh', borderColor: 'white', padding: '10px' }} variant="outlined" required label="First Name"></TextField>
                            <TextField style={{ width: '25vw', marginTop: '3vh', borderColor: 'white', padding: '10px' }} variant="outlined" required label="Last Name"></TextField>
                            <TextField style={{ width: '50vw', marginTop: '1vh', borderColor: 'white', padding: '10px' }} variant="outlined" required label="Street Address"></TextField>
                            <br />
                            <TextField style={{ width: '16vw', marginTop: '1vh', borderColor: 'white', padding: '10px' }} variant="outlined" required label="City"></TextField>
                            <TextField style={{ width: '16vw', marginTop: '1vh', borderColor: 'white', padding: '10px' }} variant="outlined" required label="State"></TextField>
                            <TextField style={{ width: '16vw', marginTop: '1vh', borderColor: 'white', padding: '10px' }} variant="outlined" required label="Zip Code"></TextField>

                        </Box>
                    </Box>

                </Grid>
            </Grid>


            <div style={{ height: '10vh', position: 'absolute', zIndex: '1' }}>

                <Box style={{ position: 'fixed' }}>
                    <Drawer variant="persistent" anchor='right' open={true} classes={{ paper: classes.paper }} >
                        <List className={classes.list}>

                            {userCart ? userCart.map(plant =>
                                <>
                                    <Box style={{ display: 'flex', flexDirection: 'row' }}>

                                        <img style={{ width: '100px', height: '110px', padding: '30px' }} src={plant.cartable.image} alt="plant"></img>

                                        <Typography variant="h6" style={{ color: 'white', marginTop: '3vh' }}>{plant.cartable.name ? plant.cartable.name : plant.cartable.title}</Typography>
                                        <Typography variant="h5" style={{ color: 'white', marginTop: '3vh', right: '0', position: "absolute", marginRight: '3vw' }}>${plant.cartable.price}</Typography>
                                        
                                      
                                        <Button onClick={()=> onDeleteItem(plant.id)} style={{right: "0", position: 'absolute', marginTop: "10vh", marginRight: '12vw', width: 120, background: "#f6cfb2", color: '#224229'}}>Remove</Button>
                                        

                                    </Box>

                                    <hr style={{ color: 'white', width: '84%' }} />
                                </>
                            )
                                : <> <Divider /> <Typography variant="h3">There is nothing in your cart</Typography></>}

                        </List>
                        <br />
                        <Button variant='outlined' style={{ background: '#fcf9f3', width: '18vw', height: '6vh', marginLeft: '3vw', color: '#224229' }}>Clear Filters</Button>
                    </Drawer>
                </Box>

            </div>
        </>
    )
}

export default React.memo(Cart);