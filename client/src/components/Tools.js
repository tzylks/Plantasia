import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import { ThemeProvider } from "@material-ui/core"
import Theme from "./Theme.js"
import {useState} from 'react'



function Tools({ tool, currentUser, setUserCart, userCart }) {
    const [addButton, setAddButton] = useState(false)

    function addToCart() {

        fetch('/poly_carts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                cartable_type: 'Tool',
                cartable_id: tool.id
            })
        })
            .then(res => res.json())
            .then(data => setUserCart([...userCart, data]))
    }

    return (
        <>
            <ThemeProvider theme={Theme}>
                {/* sx={{ marginLeft: '5vw', marginRight: '10vw', display: 'flex' }} */}
                <Box>

                    <Grow in='true' style={{ transformOrigin: '0 50 0', timeout: 1000 }}>
                        <Card sx={{
                            maxWidth: 300,
                            boxShadow: 'none'
                            // boxShadow: "10px 10px 20px 5px rgba(255,123,123,0.18)"
                        }}>
                            <Box style={{ position: 'relative' }} onMouseEnter={() => setAddButton(true)} onMouseOut={() => setAddButton(false)}>
                                <CardMedia
                                    component="img"
                                    alt="Tool"
                                    height="350"
                                    image={tool.image}
                                >
                                </CardMedia>
                                {addButton ? <Button variant="outlined" onMouseEnter={() => setAddButton(true)} onMouseOut={() => setAddButton(false)} onClick={addToCart} style={{ width: 280, background: "#f6cfb2", color: '#224229', position: 'absolute', top: '86%', left: '3.5%', borderRadius: 20, borderColor: '#224229', zIndex: '2' }}>Add to Cart</Button> : null}
                            </Box>
                            <CardContent
                                style={{ background: '#fcf9f3' }}
                            >
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Playfair Display" }}>
                                    {tool.name} ${tool.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grow>
                </Box>
            </ThemeProvider>

        </>
    );
}

export default Tools