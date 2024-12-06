import React from 'react';
import {Box, Typography} from '@mui/material';

const PlayerCard = ({name,number,photo}) => {
    return(
        <>
            <Box
                sx={{
                    displax:'flex',
                    flexDirection:'column',
                    alignItems: 'center',
                    border: '1px solid #ddd',
                    padding: '16px',
                    boxShadow: 10,
                    width: '150px',
                    height: '250px',
                    backgroundColor: 'f9f9f9',
                }}
            >
                <Box
                    component='img'
                    src = {photo}
                    sx={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '10%',
                        objectFit: 'cover',
                        marginBottom: '8px'
                    }}
                />
                <Typography variant="h6" sx={{ fontSize:'16px',fontWeight:'bold', textAlign: 'center'}}>
                    {name}
                </Typography>
                <Typography variant="body2" sx={{fontSize:'14px', fontWeight:'bold', textAlign: 'center'}}>
                    Dorsal: {number}
                </Typography>
            </Box>
        </>
    );
}

export default PlayerCard;
