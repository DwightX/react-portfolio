import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import logo from '../images/bmlaptop.png'
import { Container } from '@mui/material';
import Animate from '@charlesvien/react-animatecss';


const Maincontent = props => {
    return (
  <Container maxWidth={'1'} disableGutters={true}>
                <Box className="section-Main" sx={{display: 'flex',justifyContent:'space-evenly',flexWrap:'wrap'}} >
                    <Grid maxWidth='xl'container spacing={2}> 
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
                                <div class="flex justify-center pt-40">
                                    <svg class="animate-bounce w-10 h-10 opacity-80	" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="white">
                                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </div>
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
                            <Grid item xs={12} style={{textAlign:'center'}} className=' flexflex-wrap'>
                                <Link className="linksMain" sx={{m:2}} href="https://www.linkedin.com/in/dwight-carter-b9025bb1/">LINKEDIN</Link>
                                <Link className="linksMain" sx={{m:2}} href="https://github.com/dwightx">GITHUB</Link>
                                <Link className="linksMain" sx={{m:2}} href="https://docs.google.com/document/d/1i6ktrb8iiH-6tiGLRiBayXrLW5_puAK5kys8m6b8sUI/edit?usp=sharing">RESUME</Link>
                                <Link className="linksMain" sx={{m:2}} href="/blog" exact>BLOG</Link>
                                </Grid>
                                </Animate>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    )
}


export default Maincontent
