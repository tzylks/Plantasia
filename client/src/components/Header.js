import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Box } from '@material-ui/core'
import Grid from '@mui/material/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
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
  }
}));

function Header({ search, setSearch, currentUser, onLogout }) {
  const [hoverMe, setHoverMe] = useState(false)
  const classes = useStyles();
  const history = useHistory();

  function onSetHover() {
    setHoverMe(!hoverMe)
  }

  function onChangeSearch(event) {
  
    setSearch(event.target.value)
  }

  function onHandleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    })
      .then(() => onLogout())
  }

  return (

    <Grid container>
    <Grid item lg={12} xs={12}>
        <Box style={{ marginTop: '17vh', marginLeft: '2vw', display: 'flex' }}>
            <Typography variant='h4' style={{ color: '#224229', fontSize: '50px' }}>
                Indoor Plants
            </Typography>
            <div className={classes.search} style={{flexDirection: 'row', marginLeft: '30vw'}}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase 
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }} 
                    placeholder="Search Plants" 
                    disableAutoFocus
                    value={search} 
                    onChange={e => onChangeSearch(e)}
                />
            </div>
        </Box>
        
    </Grid>
</Grid>




  )
}

export default Header