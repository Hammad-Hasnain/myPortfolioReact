import { Box, Stack, Typography, Button as MuiButton, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
// import OffcanvasExample from '../components/Navbar'
import img1 from '../images/myPic2.png'
// import img2 from '../images/myPic2rotated.png'
import img2 from '../images/myPIcRotated.png'
import img3 from '../images/sirKamran.jpg'
import work1 from '../images/myWork/hackathon.png'
import work2 from '../images/myWork/akka2.png'
import MenuIcon from '@mui/icons-material/Menu';
import { Image, Web } from '@mui/icons-material'
import CodeIcon from '@mui/icons-material/Code';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';
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
import redux from '../images/redux.svg'
import firebase from '../images/firebase.png'
import mui from '../images/mui.png'
import react from '../images/react.png'
import js from '../images/js.png'
import css3 from '../images/css3.png'
import html5 from '../images/html5.png'
import EmailIcon from '@mui/icons-material/Email';
import bootstrap from '../images/bootstrap.png'
import Navbar from '../components/Navbar'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import resume from '../file/resume.pdf'





const Portfolio2 = () => {

    const [navMenuChecker, setNavMenuChecker] = useState(false)


    const hackathonWeb = () => {
        // window.location.replace('https://mr-h-hackathon.netlify.app/')
        window.location.href = 'https://mr-h-hackathon.netlify.app/'
        // window.open("https://mr-h-hackathon.netlify.app/")
        // return <Navigate to="https://mr-h-hackathon.netlify.app/" />

    }

    // myWork()
    const akkaWeb = () => {
        window.location.href = "https://al-kamrankidzacademy.web.app/"
        // return <Navigate to="https://al-kamrankidzacademy.web.app/" />

    }


    // myWork()
    const navMenuHandler = () => {
        navMenuChecker ? setNavMenuChecker(false) : setNavMenuChecker(true)
    }








    const professionalSkills = [
        { tag: 'HTML 5', img: html5, color: '#e34f27', width: '30px', border: '2px solid #e34f27' },
        { tag: 'CSS 3', img: css3, color: '#337ce4', width: '25px', border: '2px solid #337ce4' },
        { tag: 'Java Script', img: js, color: '#ffa500', width: '30px', border: '2px solid #ffa500' },
        { tag: 'React JS', img: react, color: '#087ea3', width: '30px', border: '2px solid #087ea3' },
        { tag: 'Bootstrap', img: bootstrap, color: '#8811fb', width: '35px', border: '2px solid #8811fb' },
        { tag: 'Material UI', img: mui, color: '#007fff', width: '30px', border: '2px solid #007fff' },
        { tag: 'Firebase', img: firebase, color: '#ffa500', width: '30px', border: '2px solid #ffa500' },
        { tag: 'Redux', img: redux, color: '#764abc', width: '30px', border: '2px solid #764abc' },

    ]


    const downloadHandler = async (e) => {
        // Assuming your PDF file is stored in your public folder
        const pdfUrl = resume;
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
                                padding: '60px 10px',display:'flex',justifyContent:'center'



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
                                        <a className='downloadBtn' href={resume}   >
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
                                        md:'block'
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
                            <span style={{ color: '#17d396' }}> Firebase</span>, &
                            <span style={{ color: '#17d396' }}> GitHub</span>,
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


            {/* ============================= EDUCATION ============================= */}
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


            {/* ============================ ACADEMIC SKILLS ============================  */}
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







            {/* ======================== PROFESSINAL SKILLS ======================== */}
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




            {/* ======================== MY WORKS ======================== */}
            < Grid container sx={{
                height: {
                    sx: 'auto',
                    sm: 'auto',
                    md: '80vh',
                },
                backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', gap: 2,
                p: 5

            }}>

                <Grid item xs={10} sm={8} md={8} lg={4} overflow={'hidden'}>
                    <Box
                        onClick={hackathonWeb}
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

                <Grid item xs={10} sm={8} md={8} lg={4} overflow={'hidden'}>
                    <Box
                        onClick={akkaWeb}
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
            </Grid >






            {/* ====================== CLIENT TESTIMONIALS ========================== */}
            < Grid container
                sx={{
                    height: { xs: 'auto', sm: '80vh' }, backgroundColor: '#000',
                    justifyContent: 'center', gap: 2,paddingTop:'3em'
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
                        md:'60vh',
                        lg:'70vh'
                    }, width: '100%', backgroundColor: '#17d396'
                }}>
                <Grid item width={'100%'} sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
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
                    <Typography sx={{ color: '#17D396', fontSize: '12px' }}>Mr-H Portfolio © 2023. ALL RIGHTS RESERVED.</Typography>
                </Box>
            </footer>
        </div >
    )
}

export default Portfolio2