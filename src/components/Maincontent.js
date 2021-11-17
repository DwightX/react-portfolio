import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import logo from '../images/bmlaptop.png'
import { Container } from '@mui/material';
import Animate from '@charlesvien/react-animatecss';


const Maincontent = (props) => {
  return (
    <div className="container mx-auto">
      <div className="section-Main lg:max-w-screen-lg lg:mx-auto">
        <div className=" flex flex-col px-4">
          <div className="specialName">
            <h1>Hi, my name is</h1>
          </div>
          <div className="mainName">
            <h1 className="">DWIGHT CARTER</h1>
          </div>
          <div className="specialTitle">
            <h1 className=" ">WEB DEVELOPER</h1>
          </div>
          <div className="mainBlurb">
            <p className="text-lg">
              As a developer, I display my skills behind the scenes building
              robust full-stack web applications that look great, work fast and
              perform well with a seamless user experience.
            </p>
          </div>
          <Animate animationIn="fadeIn mt-16" inDuration={3000} visible>
            <div className="flex flex-wrap justify-evenly">
              <Link
                className="linksMain"
                href="https://www.linkedin.com/in/dwight-carter-b9025bb1/"
              >
                LINKEDIN
              </Link>
              <Link className="linksMain" href="https://github.com/dwightx">
                GITHUB
              </Link>
              <Link
                className="linksMain"
                href="https://docs.google.com/document/d/1i6ktrb8iiH-6tiGLRiBayXrLW5_puAK5kys8m6b8sUI/edit?usp=sharing"
              >
                RESUME
              </Link>
              <Link className="linksMain" href="/blog" exact>
                BLOG
              </Link>
            </div>
          </Animate>

          <div class="text-center mt-16 lg:block lg:flex lg:pt-40">
            <svg
              class="animate-bounce w-10 h-10 opacity-80 mx-auto"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Maincontent
