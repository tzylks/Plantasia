import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Plant from './Plant'
import PersistDrawer from './Drawer';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: '1%',
        border: '1px solid black',
        marginLeft: 0,
        width: '70%',
        marginTop: '2.5vw',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '.2vw',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));



function PlantsContainer({ setPlants,  onLogout, setUserCart, userCart, plants, search, setSearch, currentUser }) {
    const classes = useStyles();
    const history = useHistory();

    function onChangeSearch(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <>
            <Box style={{ position: 'fixed', zIndex: '1' }}>
                <NavBar userCart={userCart} onLogout={onLogout} />
                <Box style={{ height: '5vh', width: '100vw', background: '#224229', color: '#fcf9f3', position: 'relative' }}>
                    <Typography variant="h6" style={{ position: 'absolute', bottom: "0", center: '0', marginLeft: '38vw', lineHeight: '50px' }}>Free Shipping on Orders $75+ Shop Now</Typography>
                </Box>
            </Box>

            <PersistDrawer setPlants={setPlants} plants={plants} />

            <Box sx={{ marginLeft: '23vw' }}>
                <Grid container>
                    <Grid item lg={12} xs={12}>
                        <Box style={{ marginTop: '23vh', marginLeft: '2vw', display: 'flex' }}>
                            <Typography variant='h4' style={{ color: '#224229', fontSize: '50px' }}>
                                Indoor Plants
                            </Typography>
                            <div className={classes.search} style={{ flexDirection: 'row', marginLeft: '30vw' }}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    placeholder="Search Plants"
                                    autoFocus="true"
                                    value={search}
                                    onChange={e => onChangeSearch(e)}
                                />
                            </div>
                        </Box>

                    </Grid>
                </Grid>

                <Box sx={{ width: "75vw", minHeight: "100vh" }}>
                    <Grid container style={{ marginTop: "6vh" }} >
                        {plants.map((plant) => (
                            <Grid item lg={4} xs={12} key={plant.id} columnSpan={1}>
                                <Plant search={search} userCart={userCart} setUserCart={setUserCart} currentUser={currentUser} plant={plant} />
                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </Box>
        </>
    )
}

export default PlantsContainer