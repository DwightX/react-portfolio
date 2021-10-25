import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import logo from '../images/bmlaptop.png'



const Maincontent = props => {
    return (
  <div style={{ height: '90vh', margin: 0, padding: 0 }}>
                <Box sx={{ display: 'flex'}} style={{ height: '10vh' }} >
                    <Box>
                        <h1>Dwight Carter Jr</h1>
                        <div>
                        <Link className="linksMain" sx={{m:2}} color="secondary" href="https://www.linkedin.com/in/dwight-carter-b9025bb1/">Linkdin</Link>
                        <Link className="linksMain" sx={{m:2}} color="secondary" href="https://github.com/dwightx">GitHub</Link>
                        <Link className="linksMain" sx={{m:2}} color="secondary" href="https://docs.google.com/document/d/1i6ktrb8iiH-6tiGLRiBayXrLW5_puAK5kys8m6b8sUI/edit?usp=sharing">Resume</Link>
                        </div>
                    </Box>
                    <Box>
                        <img style={{maxHeight:"400px"}} src={logo} alt='Logo'/>
                    </Box>
                    <Box>
                        <h4>Web Developer</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                    </Box>
                </Box>
            </div>
    )
}


export default Maincontent
