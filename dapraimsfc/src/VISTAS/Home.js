import React from 'react';
import { Box, Container, Typography, Grid } from "@mui/material";
import Header from '../COMPONENTES/Header';
import DP1 from "../IMAGENES/dp1.jpeg";
import Praims from "../IMAGENES/PRAIMS.jpg";
import BackgroundImage from "../IMAGENES/fondo2.jpeg";

const Home = () => {
    return (
        <>
            <Header />
            {/* Contenedor principal para el fondo */}
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`, // Imagen de fondo
                    backgroundRepeat: "repeat", // Repetir la imagen
                    backgroundSize: "auto", // Tamaño de la imagen en su tamaño natural
                    backgroundAttachment: "scroll", // La imagen se desplaza con el contenido
                    minHeight: "100vh", // Asegurar que cubra todo el alto de la pantalla
                    padding: "20px", // Espaciado para el contenido
                }}
            >
                <Container
                    sx={{
                        textAlign: "center",
                        mt: 4,
                        backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo blanco semitransparente
                        borderRadius: "10px",
                        padding: "20px",
                    }}
                >
                    {/* Imagen de presentación */}
                    <Box
                        component="img"
                        alt="img1"
                        src={DP1}
                        sx={{
                            borderRadius: "10px",
                            width: "700px",
                            height: "450px",
                            marginBottom: "20px",
                        }}
                    />

                    {/* Texto de Bienvenida */}
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 4,
                            fontFamily: "'Impact', fantasy",
                        }}
                    >
                        BIENVENIDOS
                    </Typography>

                    {/* ¿Quiénes somos? */}
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 2,
                            fontFamily: "'Impact', fantasy",
                        }}
                    >
                        ¿QUIÉNES SOMOS?
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mb: 4, fontSize: "1.1rem", color: "black" }}
                    >
                        Somos un equipo de fútbol conformado principalmente por 10 primos. Buscamos ser el mejor equipo familiar que jamás se haya conocido.
                    </Typography>

                    {/* Imagen secundaria */}
                    <Box
                        component="img"
                        alt="img2"
                        src={Praims}
                        sx={{
                            borderRadius: "10px",
                            width: "700px",
                            height: "450px",
                            marginBottom: "20px",
                        }}
                    />

                    {/* Valores */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            fontFamily: "'Impact', fantasy",
                        }}
                    >
                        VALORES
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {/* Valor 1 */}
                        <Grid item xs={12} sm={4}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", mb: 1 }}
                            >
                                UNIÓN FAMILIAR
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#555" }}>
                                Siempre trabajamos juntos, respetando y apoyándonos en todas las circunstancias.
                            </Typography>
                        </Grid>

                        {/* Valor 2 */}
                        <Grid item xs={12} sm={4}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", mb: 1 }}
                            >
                                DISCIPLINA
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#555" }}>
                                Creemos que el esfuerzo y la dedicación son esenciales para alcanzar el éxito.
                            </Typography>
                        </Grid>

                        {/* Valor 3 */}
                        <Grid item xs={12} sm={4}>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", mb: 1 }}
                            >
                                PASIÓN
                            </Typography>
                            <Typography variant="body1" sx={{ color: "#555" }}>
                                Amamos lo que hacemos y damos lo mejor de nosotros en cada partido.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Home;
