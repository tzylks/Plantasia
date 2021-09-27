import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import { Parallax } from 'react-scroll-parallax';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ThemeProvider } from "@material-ui/core"
import Theme from "./Theme.js"



function Tools({ tool, currentUser, setUserCart, userCart }) {


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
                            <div>
                                <CardMedia
                                    component="img"
                                    alt="Tool"
                                    height="350"
                                    image={tool.image}
                                >
                                    
                                </CardMedia>
                            </div>
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
                            <CardActions style={{background: '#fcf9f3'}}>
                            <Button onClick={addToCart} size="small" color="secondary">Add to Cart</Button>
                        </CardActions>
                        </Card>
                    </Grow>
                </Box>
            </ThemeProvider>

        </>
    );
}

export default Tools