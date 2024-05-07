import { Box, Stack, Typography, Button as MuiButton, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
// import OffcanvasExample from '../components/Navbar'
import img1 from '../images/myPic2.png'
// import img2 from '../images/myPic2rotated.png'
import img3 from '../images/sirKamran.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import { Image, Web } from '@mui/icons-material'
import './portfolio2.css'
import { Link } from 'react-router-dom'
// import {  Navigate, useNavigate } from 'react-router-dom'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import ClearIcon from '@mui/icons-material/Clear';
import MailIcon from '@mui/icons-material/Mail';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EmailIcon from '@mui/icons-material/Email';

import Navbar from '../components/Navbar'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import HammadHasnainResume from '../file/HammadHasnainResume.pdf'
import About from '../components/About'
import Education from '../components/Education'
import AcademicSkills from '../components/AcademicSkills'
import ProfessionalSkills from '../components/ProfessionalSkills'
import MyWork from '../components/MyWork'





const Portfolio2 = () => {

    const [navMenuChecker, setNavMenuChecker] = useState(false)
    const navMenuHandler = () => {
        navMenuChecker ? setNavMenuChecker(false) : setNavMenuChecker(true)
    }

    const downloadHandler = async (e) => {
        // Assuming your PDF file is stored in your public folder
        const pdfUrl = HammadHasnainResume;
        // const pdfUrl = '../file/resume.pdf';
        // const pdfUrl = '..\file\resume.pdf';

        // Using a hidden <a> element to trigger the download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'filename.pdf');
        document.body.appendChild(link);
        // e.preventDefault()
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div>
            {/* <Box>
                <a href={resume} download >download</a>
            </Box> */}
            <Stack sx={{
                height: { xs: 'auto', sm: 'auto', md: '90vh' },
                backgroundImage: `URL(${img1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center',
            }} >
                <Stack sx={{
                    background: '#17d396d4', height: '100%',
                    position: 'relative',
                }}>

                    <Navbar eventFire={navMenuHandler} />
                    {/* Navbar End */}


                    {/* responsive navbar start*/}
                    <Stack sx={{
                        border: 'none',
                        height: '100vh',
                        width: '100%',
                        backgroundColor: '#000000f7',
                        position: 'absolute',
                        top: 0,
                        // left: 0
                        zIndex: 1,
                        display: navMenuChecker ? 'flex' : 'none',
                    }}>
                        <Box p={1}>
                            <Button onClick={navMenuHandler} className='navMenuDeActiveBtn'>
                                <ClearIcon />

                            </Button>
                        </Box>
                        <Stack sx={{
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box sx={{ width: '100%' }}>
                                <Box>
                                    <ul style={{
                                        listStyleType: 'none',
                                        width: '100%',
                                        padding: '10px',

                                    }}>
                                        <li className='navUlLi'>
                                            <a href={'#home'} onClick={() => setNavMenuChecker(false)}
                                                className='navUlLink'
                                            >
                                                Home
                                            </a></li>
                                        <li className='navUlLi'>
                                            <a href={'#about'} onClick={() => setNavMenuChecker(false)}
                                                className='navUlLink'>
                                                About
                                            </a></li>
                                        <li className='navUlLi'>
                                            <a href={'#contact'} onClick={() => setNavMenuChecker(false)}
                                                className='navUlLink'

                                            >
                                                Contact
                                            </a></li>
                                    </ul>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                                    <Box ><Link className={'navMenuIcons'} to={'https://github.com/Hammad-Hasnain/'}><GitHubIcon /></Link></Box>
                                    {/* <Box ><Link className='navMenuIcons' to={''}><LinkedInIcon /></Link></Box> */}
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>



                    <Stack flexDirection={{ xs: 'column', sm: 'column', md: 'row' }} height={'100%'} >
                        <Box
                            sx={{
                                flexBasis: '50%',
                                display: 'flex',
                                justifyContent: { xs: 'none', sm: 'none', md: 'center' },
                                alignItems: { xs: 'none', sm: 'none', md: 'center' },
                                padding: '60px 10px', display: 'flex', justifyContent: 'center'



                            }}>
                            {/* ================= below nav =============== */}
                            <Box textAlign={'center'}>
                                <Typography sx={{ fontSize: '2em' }}>
                                    Hello!
                                </Typography>
                                <Typography sx={{ fontSize: '3em' }}>
                                    I'm <span style={{ fontWeight: 'bold', }}> Hammad Hasnain</span>
                                </Typography>
                                <Typography sx={{ fontSize: '1.3em' }}>
                                    Mern Stack Web developer
                                </Typography>
                                <Stack sx={{ flexDirection: 'row', justifyContent: 'center', gap: 1, alignItems: 'center' }}>
                                    <Box sx={{ color: 'red' }}>
                                        <Link to={'https://github.com/Hammad-Hasnain/'} className='headerIcons' target='_blank'><GitHubIcon /></Link>
                                    </Box>
                                    {/* <Box>
                                        <Link to={''} className='headerIcons'><LinkedInIcon /></Link>
                                    </Box> */}
                                    <Box>
                                        <a href='mailto:hammadhasnain05@gmail.com' className='headerIcons' ><MailIcon /></a>
                                        {/* <Link to={''} ></Link> */}
                                    </Box>
                                </Stack>
                                <Stack>
                                    <Box>
                                        <a className='downloadBtn' href={HammadHasnainResume}   >
                                            <span>Resume</span>
                                            <span><DownloadIcon /></span>
                                        </a>
                                    </Box>
                                    {/* <Box>
                                        <Button onClick={downloadHandler}>
                                            download
                                        </Button>
                                    </Box> */}
                                </Stack>


                            </Box>
                        </Box>
                        <Box
                            sx={{
                                flexBasis: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}>
                            <Box
                                sx={{

                                    maxWidth: '500px',
                                    minWidth: '300px',
                                    display: {
                                        xs: 'none',
                                        sm: 'none',
                                        md: 'block'
                                    }

                                }}>
                                <img src={img1} alt="" style={{
                                    width: '100%',
                                    filter: 'drop-shadow(0px 0px 10px #000)'

                                }} />
                            </Box>

                        </Box>
                    </Stack>

                </Stack>
            </Stack>
            {/* ========================================== */}



            {/* ==================================== ABOUT ME ==================================== */}
            <About />


            {/* ============================= EDUCATION ============================= */}
            <Education />


            {/* ============================ ACADEMIC SKILLS ============================  */}
            <AcademicSkills />


            {/* ======================== PROFESSINAL SKILLS ======================== */}
            <ProfessionalSkills />


            {/* ======================== MY WORKS ======================== */}
            <MyWork />


            {/* ====================== CLIENT TESTIMONIALS ========================== */}
            < Grid container
                sx={{
                    height: { xs: 'auto', sm: '80vh' }, backgroundColor: '#000',
                    justifyContent: 'center', gap: 2, paddingTop: '3em'
                }}>
                <Grid item  >
                    <Box >
                        <Typography sx={{
                            textAlign: 'center', fontSize: '3em',
                            fontWeight: '600', color: '#17D396', margin: 5
                        }}>Client Testimonials</Typography>
                    </Box>
                    <Box sx={{
                        width: '200px', m: 'auto', overflow: 'hidden', borderRadius: '50%',
                    }}>
                        <img src={img3} alt="" width={'100%'} height={''} style={{
                            "&:hover": {
                                transform: 'Scale(1.4)'
                            }

                        }} />

                    </Box>
                    <Box >
                        <Typography sx={{
                            textAlign: 'center',
                            color: '#fff', margin: '40px 40px 2px',
                            fontStyle: 'italic',
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'center'


                        }}>
                            <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', color: '#17D396', fontSize: '35px' }} />
                            <span style={{ padding: '20px 0', fontSize: '14px' }}>Very Satisfactory Work provided with in a time.</span>
                            <FormatQuoteIcon sx={{ fontSize: '35px', color: '#17D396', }} />
                        </Typography>
                        <Typography sx={{
                            textAlign: 'end',
                            color: '#17D396',
                            fontWeight: '600',
                            fontSize: '14px',
                            marginRight: 5
                        }}>
                            (M. Kamran)
                        </Typography>
                    </Box>
                </Grid>
            </Grid >



            {/* =================== Contact ================== */}
            <Grid container id='contact'
                sx={{
                    height: {
                        xs: 'auto',
                        sm: '60vh',
                        md: '60vh',
                        lg: '70vh'
                    }, width: '100%', backgroundColor: '#17d396'
                }}>
                <Grid item width={'100%'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box >
                        <Typography sx={{
                            textAlign: 'center', fontSize: '3em',
                            fontWeight: '600', color: '#212529', margin: 5
                        }}>Contact</Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                            <Box ><Link to={'https://github.com/Hammad-Hasnain/'}
                                style={{
                                    padding: '10px', borderRadius: '50%',
                                    color: '#212529', display: 'flex',
                                    justifyContent: 'center', boxShadow: '0 0 10px #000',
                                }} ><GitHubIcon style={{ fontSize: '28px' }} /></Link></Box>
                            {/* <Box ><Link to={''}
                                style={{
                                    padding: '10px', borderRadius: '50%',
                                    color: '#212529', display: 'flex',
                                    justifyContent: 'center', boxShadow: '0 0 10px #000',
                                    "&:hover": {
                                        color: '#000'
                                    }
                                }}
                            ><LinkedInIcon /></Link>
                            </Box> */}
                        </Box>
                        <Box sx={{ textAlign: 'center', padding: '10px' }}>
                            <Typography >
                                <span style={{ fontWeight: 'bold', fontSize: '20px' }}> <EmailIcon style={{ fontSize: '25px' }} /> : </span>
                                <a href="mailto:hammadhasnain05@gmail.com"
                                    style={{ fontSize: '20px', }}>hammadhasnain05@gmail.com</a>
                            </Typography>
                            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <WhatsAppIcon />
                                <span style={{ fontSize: '20px', }}>+923231203012</span>
                            </Typography>
                        </Box>

                    </Box>



                </Grid>
            </Grid>





            <Stack sx={{ backgroundColor: '#313741', textAlign: 'center', padding: '5em' }}>
                <Box>
                    <Typography sx={{ color: '#17D396', fontWeight: 600, fontSize: '50px' }}>My Moto</Typography>
                </Box>
                <Box >
                    <Typography sx={{
                        color: '#f5f5f5', fontSize: '1.2em',
                        display: 'flex', justifyContent: 'center', alignItems: 'baseline'
                    }}>
                        <FormatQuoteIcon sx={{ transform: 'rotate(180deg)', color: '#17D396', fontSize: '35px' }} />
                        <span style={{ padding: '20px 5px 0 5px', fontStyle: 'italic' }}>
                            Delivering Satisfactory Project in Time
                        </span>
                        <FormatQuoteIcon sx={{ fontSize: '35px', color: '#17D396', }} />


                    </Typography>
                </Box>
            </Stack>



            <footer id='hh'>
                <Box sx={{ backgroundColor: '#000', p: 2, textAlign: 'center' }}>
                    <Typography sx={{ color: '#17D396', fontSize: '12px' }}>HSquare Portfolio © 2023. ALL RIGHTS RESERVED.</Typography>
                </Box>
            </footer>
        </div >
    )
}

export default Portfolio2