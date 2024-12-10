import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const PlayerCard = ({ id, name, number, photo }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/Player/${id}`);
    };
    return (
        <Box
            onClick = {handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                width: '170px',
                height: '300px',
                backgroundColor: 'black',
                borderRadius: "14px",
                boxShadow: 5,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: 'white',
                    boxShadow: 12,
                },
                '&:hover h6, &:hover body2': {
                    color: 'black',
                }
            }}
        >
            <Box
                component="img"
                src={photo}
                alt={name}
                sx={{
                    width: '160px',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '10%',
                    marginBottom: '12px',
                    border: '5px solid white',
                }}
            />
            <Typography
                variant="h6"
                sx={{ color: "white", fontSize: '20px', fontFamily: "'Impact', fantasy" }}
            >
                {name}
            </Typography>
            <Typography
                variant="body2"
                sx={{ color: "gold", mt: "4px", fontSize: '50px', fontFamily: "'Impact', fantasy" }}
            >
                {number}
            </Typography>
        </Box>

    );
}

export default PlayerCard;
