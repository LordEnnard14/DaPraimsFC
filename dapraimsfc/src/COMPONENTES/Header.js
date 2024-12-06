import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Logo from "../IMAGENES/LO.jpeg";

const Header = () =>{
    const navigate = useNavigate();
    return(
        <AppBar position="static" sx={{backgroundColor: "black"}}>
            {/**Aquí irá el título */}
            <Toolbar sx={{justifyContent: "center",backgroundColor:"black"}}>
                <Box sx={{display:"flex", alignItems:"center"}}>
                    <Box
                        component="img"
                        alt="Logo"
                        src={Logo}
                        sx={{
                            width:50,
                            height:50,
                            mr:5, /*Esto sirve para determinar el espacio entre la img y el texto*/
                            borderRadius: "50%"
                        }}
                    />
                <Typography variant="h5" sx={{color:"white", textAlign: "center", fontWeight: "bold"}}>
                    DA' PRAIMS FC
                </Typography>
                </Box>
            </Toolbar>


            {/**Aqui ira el menu de navegación */}
            <Toolbar sx={{justifyContent:"center",backgroundColor: "gold"}}>
                <Button onClick={()=>navigate("/")}
                sx={{color:"black", fontWeight: "bold", '&:hover':{
                    backgroundColor: "black",
                    color: "white"
                }}}>INICIO</Button>
                <Button onClick={()=>navigate("/History")} 
                sx={{color:"black", fontWeight: "bold", '&:hover':{
                    backgroundColor: "black",
                    color: "white"
                }}}>HISTORIA</Button>
                <Button onClick={()=>navigate("/Team")} 
                sx={{color:"black", fontWeight: "bold", '&:hover':{
                    backgroundColor: "black",
                    color: "white"
                }}}>EQUIPO</Button>
                <Button onClick={()=>navigate("/Gallery")} 
                sx={{color:"black", fontWeight: "bold", '&:hover':{
                    backgroundColor: "black",
                    color: "white"
                }}}>GALERÍA</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;