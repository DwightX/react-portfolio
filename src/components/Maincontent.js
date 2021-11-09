import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import logo from '../images/bmlaptop.png'
import { Container } from '@mui/material';
import Animate from '@charlesvien/react-animatecss';


const Maincontent = props => {
    return (
<div className="container mx-auto">
<div className="section-Main md:max-w-screen-2xl items-center">
    <div className='flex flex-wrap'> 
        <div className='mx auto w-screen lg:w-1/2'>
            <div className="leftBlock">
            <div className="leftWrapper">
                <div className="md:leftheadText">
                <h1 className="headOne">DWIGHT CARTER JR 
                <span className="headSpecial"> DEVELOPER</span>
                </h1>
                </div>
                <div class="contentBox lg:w-11/12">
                    <p className='text-base sm:text-2xl'>
                    As a developer, I display my skills behind the scenes building 
                    robust full-stack web applications that look great, work fast and 
                    perform well with a seamless user experience.
                    </p>
                </div>
                <div class="hidden text-center lg:block lg:flex lg:justify-center lg:pt-22">
                    <svg class="animate-bounce w-10 h-10 opacity-80	" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="white">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
            </div>
        </div>
        <div className='mx-auto lg:w-1/2'>
            <div>
                <img className='hidden w-80 lg:w-full lg:h-auto lg:block' src={logo} alt='Logo'/>
            </div>
            <Animate
            animationIn="fadeIn"
            inDuration={1000}
            visible
            >
            <div className='mx-auto lg:flex-wrap lg:text-center'>
                <Link className="linksMain" sx={{m:2}} href="https://www.linkedin.com/in/dwight-carter-b9025bb1/">LINKEDIN</Link>
                <Link className="linksMain" sx={{m:2}} href="https://github.com/dwightx">GITHUB</Link>
                <Link className="linksMain" sx={{m:2}} href="https://docs.google.com/document/d/1i6ktrb8iiH-6tiGLRiBayXrLW5_puAK5kys8m6b8sUI/edit?usp=sharing">RESUME</Link>
                <Link className="linksMain" sx={{m:2}} href="/blog" exact>BLOG</Link>
                </div>
                </Animate>
        </div>
        </div>
    </div>
</div>
    )
}


export default Maincontent
