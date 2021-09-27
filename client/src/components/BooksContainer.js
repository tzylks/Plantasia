import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
import Books from './Books'
import Grow from '@mui/material/Grow';
import { Parallax } from 'react-scroll-parallax';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import PersistDrawer from './Drawer';
import Header from './Header'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
        marginLeft: '5vw',
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



function BooksContainer({  setUserCart, userCart, books, searchBooks, setSearchBooks, currentUser }) {
    const classes = useStyles();
    const history = useHistory();

    function onChangeSearch(e) {
        e.preventDefault()
        setSearchBooks(e.target.value)
    }

    return (
        <>
        <Box style={{position: 'fixed'}}>
            <NavBar userCart={userCart} />
            <Box style={{ height: '5vh', width: '100vw', background: '#224229', color: '#fcf9f3', position: 'relative' }}>
                <Typography variant="h6" style={{ position: 'absolute', bottom: "0", center: '0', marginLeft: '38vw', lineHeight: '50px' }}>Free Shipping on Orders $75+ Shop Now</Typography>
            </Box>
        </Box>

            

            <PersistDrawer />


            <Box sx={{ marginLeft: '23vw' }}>
                <Grid container>
                    <Grid item lg={12} xs={12}>
                        <Box style={{ marginTop: '23vh', marginLeft: '2vw', display: 'flex' }}>
                            <Typography variant='h4' style={{ color: '#224229', fontSize: '50px', marginRight: '12vw' }}>
                                Books
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
                                    placeholder="Search Books"
                                    autoFocus="true"
                                    value={searchBooks}
                                    onChange={e => onChangeSearch(e)}
                                />
                            </div>
                        </Box>

                    </Grid>
                </Grid>

                <Box sx={{ width: "75vw", minHeight: "100vh" }}>
                    <Grid container style={{ marginTop: "6vh" }} >
                        {books.map((book) => (
                            <Grid item lg={4} xs={12} key={book.id} columnSpan={1}>
                                <Books userCart={userCart} setUserCart={setUserCart} currentUser={currentUser} book={book} />
                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </Box>
        </>
    )
}

export default React.memo(BooksContainer)