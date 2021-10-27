import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import logo from '../images/bmlaptop.png'

const Maincontent = props => {
    return (
  <div style={{ height: '90vh', margin: 0, padding: '0 50px 0 50px' }}>
                <Box sx={{ display: 'flex',justifyContent:'space-evenly', pt:10, flexWrap:'wrap'}} >
                    <Grid container spacing={2}> 
                        <Grid item xs={3} md={3}> 
                            <Box>
                                <h1 className="headOne">Dwight Carter Jr</h1>
                                <div>
                                <Link className="linksMain" sx={{m:2}} href="https://www.linkedin.com/in/dwight-carter-b9025bb1/">Linkdin</Link>
                                <Link className="linksMain" sx={{m:2}} href="https://github.com/dwightx">GitHub</Link>
                                <Link className="linksMain" sx={{m:2}} href="https://docs.google.com/document/d/1i6ktrb8iiH-6tiGLRiBayXrLW5_puAK5kys8m6b8sUI/edit?usp=sharing">Resume</Link>
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={9} md={6}>
                            <Box>
                                <img style={{maxHeight:"500px"}} src={logo} alt='Logo'/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box>
                                <h1 className="headOne" >Developer</h1>
                                <p className="textColor">Customer-focused developer with experience building robust full-stack web applications.</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
    )
}


export default Maincontent
