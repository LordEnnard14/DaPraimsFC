import { Typography } from '@mui/material';
import { Container, Box } from '@mui/system';
import React from 'react';
import Header from '../COMPONENTES/Header';
import DP2 from '../IMAGENES/dp3.jpeg';
import DP3 from '../IMAGENES/dp6.jpeg';
import DP4 from '../IMAGENES/dp5.jpeg';
import BackgroundImage from '../IMAGENES/fondo1.jpg';

const History = () => {
    const images = [
        { img: DP2, title: "Inicios familiares", text: "Todo comenzó en el año 2013, cuando un grupo de primos de la familia Churampi Garibaldi decidieron reunirse para jugar pequeños partidos de fútbol. Lo que comenzó como encuentros informales para pasar el tiempo, pronto se convirtió en una tradición familiar sólida." },
        { img: DP3, title: "El complejo de Matachico", text: "La elección del lugar favorito para jugar fue el complejo deportivo de Matachico, fundado en los años 1940. Aunque actualmente está en proceso de remodelación, sigue siendo el lugar donde todos sienten una conexión especial y un fuerte sentido de pertenencia." },
        { img: DP4, title: "Formación del equipo", text: "Desde 2019 y 2020, formar un equipo sólido no fue fácil debido a las diferencias en experiencia y edad entre los primos, especialmente entre los más jóvenes. Sin embargo, a partir del 2022, finalmente se logró definir un equipo titular compuesto por 9 primos y 2 tíos, quienes trabajan juntos con esfuerzo y dedicación." }
    ];

    return (
        <>
            <Header />
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
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
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 1,
                    }}
                />
                
                {/* Contenido principal */}
                <Container sx={{ position: 'relative', zIndex: 2, paddingTop: '20px' }}>
                    {images.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                alignItems: "center",
                                mb: 3,
                            }}
                        >
                            {/* Imagen */}
                            <Box
                                component="img"
                                src={item.img}
                                alt={`Imagen ${index + 1}`}
                                sx={{
                                    width: '180px',
                                    height: 'auto',
                                    boxShadow: 5,
                                    border: '10px solid white',
                                    borderRadius: "3%",
                                    transform: index === 0 ? 'rotate(-90deg)' : 'none',
                                    mr: index % 2 === 0 ? 10 : 0,
                                    ml: index % 2 !== 0 ? 10 : 0
                                }}
                            />
                            
                            {/* Texto y subtítulo */}
                            <Box sx={{ ml: index % 2 === 0 ? 15 : 0 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: "white" }}>
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '15px',
                                        color: "white",
                                        textAlign: "justify",
                                        maxWidth: "400px"
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Container>
            </Box>
        </>
    );
};

export default History;
