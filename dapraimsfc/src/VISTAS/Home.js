import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Header from '../COMPONENTES/Header';
import DP1 from "../IMAGENES/dp1.jpeg";
import Praims from "../IMAGENES/PRAIMS.jpg";

const Home = () =>{

    return (
        <>
            <Header/>
            <Container sx={{textAlign:"Center",mt:4}}>
                <Box
                    component="img"
                    alt="img1"
                    src={DP1}
                    sx={{
                        borderRadius: "10px",
                        width: "700px",
                        height: "450px"
                    }}
                />
                    <Typography variant="h6">Presentación</Typography>
                <Box component="img" alt="img2" src={Praims}
                    sx={{
                        borderRadius:"10px",
                        width: "700px",
                        height: "450px"
                    }}
                />
            </Container>
        </>
    );
};

export default Home;