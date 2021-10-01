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
import { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect } from 'react'

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

    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }


    };

    useEffect(() => {
        fetch("/payment")
            .then(res => res.json())
            .then(data => setClientSecret(data.client_secret))
    }, [])


    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };
    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };


    return (
        <>



            <Grid container>
                <Grid item xs={6} lg={6}>
                    <Box style={{ width: '70vw', marginTop: '14vh', marginLeft: '4vw' }}>
                        <AppBar style={{ background: "rgba(252, 249, 243, 1)", width: '100vw', marginRight: '20vw', height: '10vh', zIndex: "2", boxShadow: 'none' }}>
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

                    <Box style={{marginLeft: '10vw', marginTop: '5vh'}}>
                        <form id="payment-form" className="payform" onSubmit={handleSubmit}>
                            <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                            <button
                                className='paybutton'
                                disabled={processing || disabled || succeeded}
                                id="submit"
                            >
                                <span id="button-text">
                                    {processing ? (
                                        <div className="spinner" id="spinner"></div>
                                    ) : (
                                        "Pay now"
                                    )}
                                </span>
                            </button>
                            {/* Show any error that happens when processing the payment */}
                            {error && (
                                <div className="card-error" role="alert">
                                    {error}
                                </div>
                            )}
                            {/* Show a success message upon completion */}
                            {succeeded ?
                                <p className="result-message">
                                    Payment succeeded, see the result in your
                                    <a
                                        href={`https://dashboard.stripe.com/test/payments`}
                                    >
                                        {" "}
                                        Stripe dashboard.
                                    </a> Refresh the page to pay again.
                                </p> : null}
                        </form>

                    </Box>

                    {/* <form onSubmit={handleSubmit}>
                            <label>
                                Card details
                                <CardElement
                                    
                                    onReady={() => {
                                        console.log("CardElement [ready]");
                                    }}
                                    onChange={event => {
                                        console.log("CardElement [change]", event);
                                    }}
                                    onBlur={() => {
                                        console.log("CardElement [blur]");
                                    }}
                                    onFocus={() => {
                                        console.log("CardElement [focus]");
                                    }}
                                />
                            </label>
                            <button type="submit" disabled={!stripe}>
                                Pay
                            </button>
                        </form> */}

                </Grid>
            </Grid>


            <div style={{ height: '10vh', position: 'absolute', zIndex: '3' }}>
                <Box style={{ position: 'fixed' }}>
                    <Drawer variant="persistent" anchor='right' open={true} classes={{ paper: classes.paper }} >
                        <List className={classes.list}>
                            {userCart ? userCart.map(plant =>
                                <>
                                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                                        <img style={{ width: '100px', height: '110px', padding: '30px' }} src={plant.cartable.image} alt="plant"></img>
                                        <Typography variant="h6" style={{ color: 'white', marginTop: '3vh' }}>{plant.cartable.name ? plant.cartable.name : plant.cartable.title}</Typography>
                                        <Typography variant="h5" style={{ color: 'white', marginTop: '3vh', right: '0', position: "absolute", marginRight: '3vw' }}>${plant.cartable.price}</Typography>
                                        <Button onClick={() => onDeleteItem(plant.id)} style={{ right: "0", position: 'absolute', marginTop: "10vh", marginRight: '12vw', width: 120, background: "#f6cfb2", color: '#224229' }}>Remove</Button>
                                    </Box>

                                    <hr style={{ color: 'white', width: '84%' }} />
                                </>
                            )
                                : <> <Divider /> <Typography variant="h3">There is nothing in your cart</Typography></>}
                        </List>
                        <br />
                      
                    </Drawer>
                </Box>
            </div>

        </>
    )
}

export default React.memo(Cart);