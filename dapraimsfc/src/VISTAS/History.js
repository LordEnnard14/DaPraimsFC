import { Typography } from '@mui/material';
import { Container, Box} from '@mui/system';
import React, { Component } from 'react';
import Header from '../COMPONENTES/Header';
import DP2 from '../IMAGENES/dp2.jpg';
import DP3 from '../IMAGENES/dp3.jpeg';
import DP4 from '../IMAGENES/dp4.jpeg';
import DP5 from '../IMAGENES/dp5.jpeg';

const History = () => {
    const images = [
        {img:DP2,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla metus tortor, nec imperdiet massa ultrices ut. Suspendisse sed neque urna. In sit amet lacinia ligula, quis condimentum orci. Praesent pharetra ac neque et imperdiet. Etiam pellentesque tincidunt placerat. Mauris sed congue magna. Vivamus placerat leo a arcu volutpat, vitae varius ex ullamcorper. Morbi bibendum massa maximus imperdiet maximus. Phasellus venenatis, leo at lacinia imperdiet, mauris nisi scelerisque tortor, in luctus turpis sem scelerisque quam. In facilisis viverra pretium. Vivamus tempor sagittis augue sit amet ultricies. Donec egestas lorem ut erat hendrerit suscipit."},
        {img:DP3,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla metus tortor, nec imperdiet massa ultrices ut. Suspendisse sed neque urna. In sit amet lacinia ligula, quis condimentum orci. Praesent pharetra ac neque et imperdiet. Etiam pellentesque tincidunt placerat. Mauris sed congue magna. Vivamus placerat leo a arcu volutpat, vitae varius ex ullamcorper. Morbi bibendum massa maximus imperdiet maximus. Phasellus venenatis, leo at lacinia imperdiet, mauris nisi scelerisque tortor, in luctus turpis sem scelerisque quam. In facilisis viverra pretium. Vivamus tempor sagittis augue sit amet ultricies. Donec egestas lorem ut erat hendrerit suscipit."},
        {img:DP4,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla metus tortor, nec imperdiet massa ultrices ut. Suspendisse sed neque urna. In sit amet lacinia ligula, quis condimentum orci. Praesent pharetra ac neque et imperdiet. Etiam pellentesque tincidunt placerat. Mauris sed congue magna. Vivamus placerat leo a arcu volutpat, vitae varius ex ullamcorper. Morbi bibendum massa maximus imperdiet maximus. Phasellus venenatis, leo at lacinia imperdiet, mauris nisi scelerisque tortor, in luctus turpis sem scelerisque quam. In facilisis viverra pretium. Vivamus tempor sagittis augue sit amet ultricies. Donec egestas lorem ut erat hendrerit suscipit."},
        {img:DP5,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla metus tortor, nec imperdiet massa ultrices ut. Suspendisse sed neque urna. In sit amet lacinia ligula, quis condimentum orci. Praesent pharetra ac neque et imperdiet. Etiam pellentesque tincidunt placerat. Mauris sed congue magna. Vivamus placerat leo a arcu volutpat, vitae varius ex ullamcorper. Morbi bibendum massa maximus imperdiet maximus. Phasellus venenatis, leo at lacinia imperdiet, mauris nisi scelerisque tortor, in luctus turpis sem scelerisque quam. In facilisis viverra pretium. Vivamus tempor sagittis augue sit amet ultricies. Donec egestas lorem ut erat hendrerit suscipit."}
    ]
    return(
        <>
            <Header/>
            <Container>
                {images.map((item,index) => (
                    <Box
                    key={index}
                    sx={{
                        display:"flex",
                        flexDirection: index%2 === 0?'row':'row-reverse', //Con esto se puede alternar la dirección
                        alignItems: "center",
                        mb:4 //Esto divide las secciones de imágenes
                    }}
                    > 
                    <Box
                        component="img"
                        src={item.img}
                        alt={`Imagen ${index + 1}`}
                        sx={{
                            width:'300px',
                            height:'auto',
                            boxShadow: 5,
                            mr: index % 2 === 0 ? 2 : 0, // Margen derecho si la imagen está a la izquierda
                            ml: index % 2 !== 0 ? 2 : 0, // Margen izquierdo si la imagen está a la derecha
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize:'15px',
                            color: "black",
                            textAlign: "justify",
                            maxWidth: "400px"
                        }}
                    >
                        {item.text}
                    </Typography>
                    </Box>
                ))}
            </Container>
        </>
    );
}

export default History;