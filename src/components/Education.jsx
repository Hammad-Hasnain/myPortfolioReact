import React from 'react'
import { Box, Grid, Typography, Stack } from '@mui/material'


const Education = () => {
    return (
        <>
            <Grid container
                sx={{
                    height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' },
                    width: '100%', backgroundColor: '#313741',
                }}>
                <Grid item xs={10} sm={10} md={10} margin={'10em auto'}  >
                    <Typography
                        sx={{
                            textAlign: 'center', fontSize: '3em',
                            fontWeight: '600', color: '#17D396', marginBottom: 5
                        }}>Education</Typography>
                    <Stack>
                        <Box sx={{ padding: '20px' }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: '30px ' }}>
                                <Box sx={{ width: 'fit-content', padding: '8px', border: '3px solid #17D396', borderRadius: '50%' }} >
                                    <Box sx={{ height: '10px', width: '10px', backgroundColor: '#17D396', borderRadius: '50%' }}></Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#17D396', fontSize: '1.5em' }}>Undergraduate</Typography>
                                    <Typography sx={{ color: 'whiteSmoke' }}>May 2021 - Now | Federal Urdu University | BSCS(Bachelor in Computer Science)</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: '30px ' }}>
                                <Box sx={{ width: 'fit-content', padding: '8px', border: '3px solid #17D396', borderRadius: '50%' }} >
                                    <Box sx={{ height: '10px', width: '10px', backgroundColor: '#17D396', borderRadius: '50%' }}></Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: '#17D396', fontSize: '1.5em' }}>Intermediate </Typography>
                                    <Typography sx={{ color: 'whiteSmoke' }}> 2019 - 2021 |  Army Public School & College  </Typography>
                                </Box>


                            </Box>



                        </Box>
                    </Stack>

                </Grid>
            </Grid>
        </>
    )
}

export default Education