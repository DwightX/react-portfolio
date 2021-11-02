import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import avi from '../images/memoji.png'
import { Container } from '@mui/material';



const Experience = props => {
    return (
        <Container maxWidth="xl" style={{margin:' 0 auto', padding: '0 50px 0 50px' }}>
            <Box className="section-Experience">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <div>
                            <h1 className="pageTitles">
                                <span className='text-8xl'>Experience</span>
                            </h1>
                            <p className="textBlurbs">From working overnight in a call center to being a self taught developer.</p>
                        </div>
                        <img src={avi} alt='This is me'></img>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <div className='py-4 textBlurbs'>
                            <h2><span className='thirdColorBG text-2xl px-1'>FRONT END WEB DEVELOPER</span> ZANIBONI LIGHTING</h2>
                            <p>For years, Zaniboni Lighting has been developing a line of products aimed at the us architectural market.</p>
                        </div>
                        <div className='py-4 textBlurbs'>
                            <h2 className='pb-2'><span className='thirdColorBG text-2xl px-1'>JR FRONT END WEB DEVELOPER</span> THE WAVE OF CLEARWATER</h2>
                            <p>The Wave of clearwater offers individualized treatment in an executive level women's only setting for mental and behavioral challenges.</p>
                        </div>
                        <div className='py-4 textBlurbs' >
                            <h2 className='pb-2'><span className='thirdColorBG text-2xl px-1'>JR FRONT END WEB DEVELOPER / CONTENT DEVELOPER</span> H2 IT SOLUTIONS</h2>
                            <p>H2-IT solutions is an orlando-based company providing user-friendly, engaging educational and training solutions for the public.</p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}



export default Experience
