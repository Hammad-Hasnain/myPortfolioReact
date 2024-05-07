import { Box, Grid, Typography, Stack } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import img2 from '../images/myPIcRotated.png'
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';



const About = () => {
    return (
        <>
            <Grid container sx={{
                height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }, width: '100%', backgroundColor: '#22252c',
                display: 'flex', justifyContent: 'center',
            }}>
                <Grid item xs={12} sm={10} md={5} padding={'50px'}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Box sx={{ maxWidth: '400px', border: '7px solid #17D396' }}>
                        <img src={img2} alt="" width={'100%'} style={{ position: 'relative', top: '35px', left: '-35px' }} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={10} md={5}
                    id='about'
                    sx={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }} >
                    <Box color={'whitesmoke'} p={2} >
                        <Typography sx={{ padding: '20px 0', fontSize: '2.5em', color: '#17D396', fontWeight: '600', textAlign: 'center' }}>
                            ABOUT ME</Typography>
                        <Typography sx={{ fontSize: '1.2em', textAlign: 'justify' }}> I'm young energetic Web Developer, seeking employment in
                            a reputable organization to employ my potential for the
                            growth of organization and enhance my skills by working with
                            a reputable organization. Player of

                            <span style={{ color: '#17d396' }}> HTML5</span>,
                            <span style={{ color: '#17d396' }}> CSS3</span>,
                            <span style={{ color: '#17d396' }}> Java Script</span>,
                            <span style={{ color: '#17d396' }}> React JS</span>,
                            <span style={{ color: '#17d396' }}> Redux </span>,
                            <span style={{ color: '#17d396' }}> Firebase</span>,
                            <span style={{ color: '#17d396' }}> GitHub</span>,
                            <span style={{ color: '#17d396' }}> Redux</span>,
                            <span style={{ color: '#17d396' }}> Node.js</span>,
                            <span style={{ color: '#17d396' }}> Mongo DB</span>, &
                            <span style={{ color: '#17d396' }}> Express</span>,
                        </Typography>
                        <Typography sx={{ padding: '8px', fontSize: '1.3em' }}>
                            <span style={{ color: '#17D396', fontWeight: '600' }}> NAME:</span> <span>Hammad Hasnain</span> </Typography>
                        <Typography sx={{ padding: '8px', fontSize: '1.3em' }}>
                            <span style={{ color: '#17D396', fontWeight: '600' }}> DATE OF BIRTH:</span> <span>Jan 6<sup>th</sup>,2003</span></Typography>
                        <Typography sx={{ padding: '8px', fontSize: '1.3em' }}>
                            <span style={{ color: '#17D396', fontWeight: '600' }}>NATIONALITY:</span> <span>Pakistani</span> </Typography>
                        <Typography sx={{ padding: '8px', fontSize: '1.3em' }}>
                            <span style={{ color: '#17D396', fontWeight: '600' }}>ADDRESS:</span> <span>House # R-52 Nazar Ali Town Malir,Karachi</span> </Typography>
                        <Typography sx={{ padding: '8px', fontSize: '1.3em' }}>
                            <span style={{ color: '#17D396', fontWeight: '600' }}>PHONE:</span> <span>+923231203012</span></Typography>
                        <Typography sx={{ padding: '8px', fontSize: '1.3em' }}>
                            <span style={{ color: '#17D396', fontWeight: '600' }}> E-MAIL:</span> <span>hammadhasnain05@gmail.com</span></Typography>

                    </Box>
                </Grid>
                <Grid item xs={10} sm={10} md={10} margin={'10em auto'}  >
                    <Typography
                        sx={{
                            textAlign: 'center', fontSize: '3em', fontWeight: '600',
                            color: '#17D396', marginBottom: 5
                        }}>Interests</Typography>
                    <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: 2 }}>

                        <Box sx={{}}>

                            <Box sx={{
                                backgroundColor: 'transparent',
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                border: '1px solid #17D396',
                                padding: '15px',
                                borderRadius: '50%',
                                color: '#17D396',
                                fontWeight: 'bold',
                                transition: '0.5s ',
                                position: 'relative',
                                "&:hover": {

                                    backgroundColor: '#17D396',
                                    color: '#000',
                                    cursor: 'pointer',
                                    "&::before": {
                                        content: '"Coding"',
                                        display: 'inline-block',
                                        position: 'absolute',
                                        top: '68px',
                                        left: '5px',
                                        color: '#17D396'

                                    }

                                },
                                // "&::before": {
                                //     content: '"Coding"',
                                //     display: 'table',

                                // }

                            }}><CodeIcon sx={{ fontSize: '35px', hover: { color: 'red', fontSize: '50px' } }} /> </Box>
                            {/* <Typography>Web Development</Typography> */}

                        </Box>
                        <Box
                            sx={{
                                backgroundColor: 'transparent',
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                border: '1px solid #17D396',
                                padding: '15px',
                                borderRadius: '50%',
                                color: '#17D396',
                                fontWeight: 'bold',
                                transition: '0.5s ',
                                "&:hover": {

                                    backgroundColor: '#17D396',
                                    color: '#000',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    "&::before": {
                                        content: '"Exploring "',
                                        display: 'inline-block',
                                        position: 'absolute',
                                        top: '68px',
                                        left: '5px',
                                        color: '#17D396'

                                    }

                                }
                            }}><TravelExploreRoundedIcon sx={{ fontSize: '35px' }} /></Box>

                    </Stack>
                </Grid>

            </Grid>
        </>
    )
}

export default About