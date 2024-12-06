import React from 'react';
import { Grid, Container } from '@mui/material';
import Header from '../COMPONENTES/Header';
import PlayerCard from '../COMPONENTES/PlayerCard';
import P1 from '../IMAGENES/Andres1.png';
import P2 from '../IMAGENES/Arturo1.png';
import P3 from '../IMAGENES/Gonzalo1.png';
import P4 from '../IMAGENES/Alvin1.png';
import P5 from '../IMAGENES/Marcelo1.png';
import P6 from '../IMAGENES/Sebastian1.png';
import P7 from '../IMAGENES/Leonardo1.png';
import P8 from '../IMAGENES/Mathias1.png';

const Team = () =>{
    const players = [
        { name: 'Andrés Churampi', number: 14, photo: P1 },
        { name: 'Arturo Churampi', number: 24, photo: P2 },
        { name: 'Gonzalo Churampi', number: 8, photo: P3 },
        { name: 'Alvin Churampi', number: 9, photo: P4 },
        { name: 'Marcelo López', number: 7, photo: P5 },
        { name: 'Andrés Esteban', number: 2, photo: P6 },
        { name: 'Leonardo Banda', number: 4, photo: P7 },
        { name: 'Mathias Churampi', number: 8, photo: P8 },
      ];
    return(
        <>
        <Header />
        <Container sx={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          {players.map((player, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <PlayerCard name={player.name} number={player.number} photo={player.photo} />
            </Grid>
          ))}
        </Grid>
      </Container>
        </>
    );
}

export default Team;