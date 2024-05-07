import React from 'react'
import { Box, Grid, Typography, Stack } from '@mui/material'
import redux from '../images/redux.svg'
import firebase from '../images/firebase.png'
import mui from '../images/mui.png'
import react from '../images/react.png'
import js from '../images/js.png'
import css3 from '../images/css3.png'
import html5 from '../images/html5.png'
import bootstrap from '../images/bootstrap.png'
import node_js from '../images/node_jsmodified-removebg-preview.png'
import mongo_db from '../images/mongo_db.png'
import express_js from '../images/express_js-modified.png'


const ProfessionalSkills = () => {

    const professionalSkills = [
        { tag: 'HTML 5', img: html5, color: '#e34f27', width: '30px', border: '2px solid #e34f27' },
        { tag: 'CSS 3', img: css3, color: '#337ce4', width: '25px', border: '2px solid #337ce4' },
        { tag: 'Java Script', img: js, color: '#ffa500', width: '30px', border: '2px solid #ffa500' },
        { tag: 'React JS', img: react, color: '#087ea3', width: '30px', border: '2px solid #087ea3' },
        { tag: 'Bootstrap', img: bootstrap, color: '#8811fb', width: '35px', border: '2px solid #8811fb' },
        { tag: 'Material UI', img: mui, color: '#007fff', width: '30px', border: '2px solid #007fff' },
        { tag: 'Firebase', img: firebase, color: '#ffa500', width: '30px', border: '2px solid #ffa500' },
        { tag: 'Redux', img: redux, color: '#764abc', width: '30px', border: '2px solid #764abc' },
        //
        { tag: 'Node.js', img: node_js, color: '#5e9a55', width: '30px', border: '2px solid #5e9a55' },
        { tag: 'Mongo DB', img: mongo_db, color: '#00ee64', width: '30px', border: '2px solid #00ee64' },
        { tag: 'Express.js', img: express_js, color: '#ffffff', width: '30px', border: '2px solid #ffffff' },

    ]

    return (
        <>
            <Grid container
                sx={{
                    height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' },
                    width: '100%', backgroundColor: '#22252c',
                }}>
                <Grid item xs={10} sm={10} md={10} m={'auto'}>
                    <Box sx={{ margin: '10em auto ', }}>
                        <Typography
                            sx={{
                                textAlign: 'center', fontSize: '3em',
                                fontWeight: '600', color: '#17D396', marginBottom: 5
                            }}>Professional Skills</Typography>
                        <Stack>
                            <Box>
                                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                                    {professionalSkills.map((e, i) =>
                                        <li className='professionalSkills' key={i} style={{ color: e.color, border: e.border }}>
                                            <span>{e.tag}</span>
                                            <img src={e.img} alt="" width={e.width} />
                                        </li>)}

                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{}}>
                        <Typography sx={{
                            textAlign: 'center', fontSize: '3em',
                            fontWeight: '600', color: '#17D396', marginBottom: 5
                        }}>Some of My Work</Typography>
                    </Box>

                </Grid>

            </Grid >
        </>
    )
}

export default ProfessionalSkills