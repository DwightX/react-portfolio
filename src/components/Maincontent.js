import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import logo from '../images/bmlaptop.png'
import { Container } from '@mui/material';
import Animate from '@charlesvien/react-animatecss';


const Maincontent = props => {
    return (
  <Container maxWidth="xl" style={{margin:' 0 auto', padding: '0 50px 0 50px' }}>
                <Box sx={{ display: 'flex',justifyContent:'space-evenly',flexWrap:'wrap'}} >
                    <Grid container spacing={2}> 
                        <Grid item xs={12} md={7} >
                            <Box className="leftBlock">
                            <Box className="leftWrapper" style={{display:'grid'}}>
                                <Grid item xs={12} className="leftheadText">
                                <h1 className="headOne">DWIGHT CARTER JR 
                                <span className="headSpecial"> DEVELOPER</span>
                                </h1>
                                </Grid>
                                <Grid item xs={12} className="contentBox">
                                    <p>
                                    As a developer, I display my skills behind the scenes building 
                                    robust full-stack web applications that look great, work fast and 
                                    perform well with a seamless user experience.
                                    </p>
                                </Grid>
                            </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box>
                                <img style={{height:"auto",width:"100%"}} src={logo} alt='Logo'/>
                            </Box>
                            <Animate
                            animationIn="fadeIn"
                            inDuration={1000}
                            visible
                            >
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <Link className="linksMain" sx={{m:2}} href="https://www.linkedin.com/in/dwight-carter-b9025bb1/">LINKEDIN</Link>
                                <Link className="linksMain" sx={{m:2}} href="https://github.com/dwightx">GITHUB</Link>
                                <Link className="linksMain" sx={{m:2}} href="https://docs.google.com/document/d/1i6ktrb8iiH-6tiGLRiBayXrLW5_puAK5kys8m6b8sUI/edit?usp=sharing">RESUME</Link>
                                <Link className="linksMain"  href="/blog" exact>BLOG</Link>
                                </Grid>
                                </Animate>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    )
}


export default Maincontent
