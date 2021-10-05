import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink, useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import * as React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import TitleIcon from '@mui/icons-material/Title';
import LightModeIcon from '@mui/icons-material/LightMode';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    color: '#224229'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
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
  },
  customBadge: {
    background: '#224229'
  }
}));

function NavBar({ userCart, onLogout }) {
  const [hoverMe, setHoverMe] = useState(false)
  const [cartItems, setCartItems] = useState(false)
  const [openTwo, setOpenTwo] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  function onHandleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    })
    onLogout()
  }

  const handleClickTwo = () => {
    setOpenTwo(!openTwo);
  };


  return (
    <>
      {/* <Box sx={{width: '100vw', marginTop: '10vh'}}>
            <Typography variant="body">Order now and save $25</Typography>
       </Box> */}
      <div style={{ cursor: "url('https://img.icons8.com/plasticine/100/000000/cursor.png') 39 39, auto;", width: "83vw", float: "right" }}>

        <AppBar position="absolute" style={{ background: "#fcf9f3", boxShadow: 'none', width: '100vw', marginTop: '5vh' }}>
          <Toolbar>
            <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
              <Typography variant="h4" style={{ textDecoration: 'none', color: '#224229', padding: '0', marginLeft: '3vw', marginRight: '23vw' }}>
                plantasia
              </Typography>
            </NavLink>

            <Box style={{ justifyContent: 'center', marginLeft: '2.8vw' }}>

              <Button component={NavLink} to="/purchase_books">
                <Typography variant="h6" style={{ color: "#224229", paddingRight: '20px' }}>
                  Books
                </Typography>
              </Button>
              <Button component={NavLink} to="/purchase_plants">
                <Typography variant="h6" style={{ color: "#224229", paddingRight: '20px' }}>
                  Plants
                </Typography>
              </Button>
              <Button component={NavLink} to="/purchase_tools">
                <Typography variant="h6" style={{ color: "#224229", paddingRight: '20px' }}>
                  Tools
                </Typography>
              </Button>

            </Box>


            
          <Box style={{marginLeft: '22vw'}}>
            <Button component={NavLink} to={"/login"}>
              <PersonIcon />
            </Button>

            <Button component={NavLink} to={"/cart"}>
              <Badge badgeContent={userCart ? userCart.length : null} color="error">
                <ShoppingCartRoundedIcon style={{ color: 'black' }} />
              </Badge>
            </Button>

            <Button onClick={onHandleLogout}>
              <LogoutIcon />
            </Button>
          </Box>

          </Toolbar>
        </AppBar>

      </div>
    </>
  )
}

export default React.memo(NavBar)