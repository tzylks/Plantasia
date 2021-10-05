import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import TitleIcon from '@mui/icons-material/Title';
import LightModeIcon from '@mui/icons-material/LightMode';

const useStyles = makeStyles({
  root: {
    width: 500,

  },
  list: {
    width: 250,
    marginLeft: '3vw',
    height: 'auto'
  },
  fullList: {
    width: 'auto',

  },
  paper: {
    background: 'transparent',
    flexShrink: 0,
    marginTop: '29.3vh',
    maxHeight: '40vh',
    border: "none"
  },
  icons: {
    paddingLeft: '20px',
    paddingTop: '20px',
    fontSize: '50px'
  }


});

function PersistDrawer({ setPlants, plants, lowLight, setLowLight, lowLightSort }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);
  const [openPrice, setOpenPrice] = React.useState(false);

  const [checkAlpha, setCheckAlpha] = React.useState(false);
  const [checkDesc, setCheckDesc] = React.useState(false);
  
  
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickThree = () => {
    setOpenThree(!openThree);
  };

  const handleClickTwo = () => {
    setOpenTwo(!openTwo);
  };


  function descSort() {
    
    let descPlants = plants.sort((a, b) => b.name.localeCompare(a.name))
    setPlants(descPlants)
  }
  function alphaSort() {
    
    let alpha = plants.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

    setPlants(alpha)
  }

  function sortPrice() {
    
    const price = plants.sort((a, b) => a.price.toString().localeCompare(b.price.toString()))
    setPlants(price)
  }

  function sortPriceHigh() {
    const price = plants.sort((a, b) => b.price.toString().localeCompare(a.price.toString()))
    setPlants(price)
  }

 
  return (
    <div style={{ marginTop: '37vh', height: '30vh', position: 'absolute', zIndex: '1', width: '21%', marginLeft: '1vw' }}>
      <Box style={{ position: 'relative', height: '30vh' }}>
     
        <List
          sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClickTwo}>
            <ListItemIcon>
              <TitleIcon />
            </ListItemIcon>
            <ListItemText primary="Name" />
            {openTwo ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openTwo} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => alphaSort()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setCheckAlpha(!checkAlpha)}
                    checked={checkAlpha}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="Ascending" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => descSort()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setCheckDesc(!checkDesc)}
                    checked={checkDesc}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="Descending" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PriceChangeIcon />
            </ListItemIcon>
            <ListItemText primary="Price" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => sortPrice()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setOpenPrice(!openPrice)}
                    checked={openPrice}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="Low-High" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onChange={() => sortPriceHigh()}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => setCheckDesc(!checkDesc)}
                    checked={checkDesc}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="High-Low" />
              </ListItemButton>

            </List>
          </Collapse>

          <ListItemButton onClick={handleClickThree}>
            <ListItemIcon>
              <LightModeIcon />
            </ListItemIcon>
            <ListItemText primary="Lighting" />
            {openThree ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openThree} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
             
               

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    onClick={() => lowLightSort()}
                    checked={lowLight}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText primary="Low Light" />
              </ListItemButton>

            </List>
          </Collapse>
        </List>



        {/* <List className={classes.list}>

          <Divider />
          <CustomListItem to="/login" primary="Login" color="secondary" />
          <Divider />
          <CustomListItem to="/signup" primary="Signup" />
          <Divider />
          <CustomListItem to="/exercises" primary="Plants" />
          <Divider />
          <CustomListItem to="/pricing" primary="Pricing" />
          <Divider />
          <CustomListItem to="/userdashboard" primary="User Dashboard" />
          <Divider />



        </List>
        <br />
        <Button variant='outlined' style={{background: '#fcf9f3', width: '18vw', height: '6vh', marginLeft: '3vw', color: '#224229'}}>Clear Filters</Button> */}



      </Box>
    </div>
  )
}

export default PersistDrawer;