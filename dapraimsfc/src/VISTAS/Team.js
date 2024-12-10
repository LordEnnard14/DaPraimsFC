import React from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';
import Header from '../COMPONENTES/Header';
import PlayerCard from '../COMPONENTES/PlayerCard';
import P1 from '../IMAGENES/Andres.jpeg';
import P2 from '../IMAGENES/Arturo.jpeg';
import P3 from '../IMAGENES/Gonzalo.jpeg';
import P4 from '../IMAGENES/Alvin.jpeg';
import P5 from '../IMAGENES/Marcelo.jpeg';
import P6 from '../IMAGENES/Sebastian.jpeg';
import P7 from '../IMAGENES/Leonardo.jpeg';
import P8 from '../IMAGENES/Mathias.jpeg';
import P9 from '../IMAGENES/Valentino.jpeg';
import P10 from '../IMAGENES/Kevin.jpeg';
import Backg from '../IMAGENES/PRAIMS.jpg';

const players = [
    { id:1, name: 'Andrés Churampi', number: 14, photo: P1, position: 'Mediocampista' },
    { id:2,name: 'Arturo Churampi', number: 24, photo: P2, position: 'Mediocampista' },
    { id:3,name: 'Gonzalo Churampi', number: 10, photo: P3, position: 'Delantero' },
    { id:4,name: 'Alvin Churampi', number: 9, photo: P4, position: 'Defensa' },
    { id:5,name: 'Marcelo López', number: 7, photo: P5, position: 'Delantero' },
    { id:6,name: 'Andrés Esteban', number: 2, photo: P6, position: 'Defensa' },
    { id:7,name: 'Leonardo Banda', number: 4, photo: P7, position: 'Defensa' },
    { id:8,name: 'Mathias Churampi', number: 8, photo: P8, position: 'Defensa' },
    { id:9,name: 'Valentino Churampi', number: 11, photo: P9, position: 'Mediocampista' },
    { id:10,name: 'Jim Esteban', number: 12, photo: P10, position: 'Arquero' },
];

const Team = () => {
    const groupByPosition = players.reduce((acc, player) => {
        const { position } = player;
        if (!acc[position]) acc[position] = [];
        acc[position].push(player);
        return acc;
    }, {});

    const positionOrder = ['Arquero', 'Defensa', 'Mediocampista', 'Delantero'];

    return (
        <>
            <Header />
            <Box
                sx={{
                    backgroundImage: `url(${Backg})`,
                    backgroundSize: 'auto',
                    backgroundPosition: 'top left',
                    backgroundRepeat: 'repeat',
                    minHeight: '100%',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    }}
                />
                
                <Container sx={{ position: 'relative', zIndex: 2, paddingTop: '20px' }}>
                    {positionOrder.map(position => (
                        groupByPosition[position] ? (
                            <Box key={position} sx={{ mb: 4 }}>
                                {/* Subtítulo centrado */}
                                <Typography
                                    variant="h4"
                                    align="center"
                                    sx={{ color: 'white', mb: 2, fontFamily: "'Impact', fantasy" }}
                                >
                                    {position.toUpperCase() === "ARQUERO" ? "ARQUEROS" :
                                    position.toUpperCase() === "DEFENSA" ? "DEFENSAS" :
                                    position.toUpperCase() === "MEDIOCAMPISTA" ? "MEDIOCAMPISTAS" : "DELANTEROS"}
                                </Typography>

                                {/* Grid centrado */}
                                <Grid container justifyContent="center" spacing={3}>
                                    {groupByPosition[position].map(player => (
                                        <Grid item xs={12} sm={6} md={3} key={player.name}
                                              sx={{
                                                  display: 'flex',
                                                  justifyContent: 'center',
                                                  alignItems: 'center'
                                              }}
                                        >
                                            <PlayerCard id= {player.id} name={player.name} number={player.number} photo={player.photo} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        ) : null
                    ))}
                </Container>
            </Box>
        </>
    );
};

export default Team;
