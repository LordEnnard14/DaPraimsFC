import React from 'react';
import {useParams} from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import Header from '../COMPONENTES/Header';
import BackgroundImage from "../IMAGENES/fondo2.jpeg";
import players from '../DATA/players';
import { Container } from '@mui/system';

const PlayerDetails = () => {
    const { id } =useParams();
    const player = players.find(player => player.id === parseInt(id));
    
    if (!player) return <Typography variant="h4">Jugador no encontrado</Typography>;
    return (
        <>
        <Header/>
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
            <Box 
                component = "img"
                alt="background"
                src={player.photo}
                sx={{
                    borderRadius: "10%",
                    width: "200px",
                    height: "300px",
                    mb: "5px"
                }}
            />
            <Typography variant="h3" sx={{ marginBottom: 2}}>
                {player.name}
            </Typography>
            <Typography variant="h5" sx={{fontFamily: "'Impact', fantasy"}}>Dorsal: {player.number}</Typography>
            <Typography variant="h5" sx={{fontFamily: "'Impact', fantasy"}}>Posición: {player.position}</Typography>
            <Typography variant="h5" sx={{fontFamily: "'Impact', fantasy"}}>Fecha de Nacimiento: {player.dob}</Typography>
            <Typography variant="h5" sx={{fontFamily: "'Impact', fantasy"}}>Estatura: {player.height}</Typography>
            <Typography variant="h5" sx={{fontFamily: "'Impact', fantasy"}}>Peso: {player.weight}</Typography>
            <Typography variant="h5" sx={{fontFamily: "'Impact', fantasy"}}>Pie Preferido: {player.preferredFoot}</Typography>
            </Container>
        </Box>
        </>
    );
}



export default PlayerDetails;