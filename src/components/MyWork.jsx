import React from 'react'
import { Box, Grid } from '@mui/material'
import work1 from '../images/myWork/hackathon.png'
import work2 from '../images/myWork/akka2.png'
import work3 from '../images/myWork/stackgroup.PNG'

const MyWork = () => {

    // const hackathonWeb = () => {
    //     // window.location.replace('https://mr-h-hackathon.netlify.app/')
    //     window.location.href = 'https://hsquare-p-e-commerce.netlify.app/'
    //     // window.open("https://mr-h-hackathon.netlify.app/")
    //     // return <Navigate to="https://mr-h-hackathon.netlify.app/" />
    // }

    // const akkaWeb = () => {
    //     window.location.href = "https://al-kamrankidzacademy.web.app/"
    //     // return <Navigate to="https://al-kamrankidzacademy.web.app/" />
    // }

    // const theStackGroupWeb = () => {
    //     window.location.href = "https://hsquare-p-thestackgroup.netlify.app/"
    // }
    return (
        <>
            < Grid container sx={{
                height: {
                    sx: 'auto',
                    lg: '80vh',
                },
                backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', gap: 2,
                p: 5

            }}>

                <Grid item xs={11} sm={8} md={8} lg={4} overflow={'hidden'}>
                    <Box
                        onClick={() => window.location.href = 'https://hsquare-p-e-commerce.netlify.app/'}
                        sx={{
                            transition: '0.5s',
                            "&:hover": {
                                transform: 'Scale(1.5)',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        <img src={work1} alt="Hackathon" width={'100%'} />
                    </Box>
                </Grid>

                <Grid item xs={11} sm={8} md={8} lg={4} overflow={'hidden'}>
                    <Box
                        onClick={() => window.location.href = "https://al-kamrankidzacademy.web.app/"}
                        sx={{
                            transition: '0.5s',
                            "&:hover": {
                                transform: 'Scale(1.5)',
                                cursor: 'pointer',
                            },
                        }}>
                        <img src={work2} alt="AKKA" width={'100%'} />
                    </Box>
                </Grid>

                <Grid item xs={11} sm={8} md={8} lg={4} overflow={'hidden'}>
                    <Box
                        onClick={() => window.location.href = "https://hsquare-p-thestackgroup.netlify.app/"}
                        sx={{
                            transition: '0.5s',
                            "&:hover": {
                                transform: 'Scale(1.5)',
                                cursor: 'pointer',
                            },
                        }}>
                        <img src={work3} alt="The Stack Group" width={'100%'} />
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default MyWork