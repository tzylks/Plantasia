import Grid from '@mui/material/Grid';
import Box from '@material-ui/core/Box';
import NavBar from "./NavBar"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom'
import TextField from '@mui/material/TextField';

function Dashboard({ plants, userCart, onLogout, currentUser }) {

    const sendText = () => {
        fetch('/sendit')
        fetch('/email')
    }


    return (
        <>
            <Box>
                <Box style={{ position: 'fixed', width: "100%", top: '0', height: "10vh", background: "rgba(252, 249, 243, 1)", zIndex: '1' }}>
                    <NavBar userCart={userCart} onLogout={onLogout} />
                    <Box style={{ height: '5vh', width: '100vw', background: '#224229', color: '#fcf9f3', position: 'relative', zIndex: '2' }}>
                        <Typography variant="h6" style={{ position: 'absolute', bottom: "0", center: '0', marginLeft: '40.7vw', lineHeight: '50px' }}>Free Shipping on Orders $100+</Typography>
                    </Box>
                </Box>
            </Box>

            <Grid container>
                <Grid item lg={12} sm={12}>
                    <Box width="100%" style={{ height: '70vh', position: 'relative', zIndex: '0', display: 'block', backgroundImage: 'url("https://cdn.pixabay.com/photo/2019/03/03/15/54/shelves-4032134_1280.jpg")' }}>
                        <Box style={{ marginTop: '10vh', background: '#f8f1e3', width: '30vw', height: '100vh', position: 'absolute', bottom: '0vh', marginTop: '30vh', zIndex: '1' }}>
                            <Typography variant="h3" style={{ padding: '10px', marginTop: '50vh', marginLeft: '1vw', color: '#224229' }}>Forever Green</Typography>
                            <Divider width="75%" style={{ marginLeft: '1vw' }} />
                            <Typography variant="h5" style={{ marginTop: '2vh', marginLeft: '2vw', marginRight: '1vw' }}>Bring the jungle to you with our lush, hearty, and vibrant tropical plants. </Typography>
                            <Button component={NavLink} to="/purchase_plants" variant='outlined' style={{ padding: '20px', background: '#f6cfb2', width: '13vw', height: '6vh', marginLeft: '1vw', color: '#224229', marginTop: '3vh', border: 'none' }}> Shop Now</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box style={{ marginLeft: '3vw', marginTop: '4vw' }}>
                <Typography variant='h3' style={{ color: '#224229' }}> Get Started Now</Typography>
            </Box>

            <Grid container spacing={1}>
                <Grid item lg={4} sm={12}>
                    <Box style={{ width: '95vw', marginTop: '6vh', marginLeft: '3vw', display: "flex", flexDirection: 'row' }}>
                        <Card style={{ width: 320, marginRight: '1vw', boxShadow: 'none', padding: '10px' }}>
                            <CardMedia
                                component="img"
                                alt="Plant"
                                height="450"
                                src="https://cdn.pixabay.com/photo/2017/08/02/21/00/interior-2573419_1280.jpg"
                            />
                            <CardContent style={{ border: 'none', boxShadow: 'none', background: '#fcf9f3' }}>
                                <NavLink to="/purchase_plants" style={{ textDecoration: 'none' }}>
                                    <Typography variant="h4" style={{ color: '#224229', marginLeft: '5vw' }} >Plants</Typography>
                                </NavLink>
                            </CardContent>
                        </Card>



                        <Grid item lg={3} sm={12}>
                            <Card style={{ width: 300, boxShadow: 'none', padding: '10px' }}>
                                <CardMedia
                                    component="img"
                                    alt="Tools"
                                    height="450"
                                    src="https://cdn.pixabay.com/photo/2016/11/18/15/37/blur-1835403_1280.jpg"
                                />
                                <CardContent style={{ border: 'none', boxShadow: 'none', background: '#fcf9f3' }}>
                                    <NavLink to="/purchase_tools" style={{ textDecoration: 'none' }}>
                                        <Typography variant="h4" style={{ color: '#224229', marginLeft: '6vw' }} >Tools</Typography>
                                    </NavLink>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item lg={3} sm={12}>
                            <Card style={{ width: 300, boxShadow: 'none', padding: '10px' }}>
                                <CardMedia
                                    component="img"
                                    alt="Books"
                                    height="450"
                                    src="https://cdn.pixabay.com/photo/2015/05/31/13/40/book-791824_1280.jpg"
                                />
                                <CardContent style={{ border: 'none', boxShadow: 'none', background: '#fcf9f3' }}>
                                    <NavLink to="/purchase_books" style={{ textDecoration: 'none' }}>
                                        <Typography variant="h4" style={{ color: '#224229', marginLeft: '6vw' }} >Books</Typography>
                                    </NavLink>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item lg={3} sm={12}>
                            <Card style={{ width: 300, boxShadow: 'none', padding: '10px' }}>
                                <CardMedia
                                    component="img"
                                    alt="Pet Friendly"
                                    height="450"
                                    src="https://cdn.pixabay.com/photo/2017/08/01/09/55/white-2564137_1280.jpg"
                                />
                                <CardContent style={{ border: 'none', boxShadow: 'none', background: '#fcf9f3' }}>
                                    <Typography variant="h4" style={{ color: '#224229', marginLeft: '6vw' }} >For Pets</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Box>

                </Grid>
            </Grid>

            <Divider textAlign="center" variant="middle" style={{ background: '#224229', marginLeft: '3vw', height: '1vh', width: '91%', marginTop: '8vh', }} />

            <Box style={{ marginLeft: '3vw', marginTop: '4vw' }}>
                <Typography variant='h3' style={{ color: '#224229' }}> Best Sellers </Typography>
            </Box>

            <Grid container wrap="nowrap" style={{ overflow: 'scroll', marginLeft: '2vw' }} spacing={1}>
                {plants.map(plant => {
                    return (
                        <Grid item lg={8} sm={12}>
                            <Card style={{ width: 400, boxShadow: 'none', padding: '5px', marginTop: '4vh' }}>
                                <CardMedia
                                    component="img"
                                    alt="Books"
                                    height="450"
                                    src={plant.image}
                                />
                                <CardContent style={{ border: 'none', boxShadow: 'none', background: '#fcf9f3', justifyContent: 'center', alignItems: "center" }}>
                                    <Typography variant="h6" style={{ color: '#224229' }} >{plant.name}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>


            <Divider textAlign="center" variant="middle" style={{ background: '#224229', marginLeft: '3vw', height: '1vh', width: '91%', marginTop: '8vh', }} />


            <Grid container>
                <Grid item lg={12} sm={12}>
                    <Box width="100%" style={{ marginBottom: '-10vh', marginTop: '8vh', height: '70vh', position: 'relative', zIndex: '0', display: 'block', backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/10/07/12/29/books-2826380_1280.jpg")' }}>
                        <Box style={{ marginTop: '1vh', background: '#f8f1e3', width: '30vw', height: '70vh', position: 'absolute', bottom: '0vh', right: 0, marginTop: '30vh', zIndex: '1' }}>
                            <Typography variant="h3" style={{ padding: '10px', marginTop: '20vh', marginLeft: '7vw', color: '#224229' }}>Subscribe</Typography>
                            <Divider width="75%" style={{ marginLeft: '3vw' }} />
                            <Typography variant="h5" style={{ marginTop: '2vh', marginLeft: '2vw', marginRight: '1vw' }}>Opt in to receieve alerts about our newest products and gain early access to our exclusive sales. </Typography>
                            <Box style={{ marginLeft: '1vw', marginTop: '4vw', display: 'flex' }}>
                                <form onSubmit={sendText} style={{flexDirection: 'column'}}>
                                    
                                    <Button variant='outlined' style={{ padding: '0px', background: '#f6cfb2', width: '15vw', height: '6vh', marginLeft: '5vw', color: '#224229', marginTop: '0vh', border: 'none' }} type='submit'>Yes, please!</Button>
                                    <Typography variant="h6" style={{ marginTop: '2vh', marginLeft: '2vw', marginRight: '1vw', fontSize: '16px', marginLeft: '3.4vw' }}>(Must be logged in to use this feature)</Typography>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* 
            <Box style={{ marginLeft: '3vw', marginTop: '4vw' }}>
                <form onSubmit={sendText}>
                    <TextField placeholder="Phone Number"></TextField>
                    <Button type='submit'>Submit</Button>
                </form>
            </Box> */}

        </>
    )
}

export default Dashboard