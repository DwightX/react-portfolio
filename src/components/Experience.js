import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import avi from '../images/memoji.png'
import { Container } from '@mui/material';



const Experience = props => {
    return (
        <div className="container mx-auto">
            {/* <div className="backGround"></div> */}
            <div className="section-Experience items-center px-4">
                <div className='flex flex-wrap'>
                    <div className=''>
                        <div className="sectionTitles">
                            <h1 className="pb-2">
                               EXPERIENCE
                            </h1>
                        </div>
                        <div className="specialBlurb">
                        <p>" From working overnight in a call center to being a self taught developer "</p>
                        </div>
                        <img src={avi} alt='This is me'></img>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className='py-4 textBlurbs'>
                            <h2 className='jobTitle'>FRONT END WEB DEVELOPER</h2>
                            <p>For years, Zaniboni Lighting has been developing a line of products aimed at the us architectural market.</p>
                            <h3><a className="jobCompany" href="https://zanibonilighting.com/">ZANIBONI LIGHTING</a></h3>
                        </div>
                        <div className='py-4 textBlurbs'>
                            <h2 className='jobTitle'>JR FRONT END WEB DEVELOPER</h2>
                            <p>Offers individualized treatment in an executive level women's only setting for mental and behavioral challenges.</p>
                            <h3><a className="jobCompany" href="https://thewaveclearwater.com/">THE WAVE</a></h3>
                        </div>
                        <div className='py-4 textBlurbs' >
                            <h2 className='jobTitle'>JR CONTENT DEVELOPER</h2>
                            <p>An orlando-based company providing user-friendly, engaging educational and training solutions for the public.</p>
                            <h3> <a className="jobCompany" href="https://www.h2itsolutions.com/">H2 IT SOLUTIONS</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Experience
