import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {NavLink} from 'react-router-dom'




export default function SignInSide({onLogin}) {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
      history.push('/dashboard')
    }
    );
  }
  

  return (
  <div style={{background: 'black', height:'100vh', width: '100vw'}}>
      <Grid container component="main" sx={{ height: '115vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://static.independent.co.uk/2021/04/14/09/best%20house%20plants%20indybest.jpg?width=1200&auto=webp&quality=75)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
       
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{background: '#fcf9f3'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '25vh'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#224229' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={e => handleSubmit(e)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                autoComplete="email"
                autoFocus
                color="success"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
                color="success"
              />
           
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Button variant="outlined" style={{marginLeft: '6vw', border: '1px solid #224229', borderRadius: 20}} component={NavLink} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
      </div>
   
  );
}