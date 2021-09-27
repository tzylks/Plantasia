import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { OpenWithTwoTone } from '@material-ui/icons';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';

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

function PersistDrawer({ onLogout, state, toggleDrawer }) {
  const classes = useStyles();
  // const [state, setState] = useState(false);

  // function toggleDrawer() {
  //   setState(!state);
  // };


  let CustomListItem = ({ to, primary }) => (

    <ListItem
      button
      component={NavLink}
      to={to}

    >
      <ListItemText primary={primary} />
    </ListItem>


  )

  function onHandleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    })
      .then(() => onLogout())
  }

  return (
    <div style={{marginTop: '37vh', height: '30vh', position: 'absolute', zIndex: '-1'}}>
      <Box style={{position: 'relative', height: '30vh'}}>
      
      
      
        <List className={classes.list}>

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
        <Button variant='outlined' style={{background: '#fcf9f3', width: '18vw', height: '6vh', marginLeft: '3vw', color: '#224229'}}>Clear Filters</Button>
        
     

      </Box>
    </div>
  )
}

export default PersistDrawer;