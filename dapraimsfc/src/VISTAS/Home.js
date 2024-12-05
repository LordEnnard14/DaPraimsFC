import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Header from '../COMPONENTES/Header';
import DP1 from "../IMAGENES/dp1.jpeg";

const Home = () =>{

    return (
        <>
            <Header/>
            <Container sx={{textAlign:"Center",mt:4}}>
                <Box
                    component="img"
                    alt="img1"
                    src={DP1}
                    
                />
                    <Typography variant="h6">Presentación</Typography>
            </Container>
        </>
    );
};

export default Home;