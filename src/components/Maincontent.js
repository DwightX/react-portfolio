import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import logo from '../images/bmlaptop.png'
import { Container } from '@mui/material';

const Maincontent = props => {
    return (
  <Container maxWidth="xl" style={{margin:' 0 auto', padding: '0 50px 0 50px' }}>
                <Box sx={{ display: 'flex',justifyContent:'space-evenly',flexWrap:'wrap'}} >
                    <Grid container spacing={2}> 
                        <Grid item xs={12} md={7} >
                            <Box className="leftBlock">
                            <Box className="leftWrapper" style={{display:'grid'}}>
                                <Grid item xs={12} className="leftheadText">
                                <h1 className="headOne">DWIGHT CARTER JR <span className="headSpecial">DEVELOPER</span></h1>
                                </Grid>
                                <Grid item xs={12} className="contentBox">
                                AS A DEVELOPER, I DISPLAY MY SKILLS BEHIND THE SCENES BUILDING ROBUST FULL-STACK WEB APPLICATIONS THAT LOOK GREAT, WORK FAST AND PERFORM WELL 
                                WITH A SEAMLESS USER EXPERIENCE.
                                </Grid>
                            </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box>
                                <img style={{height:"auto",width:"100%"}} src={logo} alt='Logo'/>
                            </Box>
                            <Grid item xs={12} style={{textAlign:'center'}}>
                                <Link className="linksMain" sx={{m:2}} href="https://www.linkedin.com/in/dwight-carter-b9025bb1/">Linkdin</Link>
                                <Link className="linksMain" sx={{m:2}} href="https://github.com/dwightx">GitHub</Link>
                                <Link className="linksMain" sx={{m:2}} href="https://docs.google.com/document/d/1i6ktrb8iiH-6tiGLRiBayXrLW5_puAK5kys8m6b8sUI/edit?usp=sharing">Resume</Link>
                                </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    )
}


export default Maincontent
