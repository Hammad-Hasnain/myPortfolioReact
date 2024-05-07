import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const AcademicSkills = () => {
    return (
        <>
            <Grid container sx={{ backgroundColor: '#17D396' }}>
                <Grid item width={'100%'} >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, padding: '30px ' }}>
                        <Box>
                            <Typography sx={{ color: '#212529', fontSize: '2em', fontWeight: 'bold', fontFamily: 'monospace' }}>Mern Stack Web Developer </Typography>
                            <Typography sx={{ color: 'whiteSmoke', textAlign: 'center' }}>May 2023 - Now | Jawan Pakistan </Typography>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AcademicSkills