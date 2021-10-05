import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'






function SignUp({ onLogin }) {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)

  const history = useHistory()

  function onSubmitSignUp(e) {
    e.preventDefault()
    const newObj = {
      username: username,
      email: email,
      password: password
    }

    fetch('/users', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
      .then(res => res.json())
      .then(onLogin)
    history.push("/dashboard")
  }


  return (
    <div style={{ background: 'black', height: '100vh', width: '100vw' }}>
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
            backgroundColor: 'black',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ background: '#fcf9f3' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '25vh',

            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#224229' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" style={{ color: '#224229' }}>
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={e => onSubmitSignUp(e)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                
                fullWidth
                placeholder="Username"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required='true'
                autoComplete="username"
                autoFocus
                color="success"
                style={{ border: '10px', borderColor: '#224229' }}
              />
               <TextField
                margin="normal"
                
                fullWidth
                placeholder="Email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required='true'
                autoComplete="email"
                autoFocus
                color="success"
                style={{ border: '10px', borderColor: '#224229' }}
              />
              <TextField
                margin="normal"
                
                fullWidth
                color="success"
                required='true'
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Button variant="outlined" style={{ marginLeft: '6vw', border: '1px solid #224229', borderRadius: 20 }} component={NavLink} to="/login" variant="body2">
                    {"Already have an account? Login"}
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

export default SignUp