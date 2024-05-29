import { Box, Grid, Typography, Stack } from '@mui/material'
import { professionalSkills } from '../utils/content'


const ProfessionalSkills = () =>
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


export default ProfessionalSkills